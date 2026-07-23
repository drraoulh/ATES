import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { ChevronRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Contact</span>
          </div>
          <h1>Contactez l'Entreprise ATES</h1>
          <p>Nos ingénieurs et équipes d'urgence 24/7 sont à votre écoute pour toute demande d'intervention ou de conseils techniques.</p>
        </div>
      </div>

      <Contact />
    </div>
  );
}
