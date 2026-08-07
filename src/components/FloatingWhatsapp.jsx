import React from 'react';

export default function FloatingWhatsapp() {
  return (
    <a 
      href="https://wa.me/237677764773?text=Bonjour%20ATES,%20je%20vous%20contacte%20depuis%20votre%20site%20web" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp-btn" 
      aria-label="Contact WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Besoin d'un devis rapide ? Parlez-nous sur WhatsApp</span>
    </a>
  );
}
