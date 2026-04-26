 import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [exchangeRate, setExchangeRate] = useState(278.50);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const currencies = ['USD', 'PKR', 'INR', 'EUR', 'GBP', 'AED', 'SAR', 'CAD', 'TRY'];

 
  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
      setLoading(false);
    };

    fetchRates();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setResult((amount * exchangeRate).toFixed(2));
  }, [amount, exchangeRate]);

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-pink-50 font-sans">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
          Global Price Converter 
        </h2>
        <p className="text-xs text-gray-400 mt-1">Powered by Real-Time Exchange Rates</p>
      </div>
      
      <div className="space-y-6">
        {/* Amount Input */}
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
          <label className="text-[10px] font-bold text-pink-400 uppercase tracking-widest ml-1">You Give</label>
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-400 mr-2">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-2xl font-bold text-gray-700"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Selection Row */}
        <div className="flex items-center justify-between gap-2">
          <select 
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="flex-1 p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm font-semibold text-gray-600 outline-none"
          >
            {currencies.map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>

          <div className="p-2 bg-pink-100 rounded-full animate-pulse">
            <span className="text-pink-500 font-bold">⇄</span>
          </div>

          <select 
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="flex-1 p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm font-semibold text-gray-600 outline-none"
          >
            {currencies.map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>

        {/* Dynamic Result Card */}
        <div className="relative overflow-hidden p-6 bg-gray-900 rounded-[2rem] text-center shadow-xl">
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <span className="text-gray-400 text-xs font-medium">You Get Approximately</span>
          <div className="text-3xl font-black text-white mt-1">
            {loading ? "Updating..." : `${result} ${toCurrency}`}
          </div>
          <p className="text-[10px] text-pink-300 mt-2 opacity-80">1 {fromCurrency} = {exchangeRate.toFixed(2)} {toCurrency}</p>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-bold shadow-lg shadow-pink-200 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Update Latest Rates 
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
