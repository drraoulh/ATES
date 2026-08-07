import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PlayCircle, RadioTower, Zap, Clock, HardHat, PhoneCall } from 'lucide-react';

export default function Hero() {
  const [stats, setStats] = useState({ poles: 0, transfos: 0, eneoPercent: 0, hours: 0 });

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setStats({
        poles: Math.min(3500, Math.floor((3500 / 30) * frame)),
        transfos: Math.min(280, Math.floor((280 / 30) * frame)),
        eneoPercent: Math.min(100, Math.floor((100 / 30) * frame)),
        hours: Math.min(24, Math.floor((24 / 30) * frame))
      });
      if (frame >= 30) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline poster="/assets/images/chantier_douala.jpg">
          <source src="/assets/videos/chantier_action.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <ShieldCheck size={18} /> Entreprise de Référence - Électricité & BTP - Sous-traitance Eneo
        </div>
        
        <h1 className="hero-title">
          L'Expertise Électrique, <span className="text-gradient">Haute Tension & BTP</span> au Cameroun
        </h1>

        <p className="hero-subtitle">
          Bâtiment & Travaux Publics, pose de lignes HTA/BT avec postes de transformateurs, génie civil, maintenance préventive et fourniture de matériels électriques.
        </p>

        <div className="hero-cta-group">
          <Link to="/contact" className="btn btn-lg btn-primary">
            <PhoneCall size={20} /> Nous Contacter Directement
          </Link>
          <a href="https://wa.me/237677764773?text=Bonjour%20ATES,%20je%20souhaite%20des%20informations%20sur%20vos%20services" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-whatsapp">
            <i className="fa-brands fa-whatsapp text-xl"></i> Échanger sur WhatsApp
          </a>
          <Link to="/realisations" className="btn btn-lg btn-outline">
            <PlayCircle size={20} /> Découvrir nos Chantiers
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><RadioTower size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">{stats.poles.toLocaleString('fr-FR')}</span>
              <span className="plus">+</span>
              <span className="stat-label">Poteaux Installés (Bois/Béton)</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><Zap size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">{stats.transfos}</span>
              <span className="plus">+</span>
              <span className="stat-label">Postes Transfo Mis en Service</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><HardHat size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">BTP</span>
              <span className="plus">&</span>
              <span className="stat-label">Génie Civil Infras & Réseaux</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon"><Clock size={24} /></div>
            <div className="stat-info">
              <span className="stat-number">{stats.hours}</span>
              <span>h/7</span>
              <span className="stat-label">Intervention Urgence Réseau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
