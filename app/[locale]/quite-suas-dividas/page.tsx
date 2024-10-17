import HeroSection from '@/components/hero-section';
import ImageWithTextSection from '@/components/image-with-text-section';
import styles from '@/styles/home-page.module.css';
import { useTranslations } from 'next-intl';

export default function SobreUpper() {
  const t = useTranslations('QuiteSuasDividas');

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
          button={t('ImageSection.Button')}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>
        <ImageWithTextSection
          title={t('ImageSection2.title')}
          description={t('ImageSection2.description')}
          image={'bem-vindo-ao-upper-iphones.png'}
          button={t('ImageSection2.Button')}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
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
  )
}