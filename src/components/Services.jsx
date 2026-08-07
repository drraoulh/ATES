import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, TowerControl as Tower, Box, Cpu, PlugZap, Building2, ShoppingBag, HardHat, ArrowRight, ChevronRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Construction de Lignes HT / MT / BT",
      image: "/assets/images/haute_tension_poteau.jpg",
      icon: <Tower size={24} />,
      desc: "Implantation et montage de poteaux en bois et béton armé, déroulage et ancrage des câbles nus ou torsadés, armements métalliques HCTA.",
      features: [
        "Lignes Aériennes & Souterraines HTA (15-30kV)",
        "Plantations de poteaux béton & bois traités",
        "Armements et isolateurs verre/composite"
      ],
      linkText: "Contacter un expert"
    },
    {
      id: 2,
      title: "Postes & Transformateurs Électriques",
      image: "/assets/images/chantier_douala.jpg",
      icon: <Box size={24} />,
      desc: "Fourniture, installation et raccordement de postes de transformation HTA/BT H61, cabines ou sur poteau avec protection fusibles/disjoncteur.",
      features: [
        "Transformateurs 50 kVA à 1250 kVA",
        "Cellules HTA et coffrets de distribution BT",
        "Mise en service & rapports d'essais"
      ],
      linkText: "Contacter un expert"
    },
    {
      id: 3,
      title: "Génie Civil & BTP (Travaux Publics)",
      image: "/assets/images/camion_grue_installation.jpg",
      icon: <HardHat size={24} />,
      desc: "Réalisation d'ouvrages de génie civil, massifs de fondation pour pylônes, cabines en maçonnerie, terrassement, tranchées VRD et construction de bâtiments.",
      features: [
        "Massifs & fondations béton armé pour postes",
        "Tranchées, fourreaux & VRD réseaux souterrains",
        "Construction & aménagement de bâtiments & cabines"
      ],
      linkText: "Demander une étude BTP"
    },
    {
      id: 4,
      title: "Maintenance & Mesure de Terre (ES3000P)",
      image: "/assets/images/mesure_terre_es3000p.jpg",
      icon: <Cpu size={24} />,
      desc: "Contrôle précis de la résistivité des prises de terre avec testeur numérique haute précision ES3000P pour garantir la sécurité absolue contre les surtensions.",
      features: [
        "Mesures de terre numériques certifiées",
        "Maintenance préventive des postes",
        "Audit de conformité & thermographie"
      ],
      linkText: "Demander un contrôle"
    },
    {
      id: 5,
      title: "Sous-traitance & Raccordement Eneo",
      image: "/assets/images/raccordement_ligne.jpg",
      icon: <PlugZap size={24} />,
      desc: "Prise en charge complète des travaux de raccordement réseau Eneo pour résidences, lotissements, usines et immeubles commerciaux.",
      features: [
        "Extensions de réseau autorisées",
        "Raccordement Haute & Basse Tension",
        "Dossiers techniques & validation Eneo"
      ],
      linkText: "Contacter un expert"
    },
    {
      id: 6,
      title: "Électricité de Bâtiment & Industrie",
      image: "/assets/images/montage_armement.jpg",
      icon: <Building2 size={24} />,
      desc: "Étude, câblage complet et installation électrique pour bâtiments résidentiels, tertiaires et sites industriels au Cameroun.",
      features: [
        "Armoires de distribution triphasées",
        "Éclairage public & industriel LED",
        "Groupes électrogènes & inverseurs"
      ],
      linkText: "En savoir plus"
    },
    {
      id: 7,
      title: "Vente de Câbles & Matériel Électrique",
      image: "/assets/images/equipe_ates.jpg",
      icon: <ShoppingBag size={24} />,
      desc: "Fourniture directe aux professionnels et particuliers de câbles en aluminium/cuivre, disjoncteurs, isolateurs et quincaillerie de ligne HTA/BT.",
      features: [
        "Câbles torsadés alum, câbles armés",
        "Isolateurs en verre, ferrures, pince d'ancrage",
        "Compteurs et tableaux normalisés"
      ],
      linkText: "Voir le catalogue"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title"><Settings size={16} /> NOTRE SAVOIR-FAIRE</span>
          <h2>Électricité Haute Tension, BTP & Génie Civil</h2>
          <p>De la construction de réseaux électriques aux ouvrages de génie civil et BTP, ATES garantit rigueur, sécurité et fiabilité.</p>
        </div>

        <div className="services-grid">
          {servicesList.map(item => (
            <div className="service-card" key={item.id}>
              <div className="service-image">
                <img src={item.image} alt={item.title} />
                <div className="service-icon">{item.icon}</div>
              </div>
              <div className="service-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="service-features">
                  {item.features.map((feat, idx) => (
                    <li key={idx}><ChevronRight size={16} className="text-green" /> {feat}</li>
                  ))}
                </ul>
                <Link to="/contact" className="service-link">
                  {item.linkText} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
