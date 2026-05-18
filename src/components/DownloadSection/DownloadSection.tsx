import styles from './DownloadSection.module.css';

export default function DownloadSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Get the Careem app</h2>
          <p className={styles.description}>
            Download now and experience the region's leading super app. Rides, food, grocery, payments — and much more.
          </p>
          <div className={styles.qrWrapper}>
            <div className={styles.qrPlaceholder}>
              <span className={styles.qrText}>QR Code</span>
            </div>
            <div className={styles.qrLabel}>
              <p>Scan to download</p>
              <p className={styles.qrSub}>Available on iOS &amp; Android</p>
            </div>
          </div>
        </div>
        <div className={styles.bgDecor}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>
      </div>
    </section>
  );
}
