import React, { useState, useMemo } from 'react';
import { Calculator, RadioTower, Box, Building, ShoppingCart, Hash, Ruler, Trees, Zap, MapPin } from 'lucide-react';

export default function QuoteSimulator() {
  const [projectType, setProjectType] = useState('ligne_ht');
  const [nbPoteaux, setNbPoteaux] = useState(5);
  const [distanceLigne, setDistanceLigne] = useState(250);
  const [typePoteau, setTypePoteau] = useState('beton');
  const [puissanceTransfo, setPuissanceTransfo] = useState(100);
  const [ville, setVille] = useState('Douala');
  const [clientNom, setClientNom] = useState('');
  const [clientTel, setClientTel] = useState('');

  const estimatedPrice = useMemo(() => {
    let total = 0;
    if (projectType === 'ligne_ht') {
      const unitPoteauCost = typePoteau === 'beton' ? 180000 : 110000;
      total = (nbPoteaux * unitPoteauCost) + (distanceLigne * 4500) + 250000;
    } else if (projectType === 'transfo') {
      const transfoCost = puissanceTransfo * 35000 + 1500000;
      const unitPoteauCost = typePoteau === 'beton' ? 180000 : 110000;
      total = transfoCost + (nbPoteaux * unitPoteauCost) + (distanceLigne * 4500) + 800000;
    } else if (projectType === 'batiment') {
      total = 850000;
    } else {
      total = 450000;
    }
    return total.toLocaleString('fr-FR') + ' FCFA';
  }, [projectType, nbPoteaux, distanceLigne, typePoteau, puissanceTransfo]);

  const sendQuoteWhatsApp = () => {
    const typeMap = {
      'ligne_ht': 'Construction de Ligne Électrique HT/MT',
      'transfo': 'Poste & Transformateur Électrique',
      'batiment': 'Électricité de Bâtiment / Usine',
      'materiel': 'Achat de Câbles / Matériel Électrique'
    };

    let msg = `*DEMANDE DE DEVIS EN LIGNE - ATES*\n\n`;
    msg += `👤 *Client :* ${clientNom || 'Client'}\n`;
    msg += `📞 *Téléphone :* ${clientTel || 'Non renseigné'}\n`;
    msg += `📍 *Ville du chantier :* ${ville}\n`;
    msg += `⚡ *Type de Projet :* ${typeMap[projectType]}\n`;

    if (projectType === 'ligne_ht' || projectType === 'transfo') {
      msg += `🪵 *Poteaux :* ${nbPoteaux} (${typePoteau === 'beton' ? 'Béton Armé' : 'Bois Traité'})\n`;
      msg += `📏 *Distance Ligne :* ${distanceLigne} mètres\n`;
    }
    if (projectType === 'transfo') {
      msg += `🔌 *Puissance Transfo :* ${puissanceTransfo} kVA\n`;
    }

    msg += `💰 *Estimation Indicative :* ${estimatedPrice}\n\n`;
    msg += `Merci de me contacter pour valider la visite technique et le devis final.`;

    window.open(`https://wa.me/237600000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="quote-section" id="quote">
      <div className="container">
        <div className="quote-wrapper glass-panel">
          <div className="section-header text-center">
            <span className="sub-title"><Calculator size={16} /> SIMULATEUR EN LIGNE</span>
            <h2>Estimez le Coût de Votre Projet Électrique</h2>
            <p>Obtenez une première estimation instantanée et envoyez votre cahier des charges directement sur WhatsApp.</p>
          </div>

          <div className="quote-form">
            <div className="form-step active">
              <h3>1. Quel est votre type de projet ?</h3>
              <div className="options-grid">
                <label className="option-card">
                  <input type="radio" name="project_type" value="ligne_ht" checked={projectType === 'ligne_ht'} onChange={() => setProjectType('ligne_ht')} />
                  <div className="card-content">
                    <RadioTower size={32} />
                    <h4>Ligne Électrique HT/MT</h4>
                    <p>Pose de poteaux, déroulage de câbles et raccordement</p>
                  </div>
                </label>

                <label className="option-card">
                  <input type="radio" name="project_type" value="transfo" checked={projectType === 'transfo'} onChange={() => setProjectType('transfo')} />
                  <div className="card-content">
                    <Box size={32} />
                    <h4>Poste de Transformateur</h4>
                    <p>Installation H61 ou cabine avec accessoires</p>
                  </div>
                </label>

                <label className="option-card">
                  <input type="radio" name="project_type" value="batiment" checked={projectType === 'batiment'} onChange={() => setProjectType('batiment')} />
                  <div className="card-content">
                    <Building size={32} />
                    <h4>Électricité Bâtiment / Usine</h4>
                    <p>Câblage complet, armoires et mise aux normes</p>
                  </div>
                </label>

                <label className="option-card">
                  <input type="radio" name="project_type" value="materiel" checked={projectType === 'materiel'} onChange={() => setProjectType('materiel')} />
                  <div className="card-content">
                    <ShoppingCart size={32} />
                    <h4>Achat de Matériel Électrique</h4>
                    <p>Commande de câbles, isolateurs ou quincaillerie</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-step">
              <h3>2. Détails & Dimensions de l'intervention</h3>
              <div className="form-grid">
                {(projectType === 'ligne_ht' || projectType === 'transfo') && (
                  <>
                    <div className="form-group">
                      <label><Hash size={16} /> Nombre de poteaux estimés :</label>
                      <input type="number" value={nbPoteaux} min="1" max="500" onChange={e => setNbPoteaux(parseInt(e.target.value, 10) || 1)} />
                    </div>

                    <div className="form-group">
                      <label><Ruler size={16} /> Longueur estimée de la ligne (mètres) :</label>
                      <input type="number" value={distanceLigne} min="50" step="50" onChange={e => setDistanceLigne(parseInt(e.target.value, 10) || 50)} />
                    </div>

                    <div className="form-group">
                      <label><Trees size={16} /> Matériau des poteaux :</label>
                      <select value={typePoteau} onChange={e => setTypePoteau(e.target.value)}>
                        <option value="bois">Poteaux Bois Traité</option>
                        <option value="beton">Poteaux Béton Armé (Recommandé Eneo)</option>
                        <option value="mixte">Mixte Bois / Béton</option>
                      </select>
                    </div>
                  </>
                )}

                {projectType === 'transfo' && (
                  <div className="form-group">
                    <label><Zap size={16} /> Puissance du Transformateur :</label>
                    <select value={puissanceTransfo} onChange={e => setPuissanceTransfo(parseInt(e.target.value, 10))}>
                      <option value="50">50 kVA</option>
                      <option value="100">100 kVA</option>
                      <option value="160">160 kVA</option>
                      <option value="250">250 kVA</option>
                      <option value="400">400 kVA</option>
                      <option value="630">630 kVA</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label><MapPin size={16} /> Ville / Localisation du chantier :</label>
                  <input type="text" value={ville} onChange={e => setVille(e.target.value)} placeholder="Ex: Douala, Yaoundé..." />
                </div>
              </div>
            </div>

            {/* Price Output */}
            <div className="estimation-result-box">
              <div className="result-header">
                <span><Calculator size={16} /> Récapitulatif de l'Estimation</span>
                <span className="badge-indicative">Valeur indicative</span>
              </div>
              <div className="result-price">{estimatedPrice}</div>
              <p className="result-note">Comprend la fourniture indicative et la main d'œuvre aux normes Eneo.</p>
            </div>

            <div className="contact-inputs-grid">
              <div className="form-group">
                <label>Votre Nom / Entreprise :</label>
                <input type="text" value={clientNom} onChange={e => setClientNom(e.target.value)} placeholder="Nom complet ou Société" required />
              </div>
              <div className="form-group">
                <label>Numéro de Téléphone (WhatsApp) :</label>
                <input type="tel" value={clientTel} onChange={e => setClientTel(e.target.value)} placeholder="+237 6XX XX XX XX" required />
              </div>
            </div>

            <div className="quote-actions text-center mt-4">
              <button type="button" className="btn btn-lg btn-whatsapp" onClick={sendQuoteWhatsApp}>
                <i className="fa-brands fa-whatsapp text-xl"></i> Envoyer la demande sur WhatsApp
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
