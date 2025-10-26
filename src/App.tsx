import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotezHero from './components/NotezHero';
import NotezCardsSection from './components/NotezCardsSection';
import NotezThirdSection from './components/NotezThirdSection';
import NotezFourthSection from './components/NotezFourthSection';
import NotezSixthSection from './components/NotezSixthSection';
import NotezPlansSection from './components/NotezPlansSection';
import NotezPrivacySection from './components/NotezPrivacySection';
import RelevantAIHero from './components/RelevantAIHero';
import InstantActionsNewSection from './components/InstantActionsNewSection';
import InstantActionsSection from './components/InstantActionsSection';
import WorkflowFeatures from './components/WorkflowFeatures';
import DemoSection from './components/DemoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import FeaturesPage from './components/FeaturesPage';
import BlogPage from './components/BlogPage';
import EarlyAccessPage from './components/EarlyAccessPage';
import BlogArticlePage from './components/BlogArticlePage';

const HomePage = () => (
  <>
    <NotezHero />
    <NotezCardsSection />
    <NotezThirdSection />
    <NotezFourthSection />
    <NotezSixthSection />
    <NotezPlansSection />
    <NotezPrivacySection />
    <Footer />
    {/* Temporaneamente nascoste - da sostituire con 4 cards Apple-style */}
    {/* <InstantActionsNewSection />
    <InstantActionsSection />
    <WorkflowFeatures />
    <CTA /> */}
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              {/* <Footer /> */}
            </>
          } />
          <Route path="/plans" element={
            <>
              <Header />
              <PlansPage />
              <Footer />
            </>
          } />
          <Route path="/features" element={
            <>
              <Header />
              <FeaturesPage />
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
          <Route path="/blog/building-long-lasting-customer-saas" element={
            <>
              <Header />
              <BlogArticlePage />
              <Footer />
            </>
          } />
          <Route path="/blog/future-of-workflows" element={
            <>
              <Header />
              <BlogArticlePage />
              <Footer />
            </>
          } />
          <Route path="/blog/ai-assistants-operations" element={
            <>
              <Header />
              <BlogArticlePage />
              <Footer />
            </>
          } />
          <Route path="/early-access" element={
            <>
              <Header />
              <EarlyAccessPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;