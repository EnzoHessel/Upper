"use client";

import Image from 'next/image';
import styles from '@/styles/image-with-text-section.module.css';
import { motion } from 'framer-motion';

type ImageWithTextSectionProps = {
  sectionTitle?: string;
  title: string;
  description: string;
  image: string;
  className?: string;
};

export default function ImageWithTextSection({
  sectionTitle,
  title,
  description,
  image,
}: ImageWithTextSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      {sectionTitle && (
        <h3 className="text-primary-foreground text-center">
          {sectionTitle}
        </h3>
      )}
      <div className={styles.imageWithTextSection}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={`/${image}`}
              alt={title}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.textSection}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
