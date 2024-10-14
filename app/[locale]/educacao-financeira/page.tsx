"use client"

import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import ThreeCardsSection from '@/components/three-cards-section';
import styles from '@/styles/home-page.module.css';
import { ChatBubbleLeftRightIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';


export default function EducacaoFinanceira() {
  const t = useTranslations('EducacaoFinanceira');

  const cardsData = [
    {
      Icon: CheckCircleIcon,
      title: `${t("Card.card1.title")}`,
      description: `${t("Card.card1.description")}`
    },
    {
      Icon: DocumentCheckIcon,
      title: `${t("Card.card2.title")}`,
      description: `${t("Card.card2.description")}`
    },
    {
      Icon: ChatBubbleLeftRightIcon,
      title: `${t("Card.card3.title")}`,
      description: `${t("Card.card3.description")}`
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
          image={'cebrac.svg'}
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
            {t('section.title')}
          </h3>
          <ImageWithTextSection
            title={t('section.ImageSection2.title')}
            description={t('section.ImageSection2.description')}
            image={'cursos.svg'}
            className="w-[250px] md:w-[280px] lg:w-[336px]"
          />
          <ImageWithTextSection
            title={t('section.ImageSection3.title')}
            description={t('section.ImageSection3.description')}
            image={'aprendizado.svg'}
            className="w-[250px] md:w-[280px] lg:w-[336px]"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('Card.title')}
          </h3>
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
  )
}