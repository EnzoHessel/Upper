'use client';

import styles from '@/styles/main-menu.module.css';
import { Button } from './ui/button';
import Image from 'next/image';
import HamburguerMenu from './hamburguer-menu';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';

export default function MainMenu() {
  const t = useTranslations('MainMenu');
  const locale = useLocale();

  return (
    <nav
      className={styles.mainMenuContainer}
      aria-label="Main Menu"
    >
      <motion.div className={styles.mainMenuContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
      >
        <motion.button
          className="relative h-[37px] w-[119px] cursor-pointer"
          onClick={() => (window.location.href = `/${locale}`)}
          aria-label="Home"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={'/logo-horizontal-upper.svg'}
            alt="Upper logo"
            className="object-cover"
            fill
            quality={100}
            priority
          />
        </motion.button>
        <div className={styles.buttonsContainer}>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/tem-no-upper`}
              locale={locale}
              aria-label={t('temNoUpper')}
            >
              <span>{t('temNoUpper')}</span>
            </Link>
          </Button>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/educacao-financeira`}
              locale={locale}
              aria-label={t('educacaoFinanceira')}
            >
              <span>{t('educacaoFinanceira')}</span>
            </Link>
          </Button>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/ajuda`}
              locale={locale}
              aria-label={t('ajuda')}
            >
              <span>{t('ajuda')}</span>
            </Link>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button
            variant={'default'}
            size={'lg'}
            className={styles.buttonAbrirConta}
            aria-label={t('abrirConta')}
          >
            <span>{t('abrirConta')}</span>
          </Button>
          <div className={styles.hamburguerMenu}>
            <HamburguerMenu />
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
