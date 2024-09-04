import styles from '@/styles/three-cards-section.module.css';
import Card from './card';
import { useTranslations } from 'next-intl';
import {
  BuildingLibraryIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function ThreeCardsSection() {
  const t = useTranslations('HomePage.UmaExperienciaTransparente');

  return (
    <>
      <div className="text-center flex flex-col gap-8">
        <h3 className="text-primary-foreground">{t('title')}</h3>
        <div className={styles.cardsContainer}>
          <Card
            Icon={BuildingLibraryIcon}
            title={t('card1.title')}
            description={t('card1.description')}
          />
          <Card
            Icon={ChartBarIcon}
            title={t('card1.title')}
            description={t('card1.description')}
          />
          <Card
            Icon={CurrencyDollarIcon}
            title={t('card1.title')}
            description={t('card1.description')}
          />
        </div>
      </div>
    </>
  );
}
