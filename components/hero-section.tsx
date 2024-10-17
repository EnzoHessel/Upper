"use client"

import styles from '@/styles/hero-section.module.css';
import { Button } from './ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

type HeroSectionProps = {
  title: string;
  description: string;
  primaryButton: string;
  ghostButton: string;
};

export default function HeroSection({
  title,
  description,
  primaryButton,
  ghostButton,
}: HeroSectionProps) {
  return (
    <>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className={styles.heroSectionContainer}
      >
        <h1 className="text-primary-foreground">{title}</h1>
        <h3 className="text-[hsl(var(--secondary-content))]">
          {/* uso isso pra quebrar a linha (copilot que fez provavelmente vai precisar de manutenção) */}
          {description.split(/(?<=[.!?])\s*/).map((sentence, index) => (
            <React.Fragment key={index}>
              {sentence}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <div className={styles.buttonsContainer}>
          <Button variant={'default'} size={'lg'} className='w-[251px]'>
            {primaryButton}
          </Button>
          <Button variant={'ghost'} size={'lg'} className="w-[251px} px-[38px] flex gap-2 hover:text-background">
            {ghostButton}
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </motion.div>
    </>
  );
}
