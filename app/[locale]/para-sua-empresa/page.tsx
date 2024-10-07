import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import CardsSection from '@/components/card-section';
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ChartBarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import ThreeCardsSection from '@/components/three-cards-section';

export default function ParaSuaEmpresa() {
  const t = useTranslations('ParaSuaEmpresa');

  const cardsData = [
    {
      Icon: Square3Stack3DIcon,
      title: `${t("CardExperiência.card1.title")}`,
      description: `${t("CardExperiência.card1.description")}`
    },
    {
      Icon: BanknotesIcon,
      title: `${t("CardExperiência.card2.title")}`,
      description: `${t("CardExperiência.card2.description")}`
    },
    {
      Icon: CreditCardIcon,
      title: `${t("CardExperiência.card3.title")}`,
      description: `${t("CardExperiência.card3.description")}`
    },
    {
      Icon: AdjustmentsHorizontalIcon,
      title: `${t("CardExperiência.card4.title")}`,
      description: `${t("CardExperiência.card4.description")}`
    }
  ];

  const cardsData2 = [
    {
      Icon: AdjustmentsHorizontalIcon,
      title: `${t("CardBenefícios.card1.title")}`,
      description: `${t("CardBenefícios.card1.description")}`
    },
    {
      Icon: ChartBarIcon,
      title: `${t("CardBenefícios.card2.title")}`,
      description: `${t("CardBenefícios.card2.description")}`
    },
    {
      Icon: AcademicCapIcon,
      title: `${t("CardBenefícios.card3.title")}`,
      description: `${t("CardBenefícios.card3.description")}`
    },
  ];

  const cardsData3 = [
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
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('CardBenefícios.title')}
          </h3>
          <ThreeCardsSection cards={cardsData2}/>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('CardExperiência.title')}
          </h3>
          <CardsSection cards={cardsData} />
        </div>
      </section>
        {/* TODO fazer o componente Serviços de Investimentos */}
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('CardCursos.title')}
          </h3>
          <span className="text-[hsl(var(--secondary-content))] text-center">{t('CardCursos.description')}</span>
          <ThreeCardsSection cards={cardsData3}/>
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
