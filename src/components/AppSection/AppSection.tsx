import { Smartphone } from 'lucide-react';
import styles from './AppSection.module.css';

export default function AppSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <h2 className={styles.heading}>
            One app for everything you need
          </h2>
          <p className={styles.description}>
            Careem is the everyday super app that connects you with rides, food delivery, packages, and payments — all in one place across the Middle East, North Africa, and Pakistan.
          </p>
          <div className={styles.storeBtns}>
            <a href="#" className={styles.storeBtn}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>App Store</span>
            </a>
            <a href="#" className={styles.storeBtn}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.22.98.14l12.49-7.17-2.83-2.84-10.64 9.87zm16.2-9.34L16.7 12.8l2.67-2.67c.84.49 1.45 1.32 1.45 2.13 0 .79-.53 1.56-1.44 2.16zm-3.44-3.44L3.08.07C2.83.01 2.58.06 2.37.19L14.11 12 15.94 10.98zm-12.76-9.9c-.03.15-.05.3-.05.46v19.12c0 .16.02.31.05.46L14.06 12 3.18 1.08z" />
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </div>
        <div className={styles.phoneSide}>
          <div className={styles.phoneWrapper}>
            <Smartphone size={120} strokeWidth={1} className={styles.phoneIcon} />
            <div className={styles.phoneScreen}>
              <div className={styles.appUI}>
                <div className={styles.appBar}></div>
                <div className={styles.appRow}>
                  <div className={styles.appCard} style={{ background: '#3b3be8' }}></div>
                  <div className={styles.appCard} style={{ background: '#c8f5c8' }}></div>
                </div>
                <div className={styles.appRow}>
                  <div className={styles.appCard} style={{ background: '#7c3aed' }}></div>
                  <div className={styles.appCard} style={{ background: '#0f1f3d' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
