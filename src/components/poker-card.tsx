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

    const sizeClassNameValue = sizeClassName
        ? sizeClassName
        : 'w-[31px] sm:w-[41px] lg:w-[55px] xl:w-[69px] aspect-[0.69]';
    return (
        <Image
            src={cardImage.path}
            width={69}
            height={100}
            alt={cardImage.alt}
            className={`${sizeClassNameValue} ${className}`}
        />
    );
}
