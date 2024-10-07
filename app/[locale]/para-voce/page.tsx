import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import CardsSection from '@/components/card-section';
import {
  AdjustmentsHorizontalIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import ThreeCardsSection from '@/components/three-cards-section';

export default function forYou() {
  const t = useTranslations('ForYouPage');

  const cardsData = [
    {
      Icon: Square3Stack3DIcon,
      title: `${t("card.card1.title")}`,
      description: `${t("card.card1.description")}`
    },
    {
      Icon: BanknotesIcon,
      title: `${t("card.card2.title")}`,
      description: `${t("card.card2.description")}`
    },
    {
      Icon: CreditCardIcon,
      title: `${t("card.card3.title")}`,
      description: `${t("card.card3.description")}`
    },
    {
      Icon: AdjustmentsHorizontalIcon,
      title: `${t("card.card4.title")}`,
      description: `${t("card.card4.description")}`
    }
  ];

  const cardsData2 = [
    {
      Icon: CurrencyDollarIcon,
      title: `${t("card2.card1.title")}`,
      description: `${t("card2.card1.description")}`
    },
    {
      Icon: ArrowTrendingUpIcon,
      title: `${t("card2.card2.title")}`,
      description: `${t("card2.card2.description")}`
    },
    {
      Icon: DocumentCheckIcon,
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
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('JunteSeANos.title')}
          </h3>
          <CardsSection cards={cardsData} />
        </div>
      </section>
      {/* TODO fazer o componente Serviços de Investimentos */}
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('card2.title')}
          </h3>
          <span className="text-[hsl(var(--secondary-content))] text-center">{t('card2.description')}</span>
          <ThreeCardsSection cards={cardsData2}/>
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
