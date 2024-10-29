import styles from '@/styles/card.module.css';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          width={56}
          height={56}
          alt={title}
          src={icon}
          loading="lazy"
          className="stroke-[0.5] text-primary-foreground"
        />
      </div>
      <div className="text-left w-full h-full flex flex-col gap-2">
        <h6 className="text-primary-foreground">{title}</h6>
        <span className="text-[hsl(var(--secondary-content))]">
          {description}
        </span>
      </div>
    </div>
  );
}
