import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import { ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Réalisations</span>
          </div>
          <h1>Galerie des Chantiers & Réalisations</h1>
          <p>Explorer nos interventions terrain en photos et vidéos HD à Douala et à travers tout le Cameroun.</p>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
