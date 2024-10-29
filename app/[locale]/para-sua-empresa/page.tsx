import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import CardsSection from '@/components/card-section';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageSection from '@/components/image-section';

export default function ParaSuaEmpresa() {
  const t = useTranslations('ParaSuaEmpresa');

  const section = [
    {
      title: t('ImageSection2.title'),
      description: t('ImageSection2.description'),
    },
    {
      title: t('ImageSection2.title2'),
      description: t('ImageSection2.description2'),
    },
    {
      title: t('ImageSection2.title3'),
      description: t('ImageSection2.description3'),
    },
  ];

  const cardsData = [
    {
      icon: '/icons/Square3Stack3DIcon.svg',
      title: `${t('CardExperiência.card1.title')}`,
      description: `${t('CardExperiência.card1.description')}`,
    },
    {
      icon: '/icons/BanknotesIcon.svg',
      title: `${t('CardExperiência.card2.title')}`,
      description: `${t('CardExperiência.card2.description')}`,
    },
    {
      icon: '/icons/CreditCardIcon.svg',
      title: `${t('CardExperiência.card3.title')}`,
      description: `${t('CardExperiência.card3.description')}`,
    },
    {
      icon: '/icons/AdjustmentsHorizontalIcon.svg',
      title: `${t('CardExperiência.card4.title')}`,
      description: `${t('CardExperiência.card4.description')}`,
    },
  ];

  const cardsData2 = [
    {
      icon: '/icons/AdjustmentsHorizontalIcon.svg',
      title: `${t('CardBenefícios.card1.title')}`,
      description: `${t('CardBenefícios.card1.description')}`,
    },
    {
      icon: '/icons/ChartBarIcon.svg',
      title: `${t('CardBenefícios.card2.title')}`,
      description: `${t('CardBenefícios.card2.description')}`,
    },
    {
      icon: '/icons/AcademicCapIcon.svg',
      title: `${t('CardBenefícios.card3.title')}`,
      description: `${t('CardBenefícios.card3.description')}`,
    },
  ];

  const cardsData3 = [
    {
      icon: '/icons/CurrencyDollarIcon.svg',
      title: `${t('CardCursos.card1.title')}`,
      description: `${t('CardCursos.card1.description')}`,
    },
    {
      icon: '/icons/ArrowTrendingUpIcon.svg',
      title: `${t('CardCursos.card2.title')}`,
      description: `${t('CardCursos.card2.description')}`,
    },
    {
      icon: '/icons/DocumentCheckIcon.svg',
      title: `${t('CardCursos.card3.title')}`,
      description: `${t('CardCursos.card3.description')}`,
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
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <ThreeCardsSection
          title={t('CardBenefícios.title')}
          cards={cardsData2}
        />
      </section>
      <section>
        <CardsSection title={t('CardExperiência.title')} cards={cardsData} />
      </section>
      <section className="flex flex-col gap-8">
        <ImageSection
          title={t('ImageSection2.titlePricipal')}
          image={'misao.svg'}
          textSections={section}
        />
      </section>
      <section>
        <ThreeCardsSection
          title={t('CardCursos.title')}
          description={t('CardCursos.description')}
          cards={cardsData3}
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
