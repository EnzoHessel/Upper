'use client';

import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageSection from '@/components/image-section';
import { motion } from 'framer-motion';


export default function TemNoUpper() {
  const t = useTranslations('TemNoUpper');

  const section = [
    {
      title: t('ImageSection2.title'),
      description: t('ImageSection2.description')
    },
    {
      title: t('ImageSection2.title2'),
      description: t('ImageSection2.description2')
    },
    {
      title: t('ImageSection2.title3'),
      description: t('ImageSection2.description3')
    }
  ];

  const cardsData = [
    {
      Icon: CurrencyDollarIcon,
      title: `${t("CardCursos.card1.title")}`,
      description: `${t("CardCursos.card1.description")}`
    },
    {
      Icon: ArrowTrendingUpIcon,
      title: `${t("CardCursos.card2.title")}`,
      description: `${t("CardCursos.card2.description")}`
    },
    {
      Icon: DocumentCheckIcon,
      title: `${t("CardCursos.card3.title")}`,
      description: `${t("CardCursos.card3.description")}`
    },
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
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-8'
      >
        <h3 className="text-primary-foreground text-center">
          {t('ImageSection2.titlePricipal')}
        </h3>
        <ImageSection image={"misao.svg"} textSections={section} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('CardCursos.title')}
          </h3>
          <span className="text-[hsl(var(--secondary-content))] text-center">{t('CardCursos.description')}</span>
          <ThreeCardsSection cards={cardsData}/>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImageWithTextSection
          title={t('JunteSeANos.card.title')}
          description={t('JunteSeANos.card.description')}
          image={'junte-se-a-nos.svg'}
        />
      </motion.section>
    </div>
  );
}
