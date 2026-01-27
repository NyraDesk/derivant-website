import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHero from './components/NewHero';
import Header from './components/Header';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import FeaturesPage from './components/FeaturesPage';
import BlogPage from './components/BlogPage';
import EarlyAccessPage from './components/EarlyAccessPage';
import BlogArticlePage from './components/BlogArticlePage';
import ResourcesPage from './components/ResourcesPage';
import ResourceArticlePage from './components/ResourceArticlePage';
import GuidaPitchDeckPage from './components/GuidaPitchDeckPage';
import AiFashionPresentationsPage from './components/AiFashionPresentationsPage';
import AiAgenzieComunicazionePage from './components/AiAgenzieComunicazionePage';

const HomePage = () => (
  <NewHero />
);

function App() {
  return (
    <Router>
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
          <Route path="/blog/privacy-app-note-local-first" element={
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
          <Route path="/blog/derivant-vs-gamma-powerpoint-2026" element={
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
          <Route path="/ai-fashion-presentations" element={
            <>
              <Header />
              <AiFashionPresentationsPage />
              <Footer />
            </>
          } />
          <Route path="/ai-agenzie-comunicazione" element={
            <>
              <Header />
              <AiAgenzieComunicazionePage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;