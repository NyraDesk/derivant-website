import { Routes, Route, Navigate } from 'react-router-dom';
import NewHero from './components/NewHero';
import Header from './components/Header';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import BlogPage from './components/BlogPage';
import { useEffect } from 'react';
import BlogArticlePage from './components/BlogArticlePage';
import ResourcesPage from './components/ResourcesPage';
import ResourceArticlePage from './components/ResourceArticlePage';
import GuidaPitchDeckPage from './components/GuidaPitchDeckPage';
import AiAgenzieComunicazionePage from './components/AiAgenzieComunicazionePage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import SupportPage from './components/SupportPage';
import InsightsPage from './components/InsightsPage';
import InsightArticlePage from './components/InsightArticlePage';

const HomePage = () => (
  <NewHero />
);

const RedirectToApp = () => {
  useEffect(() => {
    window.location.href = 'https://app.derivant.ai';
  }, []);
  return null;
};

function App() {
  return (
    <div className="glass-shell">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/plans" element={
          <>
            <Header />
            <PlansPage />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Header />
            <BlogPage />
            <Footer />
          </>
        } />
        <Route path="/blog/:slug" element={
          <>
            <Header />
            <BlogArticlePage />
            <Footer />
          </>
        } />
        <Route path="/early-access" element={<RedirectToApp />} />
        <Route path="/resources" element={
          <>
            <Header />
            <ResourcesPage />
            <Footer />
          </>
        } />
        <Route path="/resources/:slug" element={
          <>
            <Header />
            <ResourceArticlePage />
            <Footer />
          </>
        } />
        <Route path="/guida-pitch-deck-2026" element={
          <>
            <Header />
            <GuidaPitchDeckPage />
            <Footer />
          </>
        } />
        <Route path="/ai-fashion-presentations" element={<Navigate to="/resources" replace />} />
        <Route path="/ai-agenzie-comunicazione" element={
          <>
            <Header />
            <AiAgenzieComunicazionePage />
            <Footer />
          </>
        } />
        <Route path="/insights" element={
          <>
            <Header />
            <InsightsPage />
            <Footer />
          </>
        } />
        <Route path="/insights/:slug" element={
          <>
            <Header />
            <InsightArticlePage />
            <Footer />
          </>
        } />
        <Route path="/privacy" element={
          <>
            <Header />
            <PrivacyPage />
            <Footer />
          </>
        } />
        <Route path="/terms" element={
          <>
            <Header />
            <TermsPage />
            <Footer />
          </>
        } />
        <Route path="/support" element={
          <>
            <Header />
            <SupportPage />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;