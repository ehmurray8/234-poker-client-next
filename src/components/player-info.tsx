'use client';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import PokerCard from './poker-card';

interface Card {
    suit: string;
    rank: string;
}

export default function PlayerInfo({
    className,
    playerName,
    stackSize,
    cards,
}: {
    className: string;
    playerName: string;
    stackSize: number;
    cards?: Card[];
}) {
    const playerCards = cards ? cards : [undefined, undefined];
    function getCardKey(card: Card | undefined, index: number): string {
        if (card) {
            return `${card.rank}-${card.suit}-card`;
        } else {
            return `back-of-card-${index}`;
        }
    }
    return (
        <div
            className={`${className} flex h-8 flex-row items-center rounded-lg bg-slate-600 pl-4 text-xs shadow-black sm:h-12 sm:text-sm xl:h-16 xl:text-base`}
        >
            <Avatar className='mr-4 py-2'>
                <AvatarImage
                    src='/images/default-user.png'
                    height={40}
                    width={40}
                    className='aspect-square h-6 sm:h-8 xl:h-10'
                />
            </Avatar>
            <div className='mr-4 py-1'>
                <p>{playerName}</p>
                <p>${stackSize}</p>
            </div>
            {playerCards.map((card, i) => (
                <PokerCard key={getCardKey(card, i)} card={card} />
            ))}
        </div>
    );
}
