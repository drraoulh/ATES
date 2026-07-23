import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EneoPage from './pages/EneoPage';
import GalleryPage from './pages/GalleryPage';
import CatalogPage from './pages/CatalogPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="ates-app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/partenaire-eneo" element={<EneoPage />} />
            <Route path="/realisations" element={<GalleryPage />} />
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/simulateur-devis" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback redirect */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </Router>
  );
}
