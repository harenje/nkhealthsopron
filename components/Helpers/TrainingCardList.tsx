import React from "react";
import TrainingCard from "./TrainingCard";

interface CardData {
  title: string;
  content: string;
}

interface CardListProps {
  cardsData: CardData[];
  onCardClick: (card: CardData) => void;
}

const TrainingCardList: React.FC<{
  cardsData: CardData[];
  onCardClick: (card: CardData) => void;
}> = ({ cardsData, onCardClick }) => {
  const handleCardClick = (card: CardData) => {
    onCardClick(card);
  };

  return (
    <div className="flex gap-5">
      {cardsData.map((card, index) => (
        <TrainingCard key={index} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default TrainingCardList;
