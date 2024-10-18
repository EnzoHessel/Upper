'use client';

import styles from '@/styles/main-menu.module.css';
import { Button } from './ui/button';
import Image from 'next/image';
import HamburguerMenu from './hamburguer-menu';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import ModalBaixarApp from './modal-baixarApp';
import { useState } from 'react';

export default function MainMenu() {
  const t = useTranslations('MainMenu');
  const locale = useLocale();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);


  return (
    <nav
      className={styles.mainMenuContainer}
      aria-label="Main Menu"
    >
      <motion.div className={styles.mainMenuContent}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <Link href={`/`} locale={locale} className="relative h-[37px] w-[119px] cursor-pointer" >
          <Image
            src={'/logo-horizontal-upper.svg'}
            alt="Upper logo"
            className="object-cover"
            fill
            quality={100}
            priority
          />
        </Link>
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
              href={`/quite-suas-dividas`}
              locale={locale}
              aria-label={t('QuiteSuasDividas')}
            >
              <span>{t('QuiteSuasDividas')}</span>
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
            onClick={openModal}
          >
            <span>{t('abrirConta')}</span>
          </Button>
        </div>
      </motion.div>
      <div className={styles.hamburguerMenu}>
        <HamburguerMenu />
      </div>
      {isModalOpen && <ModalBaixarApp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </nav>
  );
}
