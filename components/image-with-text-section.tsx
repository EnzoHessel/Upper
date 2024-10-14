import Image from 'next/image';
import styles from '@/styles/image-with-text-section.module.css';

type ImageWithTextSectionProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

export default function ImageWithTextSection({
  title,
  description,
  image,
}: ImageWithTextSectionProps) {
  return (
    <div className={styles.imageWithTextSection}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src={`/${image}`}
            alt={title}
            fill
            className="object-fill"
          />
        </div>
      </div>
      <div className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
