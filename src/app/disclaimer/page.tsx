import React from "react";

const Disclaimer = () => {
  return (
    <div className="legal-container">
      <h1>Disclaimer</h1>
      <p>Last Updated: February 25, 2025</p>

      <div className="legal-section">
        <h2>1. General Information</h2>
        <p>
        The information provided by CLUMOSS (<span>&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;</span>)

          All information on the site is provided in good faith; however, we make no representation or warranty of any kind.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. No Professional Advice</h2>
        <p>
          The content on our platform does not constitute legal, financial, or professional advice.
          You should consult a qualified expert before making any decisions based on our information.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. External Links Disclaimer</h2>
        <p>
          Our website may contain links to external websites. We do not guarantee the accuracy, relevance, or completeness of any third-party information.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions regarding this disclaimer, please contact us at{" "}
          <a href="mailto:support@clumoss.com">support@clumoss.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
