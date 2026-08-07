import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import { ChevronRight, PhoneCall } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Services HT/MT & BTP</span>
          </div>
          <h1>Nos Services Électriques, BTP & Génie Civil</h1>
          <p>Solutions complètes en Haute Tension, Moyenne Tension, postes de transformateurs, sous-traitance Eneo, BTP et électricité industrielle.</p>
        </div>
      </div>

      <Services />

      <section className="quote-section text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '16px' }}>Besoin d'un Conseil ou d'un Devis Personnalisé ?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>Nos ingénieurs en électricité et génie civil sont à votre disposition pour étudier votre projet.</p>
          <div className="hero-cta-group" style={{ marginBottom: 0 }}>
            <Link to="/contact" className="btn btn-lg btn-primary btn-glow">
              <PhoneCall size={20} /> Nous Contacter
            </Link>
            <a href="https://wa.me/237677764773?text=Bonjour%20ATES,%20je%20souhaite%20un%20devis%20pour%20un%20projet" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-whatsapp">
              <i className="fa-brands fa-whatsapp text-xl"></i> Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
