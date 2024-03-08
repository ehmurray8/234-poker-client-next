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
                className={`absolute -top-2 xl:top-0 ${styles.animation} -left-[7.4rem] xl:-left-[7.15rem]`}
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

export default function PlayerInfo({
    className,
    playerName,
    stackSize,
    cards,
    isActing = false,
    timeLeftInSeconds = undefined,
    numCards,
}: {
    className: string;
    playerName: string;
    stackSize: number;
    cards?: Card[];
    isActing?: boolean;
    timeLeftInSeconds?: number;
    numCards: number;
}) {
    const playerCards = cards
        ? cards
        : Array.apply(null, Array(numCards)).map((_) => undefined);
    function getCardKey(card: Card | undefined, index: number): string {
        if (card) {
            return `${card.rank}-${card.suit}-card`;
        } else {
            return `back-of-card-${index}`;
        }
    }

    const cardClassesByIndex = [
        'absolute sm:-top-2 -top-4 sm:right-[13%] right-[9%] -z-40',
        'absolute sm:-top-2 -top-4 sm:right-[9%] right-[3%] -z-30',
        'absolute sm:-top-2 -top-4 sm:right-[5%] -right-[1%] -z-20',
        'absolute sm:-top-2 -top-4 sm:right-[1%] -right-[5%] -z-10',
    ];

    return (
        <div
            className={`${className} absolute flex h-12 w-[39%] max-w-xs rounded-lg bg-slate-500 pl-4 text-xs shadow-black dark:bg-slate-600 dark:text-slate-200 md:w-[39%] lg:w-[28%] xl:h-16 xl:text-base`}
        >
            <Avatar className='absolute top-2 h-8 w-8 xl:top-3 xl:h-10 xl:w-10'>
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

            <div className='relative left-4 top-1 mx-6 py-1 md:left-8 lg:left-4 xl:left-8'>
                <p>{playerName}</p>
                <p>${stackSize}</p>
            </div>
            {playerCards.map((card, i) => (
                <PokerCard
                    key={getCardKey(card, i)}
                    card={card}
                    className={cardClassesByIndex[i]}
                    sizeClassName='md:h-[80px] md:w-[60px] h-[64px] w-[48px]'
                />
            ))}
        </div>
    );
}
