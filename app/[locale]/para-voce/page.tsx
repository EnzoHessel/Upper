"use client";

import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import CardsSection from '@/components/card-section';
import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingDownIcon,
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageSection from '@/components/image-section';
import { motion } from 'framer-motion';


export default function forYou() {
  const t = useTranslations('ForYouPage');

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
      Icon: Square3Stack3DIcon,
      title: `${t("card.card1.title")}`,
      description: `${t("card.card1.description")}`
    },
    {
      Icon: BanknotesIcon,
      title: `${t("card.card2.title")}`,
      description: `${t("card.card2.description")}`
    },
    {
      Icon: CreditCardIcon,
      title: `${t("card.card3.title")}`,
      description: `${t("card.card3.description")}`
    },
    {
      Icon: AdjustmentsHorizontalIcon,
      title: `${t("card.card4.title")}`,
      description: `${t("card.card4.description")}`
    }
  ];

  const cardsData2 = [
    {
      Icon: CurrencyDollarIcon,
      title: `${t("card2.card1.title")}`,
      description: `${t("card2.card1.description")}`
    },
    {
      Icon: ArrowTrendingDownIcon,
      title: `${t("card2.card2.title")}`,
      description: `${t("card2.card2.description")}`
    },
    {
      Icon: DocumentCheckIcon,
      title: `${t("card2.card3.title")}`,
      description: `${t("card2.card3.description")}`
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
          title={t('ForYou.title')}
          description={t('ForYou.description')}
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
            {t('JunteSeANos.title')}
          </h3>
          <CardsSection cards={cardsData} />
        </div>
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
            {t('card2.title')}
          </h3>
          <span className="text-[hsl(var(--secondary-content))] text-center">{t('card2.description')}</span>
          <ThreeCardsSection cards={cardsData2}/>
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
