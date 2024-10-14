import Image from 'next/image';
import styles from '@/styles/image-section.module.css';

type TextSection = {
  title: string;
  description: string;
};

type ImageWithTextSectionProps = {
  image: string;
  textSections: TextSection[];
  className?: string;
};

export default function ({
  image,
  textSections,
}: ImageWithTextSectionProps) {
  return (
    <div className={styles.imageWithTextSection}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src={`/${image}`}
            alt="Image"
            layout="fill"
            className="object-contain"
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
  );
}
