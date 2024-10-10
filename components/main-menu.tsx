'use client';

import styles from '@/styles/main-menu.module.css';
import { Button } from './ui/button';
import Image from 'next/image';
import HamburguerMenu from './hamburguer-menu';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function MainMenu() {
  const t = useTranslations('MainMenu');
  const locale = useLocale();

  return (
    <div className={styles.mainMenuContainer}>
      <div className={styles.mainMenuContent}>
        <div
          className="relative h-[37px] w-[119px] cursor-pointer"
          onClick={() => (window.location.href = `/${locale}`)}
        >
          <Image
            objectFit={'cover'}
            src={'/logo-horizontal-upper.svg'}
            alt="logo"
            fill
            quality={100}
            priority
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/tem-no-upper`} 
              locale={locale}
            >
              <span>{t('temNoUpper')}</span>
            </Link>
          </Button>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/educacao-financeira`}
              locale={locale}
            >
              <span>{t('educacaoFinanceira')}</span>
            </Link>
          </Button>
          <Button variant={'link'} className="p-0 uppercase">
            <Link
              href={`/ajuda`}
              locale={locale}
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
          >
            <span>{t('abrirConta')}</span>
          </Button>
          <div className={styles.hamburguerMenu}>
            <HamburguerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
