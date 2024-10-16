import CardsSection from '@/components/card-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import styles from '@/styles/home-page.module.css';
import { useTranslations } from 'next-intl';

export default function SobreUpper() {
  const t = useTranslations('SobreUpper');

  const cardsData = [
    {
      icon: "/icons/RocketLaunchIcon.svg",
      title: `${t("card.card1.title")}`,
      description: `${t("card.card1.description")}`
    },
    {
      icon: "/icons/CubeTransparentIcon.svg",
      title: `${t("card.card2.title")}`,
      description: `${t("card.card2.description")}`
    },
    {
      icon: "/icons/BoltIcon.svg",
      title: `${t("card.card3.title")}`,
      description: `${t("card.card3.description")}`
    },
    {
      icon: "/icons/ShieldCheckIcon.svg",
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
        <CardsSection
          title={t('card.title')}
          cards={cardsData}
        />
      </section>
    </div>
  )
}
