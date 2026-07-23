import React, { useState } from 'react';
import { Camera, Maximize2, Play, Film, X } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxCaption, setLightboxCaption] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      category: "poteaux",
      image: "/assets/images/camion_grue_installation.jpg",
      tag: "Chantier Douala",
      title: "Pose de Poteaux par Camion Grue",
      desc: "Installation de poteaux béton et bois sous supervision Eneo"
    },
    {
      id: 2,
      category: "poteaux",
      image: "/assets/images/technicien_poteau_1.jpg",
      tag: "Haute Tension",
      title: "Intervention en Hauteur",
      desc: "Fixation d'isolateurs et câbles sur ligne aérienne"
    },
    {
      id: 3,
      category: "equipe",
      image: "/assets/images/equipe_ates.jpg",
      tag: "Capital Humain",
      title: "Équipe Technique ATES",
      desc: "Techniciens habilités travaux sous tension et hauteur"
    },
    {
      id: 4,
      category: "mesures",
      image: "/assets/images/mesure_terre_es3000p.jpg",
      tag: "Conformité",
      title: "Testeur de Terre ES3000P",
      desc: "Mesure de précision à Douala (RÉSULTAT: 9.06 Ω conformité totale)"
    },
    {
      id: 5,
      category: "poteaux",
      image: "/assets/images/haute_tension_poteau.jpg",
      tag: "Infrastructures",
      title: "Armement & Isolateurs Béton",
      desc: "Montage robuste pour ligne moyenne tension HTA"
    },
    {
      id: 6,
      category: "poteaux",
      image: "/assets/images/chantier_douala.jpg",
      tag: "Géolocalisation Douala",
      title: "Chantier de Restructuration Réseau",
      desc: "Douala 5e - Modernisation du réseau Eneo"
    },
    {
      id: 7,
      category: "equipe",
      image: "/assets/images/briefing_securite.jpg",
      tag: "Sécurité",
      title: "Briefing Sécurité du Matin",
      desc: "Analyse des risques avant montée sur le terrain"
    },
    {
      id: 8,
      category: "video",
      isVideo: true,
      image: "/assets/images/chantier_douala.jpg",
      videoUrl: "/assets/videos/chantier_action.mp4",
      tag: "Vidéo HD",
      title: "Déroulement d'un Chantier en Direct",
      desc: "Regardez nos techniciens à l'œuvre sur le réseau"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (img, caption) => {
    setLightboxImg(img);
    setLightboxCaption(caption);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="sub-title"><Camera size={16} /> CHANTIERS & RÉALISATIONS</span>
          <h2>Découvrez nos Travaux sur le Terrain</h2>
          <p>Photos authentiques issues de nos interventions à Douala et dans les différentes régions du Cameroun.</p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>Toutes les Réalisations</button>
          <button className={`filter-btn ${activeFilter === 'poteaux' ? 'active' : ''}`} onClick={() => setActiveFilter('poteaux')}>Poteaux & Lignes HT</button>
          <button className={`filter-btn ${activeFilter === 'equipe' ? 'active' : ''}`} onClick={() => setActiveFilter('equipe')}>Équipe & Sécurité</button>
          <button className={`filter-btn ${activeFilter === 'mesures' ? 'active' : ''}`} onClick={() => setActiveFilter('mesures')}>Mesures & Tests</button>
          <button className={`filter-btn ${activeFilter === 'video' ? 'active' : ''}`} onClick={() => setActiveFilter('video')}>Vidéo Démo</button>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`gallery-item ${item.isVideo ? 'video-item' : ''}`}>
              {item.isVideo ? (
                <div className="video-preview-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="play-icon-overlay" onClick={() => setVideoModalOpen(true)}>
                    <Play size={24} />
                  </div>
                </div>
              ) : (
                <img src={item.image} alt={item.title} />
              )}

              <div className="gallery-overlay">
                <span className="tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {item.isVideo ? (
                  <button className="view-btn" onClick={() => setVideoModalOpen(true)}>
                    <Film size={14} /> Lancer la Vidéo
                  </button>
                ) : (
                  <button className="view-btn" onClick={() => openLightbox(item.image, item.title)}>
                    <Maximize2 size={14} /> Agrandir
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Image Modal */}
      {lightboxImg && (
        <div className="lightbox active" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}><X size={32} /></button>
            <img src={lightboxImg} alt="ATES Lightbox" />
            <div className="lightbox-caption">{lightboxCaption}</div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="lightbox active" onClick={() => setVideoModalOpen(false)}>
          <div className="lightbox-content video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setVideoModalOpen(false)}><X size={32} /></button>
            <video controls autoPlay style={{ width: '100%', maxHeight: '80vh', borderRadius: '16px' }}>
              <source src="/assets/videos/chantier_action.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
