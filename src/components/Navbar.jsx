import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Calculator, Menu, X, ChevronDown, TowerControl, Box, Cpu, Building2, ShieldCheck, ChevronRight, Clock3, BadgeCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      {/* Trust bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span className="top-info-item"><BadgeCheck size={15} /> Sous-traitant agréé <strong>Eneo Cameroun</strong></span>
            <span className="top-info-item top-location"><MapPin size={15} /> Douala 5e · Tout le Cameroun</span>
          </div>
          <div className="top-contacts">
            <a href="tel:+237600000000" className="top-link">
              <Clock3 size={14} /> Urgence 24h/7j : +237 600 000 000
            </a>
            <a href="https://wa.me/237600000000" target="_blank" rel="noopener noreferrer" className="whatsapp-badge">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
            <img src="/assets/images/logo_ates.png" alt="ATES Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-name">Énergie · Réseaux</span>
              <span className="brand-tag">Solutions électriques</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-menu desktop-only">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Accueil
            </NavLink>

            <NavLink to="/a-propos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              À Propos
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="nav-dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false);
              }}
            >
              <NavLink to="/services" aria-expanded={dropdownOpen} className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`}>
                Services HT/MT <ChevronDown size={14} className={`arrow ${dropdownOpen ? 'open' : ''}`} />
              </NavLink>
              
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <Link to="/services#ligne-ht" className="dropdown-item">
                  <div className="item-icon"><TowerControl size={18} /></div>
                  <div>
                    <strong>Lignes HT / MT / BT</strong>
                    <p>Pose de poteaux, câbles & armements</p>
                  </div>
                </Link>

                <Link to="/services#transformateurs" className="dropdown-item">
                  <div className="item-icon"><Box size={18} /></div>
                  <div>
                    <strong>Postes de Transformateurs</strong>
                    <p>Postes H61, cabines & cellules</p>
                  </div>
                </Link>

                <Link to="/services#maintenance" className="dropdown-item">
                  <div className="item-icon"><Cpu size={18} /></div>
                  <div>
                    <strong>Maintenance & Mesure ES3000P</strong>
                    <p>Contrôle numérique de terre certifié</p>
                  </div>
                </Link>

                <Link to="/services#electricite-batiment" className="dropdown-item">
                  <div className="item-icon"><Building2 size={18} /></div>
                  <div>
                    <strong>Électricité Bâtiment & Usine</strong>
                    <p>Armoires triphasées & câblage</p>
                  </div>
                </Link>
              </div>
            </div>

            <NavLink to="/partenaire-eneo" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Partenaire Eneo
            </NavLink>

            <NavLink to="/realisations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Réalisations
            </NavLink>

            <NavLink to="/catalogue" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Matériel
            </NavLink>

            <NavLink to="/simulateur-devis" className={({ isActive }) => `nav-link highlight ${isActive ? 'active' : ''}`}>
              Simulateur
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <Link to="/simulateur-devis" className="btn btn-primary btn-glow desktop-cta">
              <Calculator size={18} /> Demander un devis
            </Link>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-overlay" onClick={() => setMobileOpen(false)}></div>
        <div className="drawer-content">
          <div className="drawer-header">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src="/assets/images/logo_ates.png" alt="ATES" className="drawer-logo" />
            </Link>
            <button className="drawer-close" onClick={() => setMobileOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <div className="drawer-body">
            <NavLink to="/" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} end onClick={() => setMobileOpen(false)}>
              Accueil <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/a-propos" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              À Propos <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/services" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Services HT/MT <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/partenaire-eneo" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Partenaire Eneo <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/realisations" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Réalisations <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/catalogue" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Vente Matériel <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/simulateur-devis" className={({ isActive }) => `drawer-link highlight ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Simulateur Devis <ChevronRight size={18} />
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Contact <ChevronRight size={18} />
            </NavLink>
          </div>

          <div className="drawer-footer">
            <div className="badge-eneo-drawer">
              <ShieldCheck size={16} /> Sous-traitant Agréé Eneo
            </div>
            <a href="tel:+237600000000" className="btn btn-primary w-100 mb-2">
              <Phone size={18} /> Appel Urgence 24/7
            </a>
            <a href="https://wa.me/237600000000" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-100">
              <i className="fa-brands fa-whatsapp text-lg"></i> Échanger sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
