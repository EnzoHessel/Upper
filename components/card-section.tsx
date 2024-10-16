"use client";

import Card from './card';
import { motion } from 'framer-motion';


interface CardData {
  icon: string;
  title: string;
  description: string;
}

interface CardsSectionProps {
  title?: string;
  cards: CardData[];
}

export default function CardsSection({ cards, title }: CardsSectionProps) {

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
      <div className="text-center flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
