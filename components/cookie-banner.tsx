"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Link } from '@/navigation';

const CookieBanner = () => {
  const t = useTranslations('CookieBanner');
  const [accepted, setAccepted] = useState(false);
  const locale = useLocale();


  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  if (accepted) return null;

  return (
    <motion.div
      className="w-[358px] h-[160px] flex flex-col justify-center gap-4 bg-foreground border border-[hsl(var(--secondary-content))] rounded-[8px] px-7 py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className='w-[302px] h-[69px]'>
        <span className='text-[hsl(var(--secondary-content))] font-medium leading-[16.94px] block '>{t("title")}</span>
        <span className='text-primary-foreground leading-[16.94px] block hover:underline cursor-pointer'>
          <Link href={"/politica-de-seguranca"} locale={locale}>
            {t("politica")}
          </Link>
        </span>
      </div>
      <Button onClick={handleAccept} size={'lg'}>
        {t("button")}
      </Button>
    </motion.div>
  );
};
export default CookieBanner;
