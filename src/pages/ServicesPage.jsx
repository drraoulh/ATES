import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import { ChevronRight, FileSignature } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Services HT/MT</span>
          </div>
          <h1>Nos Services Électriques & Expertises</h1>
          <p>Solutions complètes en Haute Tension, Moyenne Tension, postes de transformateurs, sous-traitance Eneo et électricité industrielle.</p>
        </div>
      </div>

      <Services />

      <section className="quote-section text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '16px' }}>Besoin d'un Devis pour un Projet Électrique ?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>Utilisez notre simulateur en ligne pour calculer une estimation en moins de 2 minutes.</p>
          <Link to="/simulateur-devis" className="btn btn-lg btn-primary btn-glow">
            <FileSignature size={20} /> Lancer le Simulateur de Devis
          </Link>
        </div>
      </section>
    </div>
  );
}
