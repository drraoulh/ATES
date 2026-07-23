import React from 'react';
import { ShieldCheck, Award, Truck, Send } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="main-about-img">
              <img src="/assets/images/briefing_securite.jpg" alt="Briefing sécurité equipe ATES" />
            </div>
            <div className="sub-about-img">
              <img src="/assets/images/technicien_sommet.jpg" alt="Technicien ATES au sommet d'un poteau électrique" />
            </div>
            <div className="experience-badge">
              <span className="exp-number">100%</span>
              <span className="exp-text">Sécurité & Équipement EPI Conforme</span>
            </div>
          </div>

          <div className="about-content">
            <span className="sub-title"><ShieldCheck size={16} /> À PROPOS DE L'ENTREPRISE ATES</span>
            <h2>La Rigueur et l'Excellence Technique sur le Terrain</h2>
            <p>
              <strong>ATES</strong> est un acteur majeur du secteur électrique au Cameroun. Forte d'une équipe de techniciens hautement qualifiés et équipés d'outillages de pointe (camions grues, harnais d'arrêt de chute, testeurs de terre ES3000P), ATES réalise des interventions de haute complexité dans le respect le plus strict des règles de l'art.
            </p>

            <div className="values-grid">
              <div className="value-item">
                <div className="val-icon"><ShieldCheck size={24} /></div>
                <div>
                  <h4>Sécurité Zéro Incident</h4>
                  <p>Briefings quotidiens et port obligatoire des EPI certifiés sur tous nos chantiers.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="val-icon"><Award size={24} /></div>
                <div>
                  <h4>Matériaux Certifiés</h4>
                  <p>Câbles, armements et transformateurs conformes aux exigences Eneo & NF C.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="val-icon"><Truck size={24} /></div>
                <div>
                  <h4>Capacité Logistique</h4>
                  <p>Flotte de camions grues et matériel lourd pour l'implantation rapide de pylônes et poteaux.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary mt-4">
              <Send size={18} /> Prendre Contact avec la Direction
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
