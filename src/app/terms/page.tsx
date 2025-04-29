import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <p className="text-gray-400 mb-4 text-center">Last Updated: February 25, 2025</p>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-300">
            Welcome to CLUMOSS! By accessing or using our website, products, and services, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        {/* 2. Use of Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Use of Services</h2>
          <p className="text-gray-300">
            CLUMOSS provides AI-powered SaaS solutions. You agree to use our services for lawful purposes only and not engage in any activity that disrupts or harms our platform.
          </p>
        </section>

        {/* 3. User Accounts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
          <p className="text-gray-300">
            If you create an account with us, you are responsible for maintaining its confidentiality. Any unauthorized use of your account must be reported immediately.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
          <p className="text-gray-300">
            All content, logos, trademarks, and software on our platform belong to CLUMOSS. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </section>

        {/* 5. Payment & Subscription */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Payment & Subscription</h2>
          <p className="text-gray-300">
            Certain CLUMOSS services may require payment. By subscribing, you agree to pay the fees as outlined on our website. We reserve the right to modify pricing at any time.
          </p>
        </section>

        {/* 6. Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Termination</h2>
          <p className="text-gray-300">
            We may terminate or suspend access to our services at any time if we find violations of these terms. You can also stop using our services at your discretion.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-300">
            CLUMOSS is not liable for any indirect or direct damages resulting from the use of our services. Our liability is limited to the maximum extent permitted by law.
          </p>
        </section>

        {/* 8. Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Privacy Policy</h2>
          <p className="text-gray-300">
            Your use of CLUMOSS is also governed by our <a href="/privacy-policy" className="text-blue-400 underline">Privacy Policy</a>. Please review it to understand how we collect and protect your data.
          </p>
        </section>

        {/* 9. Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
          <p className="text-gray-300">
            We reserve the right to update these Terms & Conditions at any time. Continued use of our services after changes means you accept the revised terms.
          </p>
        </section>

        {/* 10. Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:support@clumoss.com" className="text-blue-400 underline">support@clumoss.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
