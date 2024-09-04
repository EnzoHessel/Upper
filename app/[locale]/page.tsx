import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import { useTranslations } from 'next-intl';
import styles from '@/styles/home-page.module.css';
import ThreeCardsSection from '@/components/three-cards-section';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className={styles.homePageContainer}>
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
          image={'bem-vindo-ao-upper.svg'}
        />
      </section>
      <section>
        <ThreeCardsSection />
      </section>
      <section>
        <div className="flex flex-col gap-8">
          <h3 className="text-primary-foreground text-center">
            {t('JunteSeANos.title')}
          </h3>
          <ImageWithTextSection
            title={t('JunteSeANos.card.title')}
            description={t('JunteSeANos.card.description')}
            image={'junte-se-a-nos.svg'}
          />
        </div>
      </section>
    </main>
  );
}
