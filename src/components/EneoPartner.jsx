import React from 'react';
import { CheckCircle2, Truck } from 'lucide-react';

export default function EneoPartner() {
  return (
    <section className="partner-section" id="eneo">
      <div className="container">
        <div className="partner-card glass-panel">
          <div className="partner-badge">CONFORMITÉ & SÉCURITÉ RÉSEAU</div>
          <div className="partner-grid">
            <div className="partner-text">
              <h2>Partenaire Sous-traitant Agréé <span className="text-green">Eneo Cameroun</span></h2>
              <p className="lead-text">
                ATES collabore aux côtés du concessionnaire Eneo pour le déploiement, le raccordement et la modernisation du réseau électrique national.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle2 className="text-green flex-shrink-0" size={20} />
                  <div><strong>Extensions de Réseau HTA / BT :</strong> Implantations conformes aux schémas directeurs Eneo.</div>
                </li>
                <li>
                  <CheckCircle2 className="text-green flex-shrink-0" size={20} />
                  <div><strong>Pose & Raccordement de Transformateurs :</strong> Mise aux normes, cellules de protection HTA.</div>
                </li>
                <li>
                  <CheckCircle2 className="text-green flex-shrink-0" size={20} />
                  <div><strong>Branchements Spécifiques & Comptage :</strong> Réalisation complète pour industriels et résidences.</div>
                </li>
                <li>
                  <CheckCircle2 className="text-green flex-shrink-0" size={20} />
                  <div><strong>Dépannage d'Urgence & Élagage Réseau :</strong> Rétablissement rapide de la continuité de service.</div>
                </li>
              </ul>
            </div>
            <div className="partner-image-wrapper">
              <img src="/assets/images/camion_grue_installation.jpg" alt="Equipe ATES Camion Grue sur chantier Eneo" className="img-responsive rounded-shadow" />
              <div className="floating-tag">
                <Truck size={18} /> Logistique Lourd & Grues Dédiées
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
