import ImageWithTextSection from '@/components/image-with-text-section';
import styles from '@/styles/home-page.module.css';
import { useTranslations } from 'next-intl';

export default function PoliticaDeSeguranca() {
  const t = useTranslations('PoliticaSegurança');

  return (
    <div className={styles.homePageContainer}>
      <section>
        <ImageWithTextSection
          title={t('ImageSection.title')}
          description={t('ImageSection.description')}
          image={'segurança.svg'}
          className="w-[250px] md:w-[280px] lg:w-[336px]"
        />
      </section>
      <section>

      </section>
    </div>
  )
}
