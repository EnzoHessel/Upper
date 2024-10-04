import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import ThreeCardsSection from '@/components/three-cards-section';

export default function forYou() {
  const t = useTranslations('ForYouPage');

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
        <ThreeCardsSection />
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
