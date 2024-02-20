'use client';

import Image from 'next/image';

interface Card {
    suit: string;
    rank: string;
}

export default function PokerCard({
    className = '',
    card,
}: {
    className?: string;
    card?: Card;
}) {
    const cardImage = card
        ? {
              path: `/images/card-images/${card.rank.toUpperCase()}_of_${card.suit.toUpperCase()}.png`,
              alt: `Image showing ${card.rank} of ${card.suit} card.`,
          }
        : {
              path: '/images/card-images/back_of_card.png',
              alt: 'Image showing back of card',
          };

    return (
        <Image
            src={cardImage.path}
            width={60}
            height={80}
            alt={cardImage.alt}
            className={`relative h-[45px] w-[33px] sm:h-[60px] sm:w-[45px] xl:h-[100px] xl:w-[75px] ${className}`}
        />
    );
}
