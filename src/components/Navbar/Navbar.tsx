import { useState } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Services', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'Careem for Business', href: '#' },
  { label: 'Careem Plus', href: '#' },
  { label: 'About us', href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>&#9679;</span>
          <span className={styles.logoText}>Careem</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={styles.navLink}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Language Selector */}
        <div className={styles.langSelector}>
          <button
            className={styles.langBtn}
            onClick={() => setLangOpen(!langOpen)}
            type="button"
          >
            <Globe size={16} />
            <span>English</span>
            <ChevronDown size={14} />
          </button>
          {langOpen && (
            <div className={styles.langDropdown}>
              <button type="button" onClick={() => setLangOpen(false)}>English</button>
              <button type="button" onClick={() => setLangOpen(false)}>العربية</button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} className={styles.mobileLink}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
