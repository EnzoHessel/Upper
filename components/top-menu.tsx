"use client"

import styles from '@/styles/top-menu.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';


export default function TopMenu() {
  const t = useTranslations('TopMenu');
  const locale = useLocale();
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className={styles.topMenuContainer}>
      <motion.div
        className={styles.topMenuContent}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        transition={{ duration: 0.5 }}
      >
        <Button variant={'link'} className="p-0 uppercase">
          <Link href={'/para-voce'} locale={locale}>
            <span>{t('paraVoce')}</span>
          </Link>
        </Button>
        <Button variant={'link'} className="p-0 uppercase">
          <Link href={'/para-sua-empresa'} locale={locale}>
            <span>{t('paraSuaEmpresa')}</span>
          </Link>
        </Button>
      </motion.div>
    </nav>
  );
}
