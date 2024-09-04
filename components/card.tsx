import styles from '@/styles/card.module.css';
import { ComponentType } from 'react';

type CardProps = {
  title: string;
  description: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Card({ title, description, Icon }: CardProps) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Icon className="w-14 h-14 stroke-[0.5] text-primary-foreground" />
        </div>
        <div className="text-left w-full h-full flex flex-col gap-2">
          <h6 className="text-primary-foreground">{title}</h6>
          <span className="text-[hsl(var(--secondary-content))]">
            {description}
          </span>
        </div>
      </div>
    </>
  );
}
