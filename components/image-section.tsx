"use client";

import Image from 'next/image';
import styles from '@/styles/image-section.module.css';
import { motion } from 'framer-motion';


type TextSection = {
  title: string;
  description: string;
};

type ImageWithTextSectionProps = {
  title: string
  image: string;
  textSections: TextSection[];
  className?: string;
};

export default function ({
  image,
  textSections,
  title
}: ImageWithTextSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-8'
    >
       {title && (
        <h3 className="text-primary-foreground text-center">
          {title}
        </h3>
       )}
        <div className={styles.imageWithTextSection}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src={`/${image}`}
                alt="Image"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.textSection}>
            {textSections.map((section, index) => (
              <div key={index} className={styles.textBlock}>
                <h5 className={styles.title}>{section.title}</h5>
                <span className={styles.description}>{section.description}</span>
              </div>
            ))}
          </div>
        </div>
    </motion.div>
  );
}
