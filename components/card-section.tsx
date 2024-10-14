import Card from './card';

interface CardData {
  Icon: React.ComponentType;
  title: string;
  description: string;
}

interface CardsSectionProps {
  title?: string;
  cards: CardData[];
}

export default function CardsSection({ cards, title }: CardsSectionProps) {
  return (
    <div className="flex flex-col gap-8">
       {title && (
        <h3 className="text-primary-foreground text-center">
          t('card.title')
        </h3>
       )}
      <div className="text-center flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
  </div>
  );
}
