"use client"

import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import ThreeCardsSection from '@/components/three-cards-section';
import styles from '@/styles/home-page.module.css';
import { useTranslations } from 'next-intl';


export default function EducacaoFinanceira() {
  const t = useTranslations('EducacaoFinanceira');

  const cardsData = [
    {
      icon: "/icons/CheckCircleIcon.svg",
      title: `${t("Card.card1.title")}`,
      description: `${t("Card.card1.description")}`
    },
    {
      icon: "/icons/DocumentCheckIcon.svg",
      title: `${t("Card.card2.title")}`,
      description: `${t("Card.card2.description")}`
    },
    {
      icon: "/icons/ChatBubbleLeftRightIcon.svg",
      title: `${t("Card.card3.title")}`,
      description: `${t("Card.card3.description")}`
    },
  ];

  return (
    <div className={styles.homePageContainer}>
      <section>
        <HeroSection
          title={t('HeroSection.title')}
          description={t('HeroSection.description')}
          primaryButton={t('HeroSection.primaryButton')}
          ghostButton={t('HeroSection.ghostButton')}
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'cebrac.svg'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
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
      </section>
      <section>
        <ThreeCardsSection
        title={t('Card.title')}
        cards={cardsData}
      />
      </section>
      <section>
        <ImageWithTextSection
          title={t('JunteSeANos.card.title')}
          description={t('JunteSeANos.card.description')}
          image={'junte-se-a-nos.svg'}
        />
      </section>
    </div>
  )
}