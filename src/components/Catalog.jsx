import React, { useState } from 'react';
import { Boxes, Search, Shield, Truck, Award, Cable, Zap, Box, CircleDot, Layers, ToggleRight } from 'lucide-react';

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      cat: "cables",
      badge: "Top Vente Eneo",
      icon: <Cable size={28} />,
      title: "Câble Torsadé Aluminium HTA/BT",
      desc: "Sections disponibles : 3x70+54.6mm², 3x35+54.6mm², 4x25mm², 4x16mm² pour réseaux aériens.",
      spec1: "Norme NFC 33-209",
      spec2: "En stock Douala",
      whatsappMsg: "Bonjour ATES, je souhaite un tarif pour le Câble Torsadé Aluminium"
    },
    {
      id: 2,
      cat: "cables",
      badge: "Haute Tension",
      icon: <Zap size={28} />,
      title: "Câble Souterrain Armé U1000 R2V / AR2V",
      desc: "Câbles de puissance basse et moyenne tension blindés pour liaisons souterraines.",
      spec1: "Résistance Mécanique",
      spec2: "Sur Commande / Stock",
      whatsappMsg: "Bonjour ATES, je souhaite un tarif pour les Câbles Souterrains Armés"
    },
    {
      id: 3,
      cat: "transfos",
      badge: "Certifié Eneo",
      icon: <Box size={28} />,
      title: "Transformateur H61 (50 kVA à 630 kVA)",
      desc: "Transformateurs haut de poteau ou de cabine immergés dans l'huile avec accessoires complets.",
      spec1: "Garantie 24 Mois",
      spec2: "Essai en Laboratoire",
      whatsappMsg: "Bonjour ATES, je souhaite un devis pour un Transformateur H61"
    },
    {
      id: 4,
      cat: "isolateurs",
      badge: "Quincaillerie HTA",
      icon: <CircleDot size={28} />,
      title: "Isolateurs en Verre & Composite HTA",
      desc: "Chaînes d'isolateurs d'ancrage et d'alignement pour poteaux béton et bois.",
      spec1: "Haute Rigidité Dielectrique",
      spec2: "En Stock",
      whatsappMsg: "Bonjour ATES, demande de prix Isolateurs"
    },
    {
      id: 5,
      cat: "isolateurs",
      badge: "Accessoires Poteaux",
      icon: <Layers size={28} />,
      title: "Armements Metalliques HCTA & Consoles",
      desc: "Crosses d'éclairage public, nappe voûte, armements alternés et brides de fixation galvanisées.",
      spec1: "Acier Galvanisé à Chaud",
      spec2: "Stock Permanent",
      whatsappMsg: "Bonjour ATES, demande de prix Armements"
    },
    {
      id: 6,
      cat: "protections",
      badge: "Sécurité BT",
      icon: <ToggleRight size={28} />,
      title: "Disjoncteurs Industriels & Coffrets de Comptage",
      desc: "Coffrets triphasés pour compteurs Eneo, disjoncteurs de branchement et parafoudres HTA.",
      spec1: "Marque Schneider / Legrand / ABB",
      spec2: "Disponibilité Immédiate",
      whatsappMsg: "Bonjour ATES, demande de prix Coffrets et Disjoncteurs"
    }
  ];

  const filteredProducts = products.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.cat === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="catalog-section" id="catalog">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title"><Boxes size={16} /> MAGASIN & FOURNITURE</span>
          <h2>Vente de Câbles & Équipements Électriques Certifiés</h2>
          <p>Fourniture de gros et demi-gros certifiée pour vos chantiers résidentiels, tertiaires et HTA.</p>
        </div>

        {/* Controls */}
        <div className="catalog-controls">
          <div className="search-box">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Rechercher un produit (ex: Câble torsadé, Transformateur, Isolateur...)" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-buttons">
            <button className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>Tous</button>
            <button className={`cat-btn ${activeCategory === 'cables' ? 'active' : ''}`} onClick={() => setActiveCategory('cables')}>Câbles Électriques</button>
            <button className={`cat-btn ${activeCategory === 'isolateurs' ? 'active' : ''}`} onClick={() => setActiveCategory('isolateurs')}>Isolateurs & Armements</button>
            <button className={`cat-btn ${activeCategory === 'transfos' ? 'active' : ''}`} onClick={() => setActiveCategory('transfos')}>Transformateurs & Postes</button>
            <button className={`cat-btn ${activeCategory === 'protections' ? 'active' : ''}`} onClick={() => setActiveCategory('protections')}>Protections & Tableaux</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="catalog-grid">
          {filteredProducts.map(prod => (
            <div key={prod.id} className="product-card">
              <div className="product-badge">{prod.badge}</div>
              <div className="product-icon">{prod.icon}</div>
              <h3>{prod.title}</h3>
              <p className="product-desc">{prod.desc}</p>
              <div className="product-spec">
                <span><Shield size={14} /> {prod.spec1}</span>
                <span><Truck size={14} /> {prod.spec2}</span>
              </div>
              <div className="product-action">
                <a 
                  href={`https://wa.me/237677764773?text=${encodeURIComponent(prod.whatsappMsg)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-sm btn-whatsapp"
                >
                  <i className="fa-brands fa-whatsapp"></i> Demander Prix
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
