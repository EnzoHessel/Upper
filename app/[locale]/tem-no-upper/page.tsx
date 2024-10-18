import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageSection from '@/components/image-section';

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
      icon: "/icons/CurrencyDollarIcon.svg",
      title: `${t("CardCursos.card1.title")}`,
      description: `${t("CardCursos.card1.description")}`
    },
    {
      icon: "/icons/ArrowTrendingUpIcon.svg",
      title: `${t("CardCursos.card2.title")}`,
      description: `${t("CardCursos.card2.description")}`
    },
    {
      icon: "/icons/DocumentCheckIcon.svg",
      title: `${t("CardCursos.card3.title")}`,
      description: `${t("CardCursos.card3.description")}`
    }
  ];

  return (
    <div className={styles.homePageContainer}>
      <section>
        <HeroSection
          title={t('HeroSection.title')}
          description={t('HeroSection.description')}
          primaryButton={t('HeroSection.primaryButton')}
          ghostButton={t('HeroSection.ghostButton')}
          baixarApp
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <ImageSection title={t('ImageSection2.titlePricipal')}
          image={"misao.svg"}
          textSections={section}
        />
      </section>
      <section>
        <ThreeCardsSection
          title={t('CardCursos.title')}
          description={t('CardCursos.description')}
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
  );
}
