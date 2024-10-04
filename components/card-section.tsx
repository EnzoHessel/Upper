import Card from './card';

interface CardData {
  Icon: React.ComponentType;
  title: string;
  description: string;
}

interface CardsSectionProps {
  cards: CardData[];
}

export default function CardsSection({ cards }: CardsSectionProps) {
  return (
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
  );
}
