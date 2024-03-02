'use client';

import Image from 'next/image';

interface Card {
    suit: string;
    rank: string;
}

export default function PokerCard({
    className = '',
    card,
    sizeClassName,
}: {
    className?: string;
    card?: Card;
    sizeClassName?: string;
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

    const sizeClassNameValue = sizeClassName ? sizeClassName : 'h-[45px] w-[33px] sm:h-[60px] sm:w-[45px] lg:h-[80px] lg:w-[60px] xl:h-[100px] lg:w-[75px]';
    return (
        <Image
            src={cardImage.path}
            width={60}
            height={80}
            alt={cardImage.alt}
            className={`${sizeClassNameValue} ${className}`}
        />
    );
}
