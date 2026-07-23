import React from 'react';
import { Link } from 'react-router-dom';
import EneoPartner from '../components/EneoPartner';
import { ChevronRight, ShieldCheck, CheckCircle2, FileCheck } from 'lucide-react';

export default function EneoPage() {
  return (
    <div className="eneo-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Sous-traitance Eneo</span>
          </div>
          <h1>Partenaire Agréé Eneo Cameroun</h1>
          <p>Découvrez nos accréditations, nos normes d'intervention et nos services délégués pour le réseau électrique national.</p>
        </div>
      </div>

      <EneoPartner />

      {/* Standards & Compliance Details */}
      <section className="about-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="sub-title"><ShieldCheck size={16} /> NORME & HABILITATION</span>
            <h2>Procédures d'Intervention Conformes aux Exigences Eneo</h2>
            <p>De l'étude de faisabilité à la réception des travaux par les ingénieurs d'Eneo, ATES garantit un processus rigoureux.</p>
          </div>

          <div className="services-grid">
            <div className="service-card" style={{ padding: '32px 24px' }}>
              <div className="val-icon" style={{ marginBottom: '16px' }}><FileCheck size={28} /></div>
              <h3>1. Étude Technique & Dossier d'Agrément</h3>
              <p>Établissement du schéma unifilaire, calcul des charges et constitution du dossier d'extension conforme aux schémas directeurs d'Eneo.</p>
            </div>

            <div className="service-card" style={{ padding: '32px 24px' }}>
              <div className="val-icon" style={{ marginBottom: '16px' }}><CheckCircle2 size={28} /></div>
              <h3>2. Implantation & Pose de Lignes</h3>
              <p>Plantation de poteaux bois ou béton armé aux distances réglementaires, pose d'armements HCTA et déroulage de câbles torsadés normés.</p>
            </div>

            <div className="service-card" style={{ padding: '32px 24px' }}>
              <div className="val-icon" style={{ marginBottom: '16px' }}><ShieldCheck size={28} /></div>
              <h3>3. Essais, Mesures & Mise sous Tension</h3>
              <p>Mesures de la prise de terre (ES3000P), essais d'isolement et procès-verbal de réception pour la mise sous tension officielle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
