import React from 'react';
import { Helmet } from 'react-helmet-async';

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Syne', sans-serif",
  fontSize: '22px',
  fontWeight: 700,
  color: '#ffffff',
  margin: 0,
  marginTop: '48px',
  marginBottom: '16px',
  letterSpacing: '-0.02em',
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '15px',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.8,
  margin: 0,
  marginBottom: '16px',
};

const listStyle: React.CSSProperties = {
  ...bodyText,
  paddingLeft: '24px',
  marginBottom: '16px',
};

const TermsPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0f' }}>
      <Helmet>
        <title>Terms of Use | Derivant AI</title>
        <meta name="description" content="Terms of Use and End User License Agreement for Derivant AI presentation generator." />
        <link rel="canonical" href="https://www.derivant.ai/terms" />
      </Helmet>

      <section style={{ paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '42px',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: '12px',
          }}>
            Terms of Use
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.4)',
            margin: 0,
            marginBottom: '48px',
          }}>
            Last updated: February 26, 2026
          </p>

          <p style={bodyText}>
            These Terms of Use ("Terms") govern your access to and use of the Derivant platform, available at derivant.ai and through the Derivant PowerPoint Add-in (collectively, the "Service"). By creating an account or using the Service, you agree to be bound by these Terms.
          </p>

          <p style={bodyText}>
            Please read these Terms carefully before using the Service. If you do not agree to these Terms, you may not access or use the Service.
          </p>

          {/* 1. Service Description */}
          <h2 style={sectionTitle}>1. Service Description</h2>
          <p style={bodyText}>
            Derivant is an AI-powered presentation generator that transforms text, documents, and ideas into professional presentations. The Service includes:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>AI-powered slide generation from text prompts and pasted content</li>
            <li style={{ marginBottom: '8px' }}>Web research integration for data-enriched presentations</li>
            <li style={{ marginBottom: '8px' }}>Brand Kit customization (logo, colors, fonts)</li>
            <li style={{ marginBottom: '8px' }}>Export to PPTX and PDF formats</li>
            <li style={{ marginBottom: '8px' }}>A PowerPoint Add-in for AI-assisted editing, translation, and content generation within Microsoft PowerPoint</li>
            <li style={{ marginBottom: '8px' }}>Multiple design themes and layout options</li>
          </ul>

          {/* 2. Accounts */}
          <h2 style={sectionTitle}>2. Account Registration</h2>
          <p style={bodyText}>
            To use the Service, you must create an account by providing a valid email address. You are responsible for:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Maintaining the confidentiality of your account credentials</li>
            <li style={{ marginBottom: '8px' }}>All activities that occur under your account</li>
            <li style={{ marginBottom: '8px' }}>Providing accurate and up-to-date information</li>
            <li style={{ marginBottom: '8px' }}>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p style={bodyText}>
            You must be at least 16 years of age to create an account and use the Service.
          </p>

          {/* 3. Plans & Credits */}
          <h2 style={sectionTitle}>3. Plans and Credits</h2>
          <p style={bodyText}>
            The Service operates on a credit-based system. Credits are consumed when you use AI features such as generating presentations, performing web research, and searching for images. The available plans are:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Free:</strong> 100 credits included at no cost. No credit card required.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Starter:</strong> 400 credits per month for &euro;9/month. Includes Brand Kit access and additional features.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Pro:</strong> Coming soon. Enhanced features and higher credit limits.</li>
          </ul>
          <p style={bodyText}>
            Credits are allocated on a monthly basis for paid plans and do not roll over to the next billing period. Derivant reserves the right to modify plan pricing, credit allocations, and features with reasonable notice.
          </p>

          {/* 4. Payment Terms */}
          <h2 style={sectionTitle}>4. Payment and Billing</h2>
          <p style={bodyText}>
            Paid subscriptions are billed monthly through Stripe. By subscribing to a paid plan, you authorize us to charge your payment method on a recurring basis. You may cancel your subscription at any time, and your access will continue until the end of the current billing period.
          </p>
          <p style={bodyText}>
            Refunds are handled on a case-by-case basis. Please contact us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a> for refund requests.
          </p>

          {/* 5. Acceptable Use */}
          <h2 style={sectionTitle}>5. Acceptable Use</h2>
          <p style={bodyText}>
            You agree to use the Service in compliance with all applicable laws and regulations. You may not:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Use the Service to generate, distribute, or promote illegal, harmful, or offensive content</li>
            <li style={{ marginBottom: '8px' }}>Attempt to reverse-engineer, decompile, or extract source code from the Service</li>
            <li style={{ marginBottom: '8px' }}>Use automated scripts, bots, or other tools to abuse the Service or circumvent usage limits</li>
            <li style={{ marginBottom: '8px' }}>Impersonate another person or entity</li>
            <li style={{ marginBottom: '8px' }}>Interfere with or disrupt the Service or its infrastructure</li>
            <li style={{ marginBottom: '8px' }}>Share your account credentials with third parties</li>
            <li style={{ marginBottom: '8px' }}>Use the Service to generate content that infringes on third-party intellectual property rights</li>
            <li style={{ marginBottom: '8px' }}>Upload or process content depicting minors in any inappropriate context</li>
          </ul>

          {/* 6. Intellectual Property */}
          <h2 style={sectionTitle}>6. Intellectual Property</h2>
          <p style={bodyText}>
            <strong style={{ color: '#fff' }}>Your Content:</strong> You retain ownership of all content you provide to the Service (text, images, logos, Brand Kit assets) and all presentations generated using your content. You grant Derivant a limited license to process your content solely for the purpose of providing the Service.
          </p>
          <p style={bodyText}>
            <strong style={{ color: '#fff' }}>Our Platform:</strong> The Derivant platform, including its design, code, AI models integration, templates, layout engine, and branding, is the intellectual property of Derivant. You may not copy, modify, or distribute any part of the platform without prior written permission.
          </p>
          <p style={bodyText}>
            <strong style={{ color: '#fff' }}>AI-Generated Content:</strong> Presentations generated by the Service are created using AI technology. While you own the output generated from your inputs, you acknowledge that similar outputs may be generated for other users who provide similar inputs.
          </p>

          {/* 7. Limitation of Liability */}
          <h2 style={sectionTitle}>7. Limitation of Liability</h2>
          <p style={bodyText}>
            To the maximum extent permitted by applicable law:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>The Service is provided "as is" and "as available" without warranties of any kind, express or implied</li>
            <li style={{ marginBottom: '8px' }}>Derivant does not guarantee that AI-generated content will be accurate, complete, or suitable for any particular purpose</li>
            <li style={{ marginBottom: '8px' }}>Derivant shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service</li>
            <li style={{ marginBottom: '8px' }}>Our total liability for any claim related to the Service shall not exceed the amount you paid to Derivant in the 12 months preceding the claim</li>
          </ul>
          <p style={bodyText}>
            You are responsible for reviewing and verifying all AI-generated content before using it in professional, legal, or business contexts.
          </p>

          {/* 8. Termination */}
          <h2 style={sectionTitle}>8. Termination</h2>
          <p style={bodyText}>
            You may terminate your account at any time by contacting us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a>.
          </p>
          <p style={bodyText}>
            Derivant may suspend or terminate your account at any time if:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>You violate these Terms or our Acceptable Use policy</li>
            <li style={{ marginBottom: '8px' }}>Your use of the Service poses a security risk or may cause harm to other users</li>
            <li style={{ marginBottom: '8px' }}>Required by law or legal process</li>
          </ul>
          <p style={bodyText}>
            Upon termination, your right to use the Service ceases immediately. We may delete your account data in accordance with our Privacy Policy.
          </p>

          {/* 9. Changes to Terms */}
          <h2 style={sectionTitle}>9. Changes to These Terms</h2>
          <p style={bodyText}>
            We reserve the right to modify these Terms at any time. When we make material changes, we will notify you by updating the "Last updated" date and, where appropriate, by sending a notification to your registered email address. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.
          </p>

          {/* 10. Governing Law */}
          <h2 style={sectionTitle}>10. Governing Law and Jurisdiction</h2>
          <p style={bodyText}>
            These Terms are governed by and construed in accordance with the laws of Italy and the European Union. Any disputes arising from these Terms or the use of the Service shall be subject to the exclusive jurisdiction of the courts of Italy, without prejudice to mandatory consumer protection provisions that may apply in your country of residence.
          </p>

          {/* 11. Severability */}
          <h2 style={sectionTitle}>11. Severability</h2>
          <p style={bodyText}>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>

          {/* 12. Contact */}
          <h2 style={sectionTitle}>12. Contact</h2>
          <p style={bodyText}>
            If you have questions about these Terms, please contact us:
          </p>
          <p style={bodyText}>
            Email: <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a><br />
            Website: <a href="https://www.derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>derivant.ai</a>
          </p>

        </div>
      </section>
    </div>
  );
};

export default TermsPage;
