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

export default function TemNoUpper() {
  const t = useTranslations('TemNoUpper');

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
          image={'bem-vindo-ao-upper-iphones.png'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      {/* TODO fazer o componente Serviços de Investimentos */}
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('card2.title')}
          </h3>
          <span className="text-[hsl(var(--secondary-content))] text-center">{t('card2.description')}</span>
          <ThreeCardsSection cards={cardsData}/>
        </div>
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
