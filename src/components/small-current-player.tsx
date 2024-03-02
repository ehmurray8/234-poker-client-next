'use client';

import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import PokerCard from './poker-card';
import styles from './css/player-info.module.css';

interface Card {
    suit: string;
    rank: string;
}

function Spinner({
    isActing,
    timeLeftInSeconds,
}: {
    isActing: boolean;
    timeLeftInSeconds: number;
}) {
    if (isActing) {
        const animationStyle = {
            '--animation-length': `${timeLeftInSeconds}s`,
        };
        return (
            <svg
                style={animationStyle as any}
                className={`absolute top-0 ${styles.animation} -left-[7.15rem]`}
                fill='none'
                strokeWidth={6}
            >
                <defs>
                    <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='0%'
                    >
                        <stop offset='0%' stopColor='#05a' />
                        <stop offset='100%' stopColor='#0a5' />
                    </linearGradient>
                </defs>
                <circle
                    r='24'
                    cx='50%'
                    cy='32'
                    stroke='url(#gradient)'
                    strokeDashoffset={150}
                    strokeDasharray={150}
                ></circle>
            </svg>
        );
    } else {
        return <> </>;
    }
}

export default function SmallCurrentPlayer({
    className,
    playerName,
    stackSize,
    cards,
    isActing = false,
    timeLeftInSeconds = undefined,
}: {
    className: string;
    playerName: string;
    stackSize: number;
    cards?: Card[];
    isActing?: boolean;
    timeLeftInSeconds?: number;
}) {
    const playerCards = cards ? cards : [undefined, undefined];
    function getCardKey(card: Card | undefined, index: number): string {
        if (card) {
            return `${card.rank}-${card.suit}-card`;
        } else {
            return `back-of-card-${index}`;
        }
    }

    const cardClassesByIndex = [
        'absolute -top-2 right-[13%]',
        'absolute -top-2 right-[9%] z-10',
        'absolute -top-2 right-[5%] z-20',
        'absolute -top-2 right-[1%] z-30',
    ];

    return (
        <div
            className={`${className} absolute rounded-lg bg-slate-500 pl-4 shadow-black dark:bg-slate-600 dark:text-slate-200 h-16 text-base`}
        >
            <Avatar className='w-10 h-10 top-3 absolute'>
                <AvatarImage
                    src='/images/default-user.png'
                    height={40}
                    width={40}
                    className='relative aspect-square'
                />
            </Avatar>
            <Spinner
                timeLeftInSeconds={timeLeftInSeconds || 0}
                isActing={isActing}
            />

            <div className='relative mx-6 py-1 top-1 left-10'>
                <p>{playerName}</p>
                <p>${stackSize}</p>
            </div>
            {playerCards.map((card, i) => (
                <PokerCard
                    key={getCardKey(card, i)}
                    card={card}
                    className={cardClassesByIndex[i]}
                    sizeClassName={'md:h-[100px] md:w-[75px] h-20 w-[60px]'}
                />
            ))}
        </div>
    );
}
