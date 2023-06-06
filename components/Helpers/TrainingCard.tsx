import React from "react";

interface CardData {
  title: string;
  content: string;
}

interface CardProps {
  card: CardData;
  onClick: (card: CardData) => void;
}

const TrainingCard: React.FC<CardProps> = ({ card, onClick }) => {
  const handleClick = () => {
    onClick(card);
  };
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-xl font-bold">{card.title}</h2>
      <p className="text-gray-600">{card.content}</p>
      <button
        className="mt-4 rounded bg-nk-black py-2 px-4 font-bold text-white hover:bg-nk-white"
        onClick={handleClick}
      >
        Action
      </button>
    </div>
  );
};

export default TrainingCard;
