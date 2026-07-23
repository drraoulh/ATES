import React from 'react';
import { ThumbsUp, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "ATES a géré l'extension de ligne HTA et la pose de notre transformateur 250 kVA pour notre usine à Douala. Travail propre, rapide et validation sans problème avec Eneo.",
      name: "M. TCHAMBA Paul",
      role: "Directeur Technique - Complexe Industriel Douala"
    },
    {
      id: 2,
      quote: "Équipe très professionnelle. Ils sont équipés d'appareils de mesure numériques pour la prise de terre (ES3000P), ce qui nous a donné une totale sérénité pour la conformité.",
      name: "Ing. MBARGA Serge",
      role: "Consultant BTP & Électricité"
    },
    {
      id: 3,
      quote: "Approvisionnement régulier en câbles torsadés et quincaillerie HCTA. ATES est un partenaire réactif et fiable à Douala.",
      name: "Mme EKOTTO Carine",
      role: "Responsable Achats Matériel"
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title"><ThumbsUp size={16} /> CONFIANCE & AVIS</span>
          <h2>Ils font confiance à ATES</h2>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map(rev => (
            <div className="testimonial-card" key={rev.id}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffb703" color="#ffb703" />
                ))}
              </div>
              <p>"{rev.quote}"</p>
              <div className="client-info">
                <strong>{rev.name}</strong>
                <span>{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
