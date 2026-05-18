import { Car, UtensilsCrossed, Package, CreditCard } from 'lucide-react';
import styles from './ServiceCards.module.css';

type ServiceCardData = {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  subtitleColor: string;
  icon: React.ReactNode;
};

const CARDS: ServiceCardData[] = [
  {
    id: 'go',
    title: 'Go',
    subtitle: 'anywhere',
    bgColor: '#3b3be8',
    textColor: '#ffffff',
    subtitleColor: '#a0a0ff',
    icon: <Car size={32} />,
  },
  {
    id: 'eat',
    title: 'Eat',
    subtitle: 'anytime',
    bgColor: '#c8f5c8',
    textColor: '#1a3a2a',
    subtitleColor: '#2a6a3a',
    icon: <UtensilsCrossed size={32} />,
  },
  {
    id: 'get',
    title: 'Get',
    subtitle: 'anything',
    bgColor: '#7c3aed',
    textColor: '#ffffff',
    subtitleColor: '#c4a8f8',
    icon: <Package size={32} />,
  },
  {
    id: 'pay',
    title: 'Pay',
    subtitle: 'anyone',
    bgColor: '#0f1f3d',
    textColor: '#ffffff',
    subtitleColor: '#6b8cbe',
    icon: <CreditCard size={32} />,
  },
];

export default function ServiceCards() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {CARDS.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

type ServiceCardProps = {
  card: ServiceCardData;
};

function ServiceCard({ card }: ServiceCardProps) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: card.bgColor }}
    >
      <div className={styles.cardIcon} style={{ color: card.textColor }}>
        {card.icon}
      </div>
      <div className={styles.cardText}>
        <span className={styles.cardTitle} style={{ color: card.textColor }}>
          {card.title}
        </span>
        <span className={styles.cardSubtitle} style={{ color: card.subtitleColor }}>
          {card.subtitle}
        </span>
      </div>
    </div>
  );
}
