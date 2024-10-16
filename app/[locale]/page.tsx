import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import ThreeCardsSection from '@/components/three-cards-section';
import ImageWithCarrousel from '@/components/Image-with-carrousel';

export default function Home() {
  const t = useTranslations('HomePage');

  const cardsData = [
    {
      icon: "/icons/BuildingLibraryIcon.svg",
      title: `${t("UmaExperienciaTransparente.card1.title")}`,
      description: `${t("UmaExperienciaTransparente.card1.description")}`
    },
    {
      icon: "/icons/ChartBarIcon.svg",
      title: `${t("UmaExperienciaTransparente.card2.title")}`,
      description: `${t("UmaExperienciaTransparente.card2.description")}`
    },
    {
      icon: "/icons/CurrencyDollarIcon.svg",
      title: `${t("UmaExperienciaTransparente.card3.title")}`,
      description: `${t("UmaExperienciaTransparente.card3.description")}`
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
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('BemVindoAoUpper.title')}
          description={t('BemVindoAoUpper.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <ThreeCardsSection
          title={t('UmaExperienciaTransparente.title')}
          cards={cardsData}
        />
      </section>
      <section>
        <ImageWithCarrousel
          title={t('Solucoes.card.title')}
          description={t('Solucoes.card.description')}
          images={[
            '/Carrousel/phone.svg',
            '/Carrousel/phone-1.svg',
            '/Carrousel/phone-2.svg',
            '/Carrousel/phone-3.svg',
            '/Carrousel/phone-4.svg',
            '/Carrousel/phone-5.svg',
            '/Carrousel/phone-6.svg',
            '/Carrousel/phone-7.svg'
          ]}
        />
      </section>
      <section>
        <ImageWithTextSection
          sectionTitle={t('JunteSeANos.title')}
          title={t('JunteSeANos.card.title')}
          description={t('JunteSeANos.card.description')}
          image={'junte-se-a-nos.svg'}
        />
      </section>
    </div>
  );
}
