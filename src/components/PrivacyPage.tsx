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

const PrivacyPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0f' }}>
      <Helmet>
        <title>Privacy Policy | Derivant AI</title>
        <meta name="description" content="Privacy Policy for Derivant AI. Learn how we collect, use, and protect your data." />
        <link rel="canonical" href="https://www.derivant.ai/privacy" />
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
            Privacy Policy
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
            This Privacy Policy describes how Derivant ("we", "us", or "our"), operated through the website derivant.ai and the Derivant PowerPoint Add-in, collects, uses, and protects your personal data. We are committed to protecting your privacy in compliance with the General Data Protection Regulation (GDPR) and applicable data protection laws.
          </p>

          <p style={bodyText}>
            By using our services, you agree to the collection and use of information as described in this policy.
          </p>

          {/* 1. Data Controller */}
          <h2 style={sectionTitle}>1. Data Controller</h2>
          <p style={bodyText}>
            The data controller responsible for your personal data is:
          </p>
          <p style={bodyText}>
            <strong style={{ color: '#fff' }}>Derivant</strong><br />
            Website: derivant.ai<br />
            Email: <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a>
          </p>

          {/* 2. Data We Collect */}
          <h2 style={sectionTitle}>2. Data We Collect</h2>
          <p style={bodyText}>
            We collect the following categories of personal data:
          </p>

          <h3 style={{ ...sectionTitle, fontSize: '17px', marginTop: '24px' }}>2.1 Account Information</h3>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Email address (required for registration)</li>
            <li style={{ marginBottom: '8px' }}>Display name (if provided)</li>
            <li style={{ marginBottom: '8px' }}>Authentication data managed through Supabase</li>
          </ul>

          <h3 style={{ ...sectionTitle, fontSize: '17px', marginTop: '24px' }}>2.2 Usage Data</h3>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Credit usage and subscription plan information</li>
            <li style={{ marginBottom: '8px' }}>Feature usage patterns (presentations generated, exports performed)</li>
            <li style={{ marginBottom: '8px' }}>Technical data (browser type, device type, IP address for security purposes)</li>
          </ul>

          <h3 style={{ ...sectionTitle, fontSize: '17px', marginTop: '24px' }}>2.3 Presentation Content</h3>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Text, prompts, and content you provide to generate presentations</li>
            <li style={{ marginBottom: '8px' }}>Generated presentation data (slides, text, layout configurations)</li>
            <li style={{ marginBottom: '8px' }}>Brand Kit information (logos, colors, fonts) if uploaded</li>
          </ul>

          <h3 style={{ ...sectionTitle, fontSize: '17px', marginTop: '24px' }}>2.4 PowerPoint Add-in Data</h3>
          <p style={bodyText}>
            When you use the Derivant PowerPoint Add-in, the add-in reads slide content (text, tables, notes) from your active presentation to provide AI-powered features such as translation, content editing, and slide generation. This content is sent to our servers for AI processing and is not stored beyond the duration of the request.
          </p>

          <h3 style={{ ...sectionTitle, fontSize: '17px', marginTop: '24px' }}>2.5 Payment Information</h3>
          <p style={bodyText}>
            Payment processing is handled entirely by Stripe. We do not store credit card numbers or payment details on our servers. We only receive confirmation of payment status and subscription information from Stripe.
          </p>

          {/* 3. How We Use Your Data */}
          <h2 style={sectionTitle}>3. How We Use Your Data</h2>
          <p style={bodyText}>
            We process your personal data for the following purposes:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>To provide and maintain our service, including AI-powered presentation generation</li>
            <li style={{ marginBottom: '8px' }}>To manage your account and subscription</li>
            <li style={{ marginBottom: '8px' }}>To process payments through Stripe</li>
            <li style={{ marginBottom: '8px' }}>To send service-related communications (account verification, usage alerts)</li>
            <li style={{ marginBottom: '8px' }}>To improve and optimize our service</li>
            <li style={{ marginBottom: '8px' }}>To ensure security and prevent abuse</li>
          </ul>

          {/* 4. Legal Basis */}
          <h2 style={sectionTitle}>4. Legal Basis for Processing</h2>
          <p style={bodyText}>
            Under the GDPR, we process your data based on the following legal grounds:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Contract performance:</strong> Processing necessary to provide you with the service you signed up for (Article 6(1)(b) GDPR)</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Legitimate interests:</strong> Service improvement, security, and fraud prevention (Article 6(1)(f) GDPR)</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Consent:</strong> Where you have given explicit consent for specific processing activities (Article 6(1)(a) GDPR)</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Legal obligation:</strong> Where required by applicable law (Article 6(1)(c) GDPR)</li>
          </ul>

          {/* 5. Cookies */}
          <h2 style={sectionTitle}>5. Cookies</h2>
          <p style={bodyText}>
            We use only essential cookies required for the functioning of our service. Specifically, we use authentication session cookies managed through Supabase to keep you logged in. We do not use advertising, analytics, or tracking cookies.
          </p>

          {/* 6. Third-Party Services */}
          <h2 style={sectionTitle}>6. Third-Party Services</h2>
          <p style={bodyText}>
            We share data with the following third-party service providers, each of which processes data in accordance with their own privacy policies:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Supabase</strong> — Authentication and database hosting. Stores account data and usage records.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Stripe</strong> — Payment processing. Handles subscription billing and payment methods securely.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>OpenAI / Anthropic</strong> — AI processing. Your presentation content and prompts are sent to AI models for generation. Content is processed in accordance with their data processing agreements and is not used to train models.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Vercel</strong> — Website and API hosting. Handles web requests and serverless function execution.</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Tavily</strong> — Web research. When web research is enabled, search queries are sent to retrieve relevant information for your presentations.</li>
          </ul>

          {/* 7. Data Retention */}
          <h2 style={sectionTitle}>7. Data Retention</h2>
          <p style={bodyText}>
            We retain your personal data for as long as your account is active and as needed to provide you with our services. Specifically:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}>Account data is kept while your account is active</li>
            <li style={{ marginBottom: '8px' }}>Presentation content is stored as long as you maintain your account</li>
            <li style={{ marginBottom: '8px' }}>Payment records are retained as required by applicable tax and accounting laws</li>
            <li style={{ marginBottom: '8px' }}>Upon account deletion request, your personal data will be deleted within 30 days, except where retention is required by law</li>
          </ul>

          {/* 8. Your Rights */}
          <h2 style={sectionTitle}>8. Your Rights</h2>
          <p style={bodyText}>
            Under the GDPR, you have the following rights regarding your personal data:
          </p>
          <ul style={listStyle}>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right of access:</strong> You can request a copy of the personal data we hold about you</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to rectification:</strong> You can request correction of inaccurate or incomplete data</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to erasure:</strong> You can request deletion of your personal data ("right to be forgotten")</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to data portability:</strong> You can request your data in a structured, commonly used, machine-readable format</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to restrict processing:</strong> You can request restriction of processing in certain circumstances</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to object:</strong> You can object to processing based on legitimate interests</li>
            <li style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
          </ul>
          <p style={bodyText}>
            To exercise any of these rights, please contact us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a>. We will respond to your request within 30 days.
          </p>

          {/* 9. Data Security */}
          <h2 style={sectionTitle}>9. Data Security</h2>
          <p style={bodyText}>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (HTTPS/TLS), secure authentication mechanisms, and access controls on our infrastructure.
          </p>

          {/* 10. International Transfers */}
          <h2 style={sectionTitle}>10. International Data Transfers</h2>
          <p style={bodyText}>
            Some of our third-party service providers may process data outside the European Economic Area (EEA). In such cases, we ensure adequate safeguards are in place, such as Standard Contractual Clauses (SCCs) or adequacy decisions by the European Commission, to protect your data.
          </p>

          {/* 11. Children */}
          <h2 style={sectionTitle}>11. Children's Privacy</h2>
          <p style={bodyText}>
            Our service is not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a> and we will promptly delete it.
          </p>

          {/* 12. Changes */}
          <h2 style={sectionTitle}>12. Changes to This Policy</h2>
          <p style={bodyText}>
            We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our service after changes constitutes acceptance of the updated policy.
          </p>

          {/* 13. Contact */}
          <h2 style={sectionTitle}>13. Contact Us</h2>
          <p style={bodyText}>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <p style={bodyText}>
            Email: <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a><br />
            Website: <a href="https://www.derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>derivant.ai</a>
          </p>
          <p style={bodyText}>
            You also have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.
          </p>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
