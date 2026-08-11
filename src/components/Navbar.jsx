import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Phone, MapPin, Menu, X, ChevronDown, TowerControl, Box,
  Cpu, Building2, ShieldCheck, ChevronRight, Clock3, BadgeCheck, HardHat, Send
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <div className="nb-topbar">
        <div className="nb-topbar__inner">
          <div className="nb-topbar__left">
            <span><BadgeCheck size={13} /> Sous-traitant agréé <strong>Eneo Cameroun</strong></span>
            <span className="nb-topbar__sep">|</span>
            <span className="nb-topbar__loc"><MapPin size={12} /> Douala 5e · Couverture Nationale</span>
          </div>
          <div className="nb-topbar__right">
            <a href="tel:+237677764773">
              <Clock3 size={13} /> <strong>+237 677 76 47 73</strong>
            </a>
            <a
              href="https://wa.me/237677764773"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-topbar__wa"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────────────── */}
      <header className={`nb-header ${isScrolled ? 'nb-header--scrolled' : ''}`}>
        <div className="nb-header__inner">

          {/* Logo */}
          <Link to="/" className="nb-logo" onClick={closeMenu}>
            <img src="/assets/images/logo_ates.png" alt="ATES Logo" className="nb-logo__img" />
            <div className="nb-logo__text">
              <span className="nb-logo__name">Énergie · BTP · Réseaux</span>
              <span className="nb-logo__tag">Électricité &amp; Génie Civil</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nb-nav" aria-label="Navigation principale">
            <NavLink to="/" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`} end>
              Accueil
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`}>
              À Propos
            </NavLink>

            {/* Services dropdown */}
            <div
              className="nb-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `nb-nav__link nb-dropdown__toggle ${isActive ? 'is-active' : ''}`}
                aria-expanded={dropdownOpen}
              >
                Services <ChevronDown size={13} style={{ transition: '0.2s', display: 'inline', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </NavLink>
              <div className={`nb-dropdown__menu ${dropdownOpen ? 'is-open' : ''}`}>
                {[
                  { to: '/services#ligne-ht',             icon: <TowerControl size={17}/>, title: 'Lignes HT / MT / BT',           sub: 'Poteaux, câbles & armements' },
                  { to: '/services#transformateurs',      icon: <Box size={17}/>,          title: 'Postes de Transformateurs',       sub: 'Postes H61, cabines & cellules' },
                  { to: '/services#btp-genie-civil',      icon: <HardHat size={17}/>,      title: 'BTP & Génie Civil',              sub: 'Fondations, terrassement & bâtiment' },
                  { to: '/services#maintenance',          icon: <Cpu size={17}/>,          title: 'Maintenance & Mesure ES3000P',   sub: 'Contrôle numérique certifié' },
                  { to: '/services#electricite-batiment', icon: <Building2 size={17}/>,    title: 'Électricité Bâtiment & Usine',   sub: 'Armoires triphasées & câblage' },
                ].map(({ to, icon, title, sub }) => (
                  <Link key={to} to={to} className="nb-dropdown__item" onClick={() => setDropdownOpen(false)}>
                    <span className="nb-dropdown__icon">{icon}</span>
                    <span>
                      <strong>{title}</strong>
                      <em>{sub}</em>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/partenaire-eneo" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`}>
              Partenaire Eneo
            </NavLink>
            <NavLink to="/realisations" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`}>
              Réalisations
            </NavLink>
            <NavLink to="/catalogue" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`}>
              Matériel
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nb-nav__link ${isActive ? 'is-active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="nb-header__actions">
            <Link to="/contact" className="nb-cta-btn nb-desktop-only">
              <Send size={15} /> Contactez-nous
            </Link>
            <button
              className="nb-burger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      <div className={`nb-drawer ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="nb-drawer__overlay" onClick={closeMenu} />
        <div className="nb-drawer__panel">

          <div className="nb-drawer__head">
            <Link to="/" onClick={closeMenu} className="nb-drawer__brand">
              <img src="/assets/images/logo_ates.png" alt="ATES" className="nb-drawer__logo" />
              <span className="nb-drawer__brandname">ATES</span>
            </Link>
            <button className="nb-drawer__close" onClick={closeMenu} aria-label="Fermer">
              <X size={22} />
            </button>
          </div>

          <nav className="nb-drawer__nav">
            <NavLink to="/" className={({ isActive }) => `nb-drawer__link ${isActive ? 'is-active' : ''}`} end onClick={closeMenu}>
              <span>Accueil</span><ChevronRight size={16} />
            </NavLink>
            <NavLink to="/a-propos" className={({ isActive }) => `nb-drawer__link ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>
              <span>À Propos</span><ChevronRight size={16} />
            </NavLink>

            <div className="nb-drawer__accordion">
              <button
                className={`nb-drawer__accordion-toggle ${servicesOpen ? 'is-open' : ''}`}
                onClick={() => setServicesOpen(v => !v)}
              >
                <span>Services HT/MT &amp; BTP</span>
                <ChevronDown size={16} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>
              {servicesOpen && (
                <div className="nb-drawer__accordion-body">
                  <Link to="/services#ligne-ht"             className="nb-drawer__sublink" onClick={closeMenu}>Lignes HT / MT / BT</Link>
                  <Link to="/services#transformateurs"      className="nb-drawer__sublink" onClick={closeMenu}>Postes de Transformateurs</Link>
                  <Link to="/services#btp-genie-civil"      className="nb-drawer__sublink" onClick={closeMenu}>BTP &amp; Génie Civil</Link>
                  <Link to="/services#maintenance"          className="nb-drawer__sublink" onClick={closeMenu}>Maintenance &amp; Mesure</Link>
                  <Link to="/services#electricite-batiment" className="nb-drawer__sublink" onClick={closeMenu}>Électricité Bâtiment</Link>
                </div>
              )}
            </div>

            <NavLink to="/partenaire-eneo" className={({ isActive }) => `nb-drawer__link ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>
              <span>Partenaire Eneo</span><ChevronRight size={16} />
            </NavLink>
            <NavLink to="/realisations" className={({ isActive }) => `nb-drawer__link ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>
              <span>Réalisations</span><ChevronRight size={16} />
            </NavLink>
            <NavLink to="/catalogue" className={({ isActive }) => `nb-drawer__link ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>
              <span>Vente Matériel</span><ChevronRight size={16} />
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nb-drawer__link nb-drawer__link--highlight ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>
              <span>Contact &amp; Devis</span><ChevronRight size={16} />
            </NavLink>
          </nav>

          <div className="nb-drawer__foot">
            <div className="nb-drawer__badge">
              <ShieldCheck size={14} /> Sous-traitant Agréé Eneo Cameroun
            </div>
            <a href="tel:+237677764773" className="nb-drawer__call">
              <Phone size={17} /> Appel : +237 677 76 47 73
            </a>
            <a
              href="https://wa.me/237677764773"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-drawer__whatsapp"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
