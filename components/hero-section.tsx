import styles from '@/styles/hero-section.module.css';
import { Button } from './ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type HeroSectionProps = {
  title: string;
  description: string;
  primaryButton: string;
  ghostButton: string;
};

export default function HeroSection({
  title,
  description,
  primaryButton,
  ghostButton,
}: HeroSectionProps) {
  return (
    <>
      <div className={styles.heroSectionContainer}>
        <h1 className="text-primary-foreground">{title}</h1>
        <h3 className="text-[hsl(var(--secondary-content))]">{description}</h3>
        <div className={styles.buttonsContainer}>
          <Button variant={'default'} size={'lg'} >
            {primaryButton}
          </Button>
          <Button variant={'ghost'} size={'lg'} className="flex gap-2 hover:text-background">
            {ghostButton}
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </div>
    </>
  );
}
