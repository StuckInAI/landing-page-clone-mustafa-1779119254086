import { Globe } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  {
    heading: 'Company',
    links: ['About us', 'Careers', 'Press', 'Blog'],
  },
  {
    heading: 'Products',
    links: ['Rides', 'Food', 'Delivery', 'Pay'],
  },
  {
    heading: 'Partners',
    links: ['Drive with Careem', 'Restaurant Partner', 'Advertise'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'Safety', 'Terms of Use', 'Privacy Policy'],
  },
];

const SOCIAL_LINKS = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top Section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>&#9679;</span>
              <span className={styles.logoText}>Careem</span>
            </a>
            <p className={styles.tagline}>The everyday super app for the Middle East &amp; beyond.</p>
          </div>
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className={styles.col}>
              <h4 className={styles.colHeading}>{col.heading}</h4>
              <ul className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Careem. All rights reserved.</p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((s) => (
              <a key={s} href="#" className={styles.socialLink}>{s}</a>
            ))}
          </div>
          <button type="button" className={styles.langBtn}>
            <Globe size={14} />
            <span>English</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
