import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import { ShieldCheck, Award, Truck, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>À Propos</span>
          </div>
          <h1>À Propos de la Société ATES</h1>
          <p>Découvrez notre savoir-faire, nos équipements de pointe et notre engagement pour la sécurité des réseaux électriques au Cameroun.</p>
        </div>
      </div>

      <About />

      {/* Additional Deep Content for About Page */}
      <section className="services-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title"><ShieldCheck size={16} /> ÉQUIPEMENTS & RIGUEUR TECHNIQUE</span>
            <h2>Outillage Certifié & Moyens Logistiques</h2>
            <p>ATES investit continuellement dans du matériel de précision pour garantir l'excellence sur tous ses chantiers.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/assets/images/mesure_terre_es3000p.jpg" alt="Appareil de mesure ES3000P" />
              </div>
              <div className="service-body">
                <h3>Testeur Numérique de Terre ES3000P</h3>
                <p>Contrôle certifié de la résistance des prises de terre pour prévenir les accidents, surtensions et foudroiements sur les lignes HT/BT.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/assets/images/camion_grue_installation.jpg" alt="Flotte Camion Grue ATES" />
              </div>
              <div className="service-body">
                <h3>Flotte de Camions Grues Dédiés</h3>
                <p>Capacité de levage lourd pour le transport, le dressage et l'implantation rapide de poteaux en béton armé et pylônes.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/assets/images/briefing_securite.jpg" alt="Équipement de sécurité individuel" />
              </div>
              <div className="service-body">
                <h3>Harnais d'Arrêt de Chute & EPI Normés</h3>
                <p>Protection maximale de nos équipes avec harnais certifiés, gants isolants haute tension et casques de chantier réglementaires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
