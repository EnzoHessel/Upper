"use client"

import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageWithCarrousel from '@/components/Image-with-carrousel';
import {
  BuildingLibraryIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Home() {
  const t = useTranslations('HomePage');

  const cardsData = [
    {
      Icon: BuildingLibraryIcon,
      title: `${t("UmaExperienciaTransparente.card1.title")}`,
      description: `${t("UmaExperienciaTransparente.card1.description")}`
    },
    {
      Icon: ChartBarIcon,
      title: `${t("UmaExperienciaTransparente.card2.title")}`,
      description: `${t("UmaExperienciaTransparente.card2.description")}`
    },
    {
      Icon: CurrencyDollarIcon,
      title: `${t("UmaExperienciaTransparente.card3.title")}`,
      description: `${t("UmaExperienciaTransparente.card3.description")}`
    }
  ];

  return (
    <div className={styles.homePageContainer}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection
          title={t('HeroSection.title')}
          description={t('HeroSection.description')}
          primaryButton={t('HeroSection.primaryButton')}
          ghostButton={t('HeroSection.ghostButton')}
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWithTextSection
          title={t('BemVindoAoUpper.title')}
          description={t('BemVindoAoUpper.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('UmaExperienciaTransparente.title')}
          </h3>
          <ThreeCardsSection cards={cardsData}/>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWithCarrousel
          title={t('Solucoes.card.title')}
          description={t('Solucoes.card.description')}
          images={[
            'Carrousel/phone-1.svg',
            'Carrousel/phone-2.svg',
            'Carrousel/phone-3.svg',
          ]}
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('JunteSeANos.title')}
          </h3>
          <ImageWithTextSection
            title={t('JunteSeANos.card.title')}
            description={t('JunteSeANos.card.description')}
            image={'junte-se-a-nos.svg'}
          />
        </div>
      </motion.section>
    </div>
  );
}
