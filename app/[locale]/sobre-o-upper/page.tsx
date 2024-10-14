"use client"

import CardsSection from '@/components/card-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import styles from '@/styles/home-page.module.css';
import { BoltIcon, CubeTransparentIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';


export default function SobreUpper() {
  const t = useTranslations('SobreUpper');

  const cardsData = [
    {
      Icon: RocketLaunchIcon,
      title: `${t("card.card1.title")}`,
      description: `${t("card.card1.description")}`
    },
    {
      Icon: CubeTransparentIcon,
      title: `${t("card.card2.title")}`,
      description: `${t("card.card2.description")}`
    },
    {
      Icon: BoltIcon,
      title: `${t("card.card3.title")}`,
      description: `${t("card.card3.description")}`
    },
    {
      Icon: ShieldCheckIcon,
      title: `${t("card.card4.title")}`,
      description: `${t("card.card4.description")}`
    }
  ];

  return (
    <div className={styles.homePageContainer}>
      <section>
        <ImageWithTextSection
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'misao.svg'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('ImageSection2.title')}
          description={t('ImageSection2.description')}
          image={'visao.svg'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('card.title')}
          </h3>
          <CardsSection cards={cardsData} />
        </div>
      </section>
    </div>
  )
}
