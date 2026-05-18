import styles from './StatsSection.module.css';

type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: '50M+', label: 'Customers' },
  { value: '14', label: 'Countries' },
  { value: '100+', label: 'Cities' },
  { value: '2M+', label: 'Captains & Earners' },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <h2 className={styles.heading}>Simplifying &amp; improving lives across the region</h2>
          <p className={styles.description}>
            From Cairo to Karachi, we're building the everyday super app that serves millions of people with technology that cares.
          </p>
        </div>
        <div className={styles.statsSide}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
