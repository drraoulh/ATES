import React from 'react';
import { ShieldCheck, Award, Truck, Send, HardHat } from 'lucide-react';

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
            <h2>Électricité Haute Tension, BTP & Génie Civil au Cameroun</h2>
            <p>
              <strong>ATES</strong> est une entreprise de référence spécialisée dans l'électricité haute/moyenne tension, la sous-traitance Eneo et les travaux de <strong>BTP / Génie Civil</strong> au Cameroun.
            </p>
            <p className="mt-2 text-muted">
              Forte d'une équipe pluridisciplinaire d'ingénieurs et techniciens du BTP et du génie électrique (camions grues, engins de terrassement, appareils de mesure de terre ES3000P), ATES prend en charge vos chantiers de la conception au gros œuvre jusqu'à la mise en service.
            </p>

            <div className="values-grid">
              <div className="value-item">
                <div className="val-icon"><ShieldCheck size={24} /></div>
                <div>
                  <h4>Sécurité Zéro Incident</h4>
                  <p>Briefings quotidiens et port obligatoire des EPI certifiés sur tous nos chantiers d'électricité et de BTP.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="val-icon"><HardHat size={24} /></div>
                <div>
                  <h4>Génie Civil & BTP</h4>
                  <p>Construction de cabines, massifs de fondation en béton armé, VRD et terrassement de précision.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="val-icon"><Truck size={24} /></div>
                <div>
                  <h4>Capacité Logistique & Engins</h4>
                  <p>Flotte de camions grues et matériel lourd pour le levage de poteaux, pylônes et ouvrages de bâtiment.</p>
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
