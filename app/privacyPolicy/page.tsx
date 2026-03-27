import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fari Global Overseas",
  description: "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6 md:px-28 font-sans pt-24">

      {/* Header / Breadcrumb */}
      <div className="mb-8">
       

        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary underline">
          Privacy Policy
        </h1>

        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-800 leading-relaxed">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, 
            and any other details you provide when using our services or contacting us.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            Your information may be used to provide our services, respond to inquiries, 
            improve our website, and communicate important updates or promotional offers. 
            We do not sell or rent your personal information to third parties.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience 
            on our website, analyze traffic, and customize content. You can manage cookie 
            preferences through your browser settings.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party services. We are not responsible 
            for the privacy practices of these services and encourage you to read their privacy policies.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Children’s Privacy</h2>
          <p>
            Our website and services are not intended for children under the age of 13. 
            We do not knowingly collect personal information from children.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted 
            on this page, and continued use of the website indicates your acceptance of the updated policy.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Contact Information</h2>
          <p>
            For questions regarding this Privacy Policy, please contact us through our Contact page.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-20 text-gray-500 text-sm border-t pt-4">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  );
}