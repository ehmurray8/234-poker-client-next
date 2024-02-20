'use client'

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import PokerCard from './poker-card';

interface Card {
    suit: string;
    rank: string;
}

export default function PlayerInfo({ className, playerName, stackSize, cards }: { className: string, playerName: string, stackSize: number, cards?: Card[] }) {
    const playerCards = cards ? cards : [undefined, undefined];
    function getCardKey(card: Card | undefined, index: number): string {
        if (card) {
            return `${card.rank}-${card.suit}-card`;
        } else {
            return `back-of-card-${index}`;
        }
    }
    return <div className={`${className} rounded-lg flex flex-row pl-4 items-center shadow-black bg-slate-600 xl:h-16 sm:h-12 h-8 xl:text-base sm:text-sm text-xs`}>
        <Avatar className="mr-4 py-2">
            <AvatarImage src="/images/default-user.png" height={40} width={40} className='xl:h-10 sm:h-8 h-6 aspect-square' />
        </Avatar>
        <div className="py-1 mr-4">
            <p>{playerName}</p>
            <p>${stackSize}</p>
        </div>
        {playerCards.map((card, i) => (
            <PokerCard key={getCardKey(card, i)} card={card} />
        ))}
    </div>
}
