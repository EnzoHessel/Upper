import styles from '@/styles/three-cards-section.module.css';
import Card from './card';
import { useTranslations } from 'next-intl';


interface CardInfo {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface ThreeCardsSectionProps {
  cards: CardInfo[];
}

export default function ThreeCardsSection({ cards }: ThreeCardsSectionProps) {
  const t = useTranslations('HomePage.UmaExperienciaTransparente');

  return (
    <>
      <div className="text-center flex flex-col gap-8">
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <Card
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
