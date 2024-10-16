"use client";

import styles from '@/styles/three-cards-section.module.css';
import Card from './card';
import { motion } from 'framer-motion';



interface CardInfo {
  icon: string
  title: string;
  description: string;
}

interface ThreeCardsSectionProps {
  title?: string;
  description?: string;
  cards: CardInfo[];
}

export default function ThreeCardsSection({ cards, title, description }: ThreeCardsSectionProps) {

  return (
    <div className="flex flex-col gap-8">
      {title && (
        <motion.h3
          className="text-primary-foreground text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      )}
      {description && (
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[hsl(var(--secondary-content))] text-center"
        >
          {description}
        </motion.span>
      )}
      <div className="text-center flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, }}
          className={styles.cardsContainer}
        >
          {cards.map((card, index) => (
            <Card
            icon={card.icon}
            key={index}
            title={card.title}
            description={card.description}
            />
          ))}
        </motion.div>
      </div>
  </div>
  );
}
