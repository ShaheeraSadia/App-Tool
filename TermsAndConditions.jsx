import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => 
  // جب پیج لوڈ ہو تو یہ اسکرول کو سب سے اوپر لے جائے گا
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f8ff] text-[#1c1c1e] font-sans antialiased">
      {/* CSS Variables Injector for Custom Theme */}
      <style>{`
        .highlight-box { background: #f0f4ff; border-left: 4px solid #2b4fd8; border-radius: 0 10px 10px 0; padding: 16px 20px; margin: 16px 0; font-size: 14px; color: #374a80; line-height: 1.7; }
        .affiliate-box { background: #fff8e1; border: 1px solid #ffe082; border-radius: 10px; padding: 16px 20px; margin: 16px 0; font-size: 14px; color: #7c6b00; line-height: 1.7; }
        .policy-section { background: #ffffff; border-radius: 14px; box-shadow: 0 4px 24px rgba(43,79,216,0.09); border: 1px solid #dde6ff; padding: 32px 36px; margin-bottom: 20px; }
        .policy-section h2 { font-family: 'Lora', serif; font-size: 20px; color: #1a3199; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .policy-section h2 i { font-size: 18px; color: #2b4fd8; }
        .policy-section p { font-size: 14.5px; color: #6b7280; line-height: 1.8; margin-bottom: 12px; }
        .policy-section ul { font-size: 14.5px; color: #6b7280; padding-left: 22px; list-style-type: disk; line-height: 2.1; margin-top: 8px; }
        .toc { background: #ffffff; border-radius: 14px; box-shadow: 0 4px 24px rgba(43,79,216,0.09); border: 1px solid #dde6ff; padding: 24px 28px; margin-bottom: 28px; }
      `}</style>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#1a3199] via-[#2b4fd8] to-[#00b4db] color-white text-white py-16 px-6 text-center">
        <span className="inline-block bg-white/20 border border-white/30 text-[11px] font-semibold tracking-[2px] uppercase px-4 py-1 rounded-full mb-4">
          Legal
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">Terms of Service</h1>
        <p className="text-sm md:text-base opacity-90 max-w-lg mx-auto">
          Please read these terms carefully before using Toolkit Pro and its free tools.
        </p>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-[860px] mx-auto px-6 py-12">
        
        {/* LAST UPDATED BADGE */}
        <div className="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#2b4fd8] text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <i className="fas fa-calendar-check"></i> Last Updated: May 17, 2026
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="toc">
          <h3 className="font-serif text-base text-[#1a3199] font-bold mb-3">Table of Contents</h3>
          <ol className="list-decimal pl-5 flex flex-col gap-2 text-sm text-[#2b4fd8]">
            <li><a href="#acceptance" className="hover:underline">Acceptance of Terms</a></li>
            <li><a href="#use" className="hover:underline">Use of Our Tools</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy & Image Data</a></li>
            <li><a href="#intellectual" className="hover:underline">Intellectual Property</a></li>
            <li><a href="#affiliate" className="hover:underline">Affiliate Disclosure</a></li>
            <li><a href="#adsense" className="hover:underline">Google AdSense Advertising</a></li>
            <li><a href="#disclaimer" className="hover:underline">Disclaimer of Warranties</a></li>
            <li><a href="#limitation" className="hover:underline">Limitation of Liability</a></li>
            <li><a href="#changes" className="hover:underline">Changes to Terms</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* 1. ACCEPTANCE */}
        <div className="policy-section" id="acceptance">
          <h2><i className="fas fa-handshake"></i> 1. Acceptance of Terms</h2>
          <p>By accessing or using <strong>Toolkit Pro</strong>, accessible at <a href="https://app-tool.vercel.app" className="text-[#2b4fd8] hover:underline">https://app-tool.vercel.app</a> and developed by <strong>Shaheera Sadia</strong>, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to all of these terms, you must not use our website or tools.</p>
          <p>These terms apply to all visitors, users, and others who access or use Toolkit Pro. Our tools are provided for creators and developers worldwide and are intended for lawful, personal, and commercial use in accordance with these terms.</p>
          <div className="highlight-box">
            <strong>Agreement:</strong> Continued use of Toolkit Pro after any changes to these Terms constitutes your acceptance of the updated Terms of Service.
          </div>
        </div>

        {/* 2. USE OF TOOLS */}
        <div className="policy-section" id="use">
          <h2><i className="fas fa-tools"></i> 2. Use of Our Tools</h2>
          <p>Toolkit Pro grants you a limited, non-exclusive, non-transferable, revocable license to use our tools for personal and commercial purposes. When using Toolkit Pro, you agree to:</p>
          <ul>
            <li>Use our tools only for lawful purposes and in accordance with these Terms</li>
            <li>Not use our tools in any way that violates applicable local, national, or international laws or regulations</li>
            <li>Not use our tools to process, upload, or distribute illegal, harmful, defamatory, or infringing content</li>
            <li>Not attempt to decompile, reverse engineer, or disassemble any portion of our tools</li>
            <li>Not use any automated means to access or scrape our website without prior written permission</li>
            <li>Not interfere with or disrupt the integrity or performance of the website or its data</li>
          </ul>
          <p className="mt-3">We reserve the right to terminate your access to Toolkit Pro at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.</p>
        </div>

        {/* 3. PRIVACY & DATA */}
        <div className="policy-section" id="privacy">
          <h2><i className="fas fa-lock"></i> 3. Privacy & Image Data</h2>
          <p>We prioritize your privacy above all else. Here is exactly how Toolkit Pro handles the content you interact with:</p>
          <ul>
            <li><strong>Image Compressor:</strong> All processing happens locally in your browser via JavaScript. Images are never uploaded to our servers.</li>
            <li><strong>Color Palette Extractor:</strong> Color extraction is performed entirely client-side. No image data leaves your device.</li>
            <li><strong>Nature Quote Designer:</strong> Your photo and text are processed locally. The downloadable design is generated entirely in your browser.</li>
            <li><strong>QR Code Generator:</strong> QR codes are generated client-side. The URL you enter is never stored or logged by us.</li>
          </ul>
          <p className="mt-3">Any personal information you provide through our contact form is handled in accordance with our Privacy Policy. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
        </div>

        {/* 4. INTELLECTUAL PROPERTY */}
        <div className="policy-section" id="intellectual">
          <h2><i className="fas fa-copyright"></i> 4. Intellectual Property</h2>
          <p>Toolkit Pro and its original content, features, and functionality are and will remain the exclusive property of <strong>Shaheera Sadia</strong>. Our website is protected by applicable copyright, trademark, and other intellectual property laws.</p>
          <p>You are granted a license to use the tools on Toolkit Pro. This license does not include:</p>
          <ul>
            <li>The right to resell or commercially exploit the tools or their source code</li>
            <li>The right to copy, reproduce, or duplicate any portion of the Toolkit Pro website</li>
            <li>The right to use any data mining, robots, or similar data gathering methods on our site</li>
          </ul>
          <p className="mt-3">Output created using our tools (compressed images, extracted color palettes, QR codes, designed quote cards) belongs entirely to you. You retain full ownership of any content you create using Toolkit Pro.</p>
        </div>

        {/* 5. AFFILIATE DISCLOSURE */}
        <div className="policy-section" id="affiliate">
          <h2><i className="fab fa-amazon"></i> 5. Affiliate Disclosure</h2>
          <div className="affiliate-box"> 
            <strong>Important Disclosure:</strong> Toolkit Pro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </div>
          <p>Some pages on Toolkit Pro — particularly the Shopping and Resources pages — contain <strong>Amazon affiliate links</strong>. This means:</p>
          <ul>
            <li>If you click an affiliate link and make a purchase, we may earn a small commission</li>
            <li>This commission comes at <strong>no extra cost to you whatsoever</strong> — you pay the same price as you would on Amazon directly</li>
            <li>Affiliate commissions help support Toolkit Pro and keep all our tools free for everyone</li>
            <li>We only recommend products that we genuinely believe offer good value</li>
            <li>Our editorial content and product recommendations are not influenced by affiliate compensation</li>
          </ul>
          <p className="mt-3">This disclosure is made in compliance with the Federal Trade Commission (FTC) guidelines for endorsements and testimonials in advertising.</p>
        </div>

        {/* 6. ADSENSE */}
        <div className="policy-section" id="adsense">
          <h2><i className="fab fa-google"></i> 6. Google AdSense Advertising</h2>
          <p>Toolkit Pro uses <strong>Google AdSense</strong> to display advertisements on our website. These advertisements help support the development and maintenance of our free tools.</p>
          <p>By using Toolkit Pro, you acknowledge and agree that:</p>
          <ul>
            <li>Google AdSense may display ads based on your browsing history and interests</li>
            <li>Google uses cookies (including the DART cookie) to serve ads based on prior website visits</li>
            <li>You can opt out of personalized advertising by visiting Google Ads Settings</li>
            <li>Third-party vendors, including Google, use cookies to serve ads on our site</li>
            <li>Toolkit Pro does not control the content of advertisements served by Google AdSense</li>
          </ul>
          <div className="highlight-box">
            <strong>Ad Policy:</strong> All advertising on Toolkit Pro is served through Google AdSense and complies with Google's Publisher Policies. We do not display ads that promote illegal products, services, or content that violates Google's guidelines.
          </div>
        </div>

        {/* 7. DISCLAIMER */}
        <div className="policy-section" id="disclaimer">
          <h2><i className="fas fa-exclamation-triangle"></i> 7. Disclaimer of Warranties</h2>
          <p>The tools, content, and services on Toolkit Pro are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without any warranties of any kind, either express or implied.</p>
          <p>Toolkit Pro and Shaheera Sadia expressly disclaim all warranties, including but not limited to:</p>
          <ul>
            <li>Implied warranties of merchantability and fitness for a particular purpose</li>
            <li>Warranties that the website will be uninterrupted, error-free, or free of viruses</li>
            <li>Warranties that results obtained from using our tools will be accurate or reliable</li>
          </ul>
          <p className="mt-3">While we strive for 100% accuracy in our compression and color extraction algorithms, we cannot guarantee perfect results in all cases. We are not responsible for any technical errors, data loss, or corruption that may occur while using our tools.</p>
        </div>

        {/* 8. LIMITATION OF LIABILITY */}
        <div className="policy-section" id="limitation">
          <h2><i className="fas fa-balance-scale"></i> 8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, <strong>Shaheera Sadia</strong> and <strong>Toolkit Pro</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
          <ul>
            <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Damages resulting from unauthorized access to your data or transmissions</li>
            <li>Damages resulting from the conduct of any third party on the website</li>
            <li>Any other matter relating to our tools or services</li>
          </ul>
          <p className="mt-3">In jurisdictions that do not allow the exclusion of certain warranties or limitations of liability, our liability shall be limited to the maximum extent permitted by law.</p>
        </div>

        {/* 9. CHANGES TO TERMS */}
        <div className="policy-section" id="changes">
          <h2><i className="fas fa-sync-alt"></i> 9. Changes to These Terms</h2>
          <p>We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page.</p>
          <p>What constitutes a material change will be determined at our sole discretion. By continuing to access or use Toolkit Pro after any revisions become effective, you agree to be bound by the revised terms.</p>
          <p>If you do not agree to the new terms, please stop using Toolkit Pro.</p>
        </div>

        {/* 10. CONTACT */}
        <div className="policy-section" id="contact">
          <h2><i className="fas fa-envelope"></i> 10. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <ul className="!list-none !pl-0 flex flex-col gap-2 text-sm text-[#6b7280]">
            <li><strong className="text-[#1c1c1e]">Email:</strong> shaheerasadia@gmail.com</li>
            <li><strong className="text-[#1c1c1e]">Developer:</strong> Shaheera Sadia</li>
            <li><strong className="text-[#1c1c1e]">Location:</strong> Mandi Bahauddin, Punjab, Pakistan</li>
            <li><strong className="text-[#1c1c1e]">GitHub:</strong> github.com/shaheerasadia</li>
          </ul>
          <p className="mt-3">We aim to respond to all inquiries within <strong>48 hours</strong> on business days.</p>
        </div>

        {/* CALL TO ACTION CARD */}
        <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e8f0fe] rounded-2xl border border-[#c0d0f8] p-8 text-center mt-8">
          <h3 className="font-serif text-xl text-[#1a3199] font-bold mb-2">Have Questions About These Terms?</h3>
          <p className="text-sm text-[#374a80] mb-5">We are happy to clarify anything in our Terms of Service. Reach out directly — we read every message.</p>
          <a href="mailto:shaheerasadia@gmail.com" className="inline-block bg-gradient-to-r from-[#1a3199] to-[#3d72d4] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition">
            <i className="fas fa-envelope mr-2"></i> shaheerasadia@gmail.com
          </a>
          <div className="mt-4 text-xs text-[#374a80] flex justify-center gap-4">
            <Link to="/privacy-policy" className="text-[#2b4fd8] hover:underline">← View Privacy Policy</Link>
            <span>·</span>
            <Link to="/resources" className="text-[#2b4fd8] hover:underline">Visit Resources Page</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
