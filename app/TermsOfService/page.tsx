import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Fari Global Overseas",
  description: "Read our Terms of Service to understand the rules and guidelines for using our website and services."
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6 md:px-28 font-sans pt-24">
      
      {/* Header / Breadcrumb */}
      <div className="mb-8">
       

        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary underline">
          Terms of Service
        </h1>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Please read these Terms of Service carefully before using our website or services.
        </p>
      </div>

      {/* Document Content */}
      <div className="space-y-10 text-gray-800 leading-relaxed">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using our website, you agree to comply with these Terms of Service.
            If you do not agree with any part of these terms, please refrain from using our services.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">2. Use of Services</h2>
          <p>
            Our services are provided for general informational and business purposes. You agree 
            to use our services only for lawful purposes and not to misuse or disrupt the website 
            in any way.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">3. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their information 
            and ensuring that all data they provide is accurate and up-to-date.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design elements, 
            is the property of our company and may not be copied, reproduced, or used without 
            prior written permission.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            We are not liable for any damages, losses, or expenses that may occur from using 
            this website or our services.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will be published on 
            this page, and continued use of the website indicates your acceptance of the updated terms.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Contact Information</h2>
          <p>
            For questions regarding these Terms of Service, please contact us via our Contact page.
          </p>
        </div>

      </div>

      {/* Footer for A4-style Document */}
      <div className="mt-20 text-gray-500 text-sm border-t pt-4">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  );
}