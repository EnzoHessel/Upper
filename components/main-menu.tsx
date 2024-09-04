import styles from '@/styles/main-menu.module.css';
import { Button } from './ui/button';
import Image from 'next/image';
import HamburguerMenu from './hamburguer-menu';
import { useTranslations } from 'next-intl';

export default function MainMenu() {
  const t = useTranslations('MainMenu');

  return (
    <div className={styles.mainMenuContainer}>
      <div className={styles.mainMenuContent}>
        <Image
          src={'logo-horizontal-upper.svg'}
          alt="logo"
          width={119}
          height={100}
        />
        <div className={styles.buttonsContainer}>
          <Button variant={'link'} className="p-0">
            <span>{t('temNoUpper')}</span>
          </Button>
          <Button variant={'link'} className="p-0">
            <span>{t('educacaoFinanceira')}</span>
          </Button>
          <Button variant={'link'} className="p-0">
            <span>{t('ajuda')}</span>
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
