import React, { useState } from 'react';
import { Headset, MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Haute Tension',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name} ! Votre message concernant "${formData.subject}" a bien été pris en compte par l'équipe ATES.`);
    setFormData({ name: '', email: '', phone: '', subject: 'Haute Tension', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-panel glass-panel">
            <span className="sub-title"><Headset size={16} /> RESTONS EN CONTACT</span>
            <h2>Contactez l'Équipe ATES</h2>
            <p>Une question ? Un chantier à planifier ? Nos ingénieurs et techniciens sont à votre disposition.</p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon"><MapPin size={24} /></div>
                <div>
                  <h4>Siège & Base Technique :</h4>
                  <p>Douala 5e, Cameroun (Zone d'intervention : Littoral, Centre, Ouest et tout le Cameroun)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon"><Phone size={24} /></div>
                <div>
                  <h4>Téléphone / Urgence 24h/7d :</h4>
                  <p><a href="tel:+237677764773">+237 677 76 47 73</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon"><i className="fa-brands fa-whatsapp text-green text-xl"></i></div>
                <div>
                  <h4>WhatsApp Direct :</h4>
                  <p><a href="https://wa.me/237677764773" target="_blank" rel="noopener noreferrer">+237 677 76 47 73 (Réponse rapide)</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Officiel :</h4>
                  <p><a href="mailto:contact@ates-cameroun.com">contact@ates-cameroun.com</a></p>
                </div>
              </div>
            </div>

            <div className="social-links mt-4">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://wa.me/237677764773" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="contact-form-panel glass-panel">
            <h3>Envoyez-nous un Message Direct</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom Complet :</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => setFormData({ ...formData, name: e.target.value })} 
                  placeholder="Ex: Jean Dupont" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Email :</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })} 
                  placeholder="nom@exemple.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Téléphone :</label>
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                  placeholder="+237 6XX XX XX XX" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Sujet de votre demande :</label>
                <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                  <option value="Haute Tension">Ligne Haute Tension / Poteaux</option>
                  <option value="Transformateur">Installation de Transformateur</option>
                  <option value="BTP & Génie Civil">BTP & Génie Civil (Fondations, VRD, Cabines)</option>
                  <option value="Sous-traitance Eneo">Sous-traitance Eneo / Raccordement</option>
                  <option value="Achat Materiel">Achat de Câbles / Matériel</option>
                  <option value="Maintenance">Maintenance & Mesure de Terre</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label>Détails de votre message :</label>
                <textarea 
                  rows={4} 
                  value={formData.message} 
                  onChange={e => setFormData({ ...formData, message: e.target.value })} 
                  placeholder="Décrivez votre besoin ou projet..." 
                  required 
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <Send size={18} /> Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
