'use client';

import ImageWithTextSection from '@/components/image-with-text-section';
import styles from '@/styles/home-page.module.css';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  description: string;
  items?: string[];
}

const Section = ({ title, description, items }: SectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col text-left">
      <h2 className="text-primary-foreground pb-2">{title}</h2>
      <span className="text-[hsl(var(--secondary-content))]">
        {description}
      </span>
      {items && (
        <ul className="list-none text-sm text-[hsl(var(--secondary-content))]">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-1">• </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.section>
);

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
      <Section
        title={t('Section1.title')}
        description={t('Section1.description')}
      />
      <Section
        title={t('Section2.title')}
        description={t('Section2.description')}
        items={[
          t('Section2.item2'),
          t('Section2.item3'),
          t('Section2.item4'),
          t('Section2.item4'),
        ]}
      />
      <Section
        title={t('Section3.title')}
        description={t('Section3.description')}
        items={[
          t('Section3.item2'),
          t('Section3.item3'),
          t('Section3.item4'),
          t('Section3.item4'),
        ]}
      />
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col text-left">
          <h2 className="text-primary-foreground pb-2">
            {t('Section4.title')}
          </h2>
          <span className="text-[hsl(var(--secondary-content))]">
            {t('Section4.description')}
          </span>
          <span className="text-[hsl(var(--secondary-content))]">
            {t('Section4.description2')}
          </span>
        </div>
      </motion.section>
    </div>
  );
}
