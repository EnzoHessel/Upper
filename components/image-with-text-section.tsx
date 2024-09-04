import styles from '@/styles/image-with-text-section.module.css';
import Image from 'next/image';

type ImageWithTextSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function ImageWithTextSection({
  title,
  description,
  image,
}: ImageWithTextSectionProps) {
  return (
    <>
      <div className={styles.imageWithTextContainer}>
        <div className={styles.cardImage}>
          <div className="relative h-full w-full">
            <Image
              fill
              objectFit={'cover'}
              src={image}
              alt={title}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.cardText}>
          <h2 className="text-primary-foreground">{title}</h2>
          <span className="text-[hsl(var(--secondary-content))]">
            {description}
          </span>
        </div>
      </div>
    </>
  );
}
