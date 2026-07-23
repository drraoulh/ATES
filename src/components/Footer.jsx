import React from 'react';
import { Handshake, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <img src="/assets/images/logo_ates.png" alt="ATES Logo" className="footer-logo" />
            <p><strong>ATES</strong> - Société spécialisée dans les travaux d'électricité Haute Tension, pose de transformateurs, sous-traitance Eneo, vente de matériels et réseaux électriques au Cameroun.</p>
            <div className="badge-partner">
              <Handshake size={16} /> Partenaire Agréé Eneo
            </div>
          </div>

          <div className="footer-col">
            <h4>Services Principaux</h4>
            <ul>
              <li><a href="#services">Lignes Haute Tension (HTA/BT)</a></li>
              <li><a href="#services">Postes de Transformateurs</a></li>
              <li><a href="#services">Sous-traitance Eneo & Branchements</a></li>
              <li><a href="#services">Maintenance & Mesures ES3000P</a></li>
              <li><a href="#services">Électricité Industrielle & Bâtiment</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Vente de Matériel</h4>
            <ul>
              <li><a href="#catalog">Câbles Torsadés Aluminium</a></li>
              <li><a href="#catalog">Câbles Armés Souterrains</a></li>
              <li><a href="#catalog">Transformateurs H61 & Cabines</a></li>
              <li><a href="#catalog">Isolateurs en Verre & Composite</a></li>
              <li><a href="#catalog">Armements Metalliques HCTA</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Localisation & Contact</h4>
            <p><MapPin size={16} className="text-green inline-block" /> Douala 5e, Cameroun</p>
            <p><Phone size={16} className="text-green inline-block" /> Urgence : +237 600 000 000</p>
            <p><Mail size={16} className="text-green inline-block" /> contact@ates-cameroun.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 <strong>ATES</strong> - Tous droits réservés. Réalisé pour ATES Cameroun.</p>
          <div className="footer-bottom-links">
            <a href="#hero">Retour en haut <ArrowUp size={16} className="inline-block" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
