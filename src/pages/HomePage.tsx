import Navbar from '@/components/Navbar/Navbar';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import ServiceCards from '@/components/ServiceCards/ServiceCards';
import AppSection from '@/components/AppSection/AppSection';
import StatsSection from '@/components/StatsSection/StatsSection';
import DownloadSection from '@/components/DownloadSection/DownloadSection';
import Footer from '@/components/Footer/Footer';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <HeroBanner />
        <ServiceCards />
        <AppSection />
        <StatsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
