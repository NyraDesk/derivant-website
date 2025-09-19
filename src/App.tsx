import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RelevantAIHero from './components/RelevantAIHero';
import InstantActionsNewSection from './components/InstantActionsNewSection';
import InstantActionsSection from './components/InstantActionsSection';
import WorkflowFeatures from './components/WorkflowFeatures';
import DemoSection from './components/DemoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import BlogPage from './components/BlogPage';
import EarlyAccessPage from './components/EarlyAccessPage';
import BlogArticlePage from './components/BlogArticlePage';

const HomePage = () => (
  <>
    <RelevantAIHero />
    <InstantActionsNewSection />
    <InstantActionsSection />
    <WorkflowFeatures />
    <CTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
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
          <Route path="/early-access" element={<EarlyAccessPage />} />
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