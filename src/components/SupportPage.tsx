import React from 'react';
import { Link } from 'react-router-dom';
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

const faqQuestion: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  color: '#ffffff',
  margin: 0,
  marginBottom: '8px',
};

const faqAnswer: React.CSSProperties = {
  ...bodyText,
  marginBottom: '32px',
};

const SupportPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0d0f' }}>
      <Helmet>
        <title>Support | Derivant AI</title>
        <meta name="description" content="Get help with Derivant AI. Contact our support team or browse frequently asked questions." />
        <link rel="canonical" href="https://www.derivant.ai/support" />
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
            Support
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
            marginBottom: '48px',
            lineHeight: 1.6,
          }}>
            We're here to help. Reach out to us or find answers to common questions below.
          </p>

          {/* Contact Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '48px',
          }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '22px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Contact Us
            </h2>
            <p style={bodyText}>
              For any questions, issues, or feedback, reach out to our team:
            </p>
            <p style={{ ...bodyText, marginBottom: '8px' }}>
              Email: <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none', fontWeight: 500 }}>info@derivant.ai</a>
            </p>
            <p style={{ ...bodyText, marginBottom: '0' }}>
              We typically respond within <strong style={{ color: '#fff' }}>48 hours</strong> on business days.
            </p>
          </div>

          {/* FAQ Section */}
          <h2 style={sectionTitle}>Frequently Asked Questions</h2>

          {/* FAQ 1 */}
          <div style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '24px',
            marginBottom: '24px',
            marginTop: '32px',
          }}>
            <h3 style={faqQuestion}>How do I reset my password?</h3>
            <p style={faqAnswer}>
              On the login page at <a href="https://app.derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>app.derivant.ai</a>, click "Forgot password?" and enter the email address associated with your account. You will receive a password reset link via email. If you don't receive it within a few minutes, check your spam folder or contact us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a>.
            </p>
          </div>

          {/* FAQ 2 */}
          <div style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={faqQuestion}>How do credits work?</h3>
            <p style={faqAnswer}>
              Credits are consumed when you use AI-powered features. Generating a presentation costs approximately 40 credits. Web research and image search cost 6 credits each. Your credit balance resets monthly on paid plans. Free accounts receive 100 credits one-time. You can check your remaining credits in your dashboard. For detailed plan information, visit our <Link to="/plans" style={{ color: '#B8A4C9', textDecoration: 'none' }}>Plans page</Link>.
            </p>
          </div>

          {/* FAQ 3 */}
          <div style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={faqQuestion}>Can I cancel my subscription?</h3>
            <p style={faqAnswer}>
              Yes, you can cancel your subscription at any time. Your access to paid features will continue until the end of your current billing period. After cancellation, your account will revert to the Free plan. To cancel, contact us at <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a>.
            </p>
          </div>

          {/* FAQ 4 */}
          <div style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={faqQuestion}>How do I delete my account?</h3>
            <p style={faqAnswer}>
              To delete your account and all associated data, send a request to <a href="mailto:info@derivant.ai" style={{ color: '#B8A4C9', textDecoration: 'none' }}>info@derivant.ai</a> from the email address associated with your account. We will process your deletion request within 30 days, as described in our <Link to="/privacy" style={{ color: '#B8A4C9', textDecoration: 'none' }}>Privacy Policy</Link>.
            </p>
          </div>

          {/* FAQ 5 */}
          <div style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={faqQuestion}>Is my data secure?</h3>
            <p style={faqAnswer}>
              Yes. We use encryption in transit (HTTPS/TLS), secure authentication through Supabase, and payment processing through Stripe (PCI-DSS compliant). Your presentation content is processed by AI providers (OpenAI/Anthropic) under their data processing agreements and is not used to train their models. For full details, see our <Link to="/privacy" style={{ color: '#B8A4C9', textDecoration: 'none' }}>Privacy Policy</Link>.
            </p>
          </div>

          {/* FAQ 6 */}
          <div style={{
            paddingBottom: '24px',
            marginBottom: '24px',
          }}>
            <h3 style={faqQuestion}>What is the PowerPoint Add-in?</h3>
            <p style={faqAnswer}>
              The Derivant PowerPoint Add-in brings AI-powered features directly into Microsoft PowerPoint. You can translate slides into multiple languages, edit content with AI assistance, and generate new slides without leaving PowerPoint. The add-in reads your slide content to process it through our AI engine. It is available through Microsoft AppSource.
            </p>
          </div>

          {/* Billing CTA */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '32px 40px',
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                margin: 0,
                marginBottom: '4px',
              }}>
                Have billing questions?
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
              }}>
                View our plans and pricing for detailed information.
              </p>
            </div>
            <Link to="/plans" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#0d0d0f',
              background: '#ffffff',
              padding: '10px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}>
              View Plans
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SupportPage;
