import React from 'react';
import { Link } from 'react-router-dom';
import QuoteSimulator from '../components/QuoteSimulator';
import { ChevronRight } from 'lucide-react';

export default function QuotePage() {
  return (
    <div className="quote-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Simulateur Devis</span>
          </div>
          <h1>Simulateur de Devis Électrique en Ligne</h1>
          <p>Estimez le budget indicatif de vos travaux (pose de poteaux, transformateurs, raccordement Eneo) et recevez votre proposition directement.</p>
        </div>
      </div>

      <QuoteSimulator />
    </div>
  );
}
