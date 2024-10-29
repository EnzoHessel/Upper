'use client';

import styles from '@/styles/Image-with-carrousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

type ImageWithTextSectionProps = {
  title: string;
  description: string;
  images: string[];
};

export default function ImageWithCarrousel({
  title,
  description,
  images,
}: ImageWithTextSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.imageWithTextSection}
    >
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Swiper
            slidesPerView={1.5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              // Configurações para mobile
              320: {
                slidesPerView: 1.5,
                width: 294, // Largura para mobile
              },
              // Configurações para tablet
              640: {
                slidesPerView: 2,
                width: 366, // Largura para tablet
              },
              // Configurações para desktop
              1024: {
                slidesPerView: 2.5,
                width: 456, // Largura para desktop
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[171px] h-[346px]">
                  <Image
                    loading="lazy"
                    src={image}
                    alt="phone"
                    fill
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
}
