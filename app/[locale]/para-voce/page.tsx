import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import CardsSection from '@/components/card-section';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageSection from '@/components/image-section';


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
      icon: "/icons/Square3Stack3DIcon.svg",
      title: `${t("card.card1.title")}`,
      description: `${t("card.card1.description")}`
    },
    {
      icon: "/icons/BanknotesIcon.svg",
      title: `${t("card.card2.title")}`,
      description: `${t("card.card2.description")}`
    },
    {
      icon: "/icons/CreditCardIcon.svg",
      title: `${t("card.card3.title")}`,
      description: `${t("card.card3.description")}`
    },
    {
      icon: "/icons/AdjustmentsHorizontalIcon.svg",
      title: `${t("card.card4.title")}`,
      description: `${t("card.card4.description")}`
    }
  ];

  const cardsData2 = [
    {
      icon: "/icons/CurrencyDollarIcon.svg",
      title: `${t("card2.card1.title")}`,
      description: `${t("card2.card1.description")}`
    },
    {
      icon: "/icons/ArrowTrendingUpIcon.svg",
      title: `${t("card2.card2.title")}`,
      description: `${t("card2.card2.description")}`
    },
    {
      icon: "/icons/DocumentCheckIcon.svg",
      title: `${t("card2.card3.title")}`,
      description: `${t("card2.card3.description")}`
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
          baixarApp
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('ForYou.title')}
          description={t('ForYou.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <CardsSection title={t('JunteSeANos.title')} cards={cardsData} />
      </section>
      <section className='flex flex-col gap-8' >
        <ImageSection
          title={t('ImageSection2.titlePricipal')}
          image={"misao.svg"}
          textSections={section}
        />
      </section>
      <section>
        <ThreeCardsSection
          title={t('card2.title')}
          description={t('card2.description')}
          cards={cardsData2}
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
