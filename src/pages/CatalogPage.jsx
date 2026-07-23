import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from '../components/Catalog';
import { ChevronRight } from 'lucide-react';

export default function CatalogPage() {
  return (
    <div className="catalog-page">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Accueil</Link> <ChevronRight size={14} /> <span>Catalogue Matériel</span>
          </div>
          <h1>Magasin & Vente de Matériel Électrique</h1>
          <p>Fourniture de câbles électriques HTA/BT, transformateurs, isolateurs et coffrets certifiés en gros et demi-gros.</p>
        </div>
      </div>

      <Catalog />
    </div>
  );
}
