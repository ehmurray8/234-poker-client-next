import ActionContainer from '@/components/action-container';
import Chips from '@/components/chips';
import DealerButton from '@/components/dealer-button';
import PlayerInfo from '@/components/player-info';
import PokerCard from '@/components/poker-card';
import SmallCurrentPlayer from '@/components/small-current-player';

export default function Home() {
    const playerCards = [
        {
            rank: 'ace',
            suit: 'clubs',
        },
        {
            rank: 'ace',
            suit: 'spades',
        },
        {
            rank: 'king',
            suit: 'clubs',
        },
        {
            rank: 'king',
            suit: 'spades',
        },
    ];

    const communityCards = [
        {
            rank: 'ace',
            suit: 'hearts',
        },
        {
            rank: 'two',
            suit: 'spades',
        },
        {
            rank: 'three',
            suit: 'spades',
        },
        {
            rank: 'seven',
            suit: 'diamonds',
        },
        {
            rank: 'eight',
            suit: 'clubs',
        },
    ];

    const potAmount = 75;

    const isSelectingGame = false;
    const bettingState = isSelectingGame
        ? undefined
        : {
            amountToCall: 100,
            minRaiseAmount: 200,
            maxRaiseAmount: 1000,
            stepSize: 50,
        };

    // QOL
    // TODO: Fix sizing issues
    // TODO: 741px and lower has issues with player-info

    // Day2
    // TODO: Raise winning cards

    const dealerSeatIndex = 5;

    const dealerPositionBySeat = [
        'absolute md:bottom-[30%] md:left-[14%] bottom-[20%] left-[10%]',
        'absolute md:top-[24%] md:left-[14%] top-[20%] left-[10%]',
        'absolute top-[12%] left-[60%]',
        'absolute md:top-[24%] md:right-[14%] top-[20%] right-[10%]',
        'absolute md:bottom-[30%] md:right-[14%] bottom-[20%] right-[10%]',
        'absolute md:bottom-[12%] bottom-[5%] left-[40%]',
    ];
    return (
        <main className='h-[100dvh] w-[100dvw]'>
            <div className='absolute left-1/2 top-24 -translate-x-1/2 rounded-[50%] bg-emerald-600 dark:bg-cyan-600 md:w-[80%] w-3/4 aspect-[5/2]'>

                <PlayerInfo
                    className='flex xl:bottom-[10%] bottom-0 xl:left-0 -left-14'
                    playerName='XXX-XXX-XXX0'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='flex xl:top-0 top-0 xl:left-0 -left-14'
                    playerName='XXX-XXX-XXX1'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='flex xl:-top-[10%] md:-top-[15%] -top-[25%] left-1/2 -translate-x-1/2'
                    playerName='XXX-XXX-XXX2'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='flex xl:top-0 top-0 xl:right-0 -right-14'
                    playerName='XXX-XXX-XXX3'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='flex xl:bottom-[10%] bottom-0 xl:right-0 -right-14'
                    playerName='XXX-XXX-XXX4'
                    stackSize={1000}
                    numCards={playerCards.length}
                />

                <PlayerInfo
                    className='md:flex hidden xl:-bottom-10 -bottom-14 left-1/2 -translate-x-1/2'
                    playerName='XXX-XXX-XXX5'
                    stackSize={1000}
                    cards={playerCards}
                    isActing={true}
                    timeLeftInSeconds={30}
                    numCards={playerCards.length}
                />


                <Chips
                    amount={10}
                    size='sm'
                    className='absolute xl:bottom-[26%] xl:left-[26%] md:bottom-[20%] bottom-[25%] left-[18%] xl:text-lg sm:text-base text-sm'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute xl:left-[26%] xl:top-[26%] md:top-[28%] left-[18%] top-[30%] xl:text-lg sm:text-base text-sm'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute left-1/2 xl:top-[14%] top-[6%] xl:text-lg sm:text-base text-sm'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute xl:right-[26%] xl:top-[26%] md:top-[28%] right-[18%] top-[30%] xl:text-lg sm:text-base text-sm'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute xl:bottom-[26%] xl:right-[26%] md:bottom-[20%] bottom-[25%] right-[18%] xl:text-lg sm:text-base text-sm'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute xl:bottom-[14%] bottom-0 left-1/2 xl:text-lg sm:text-base text-sm'
                />

                <DealerButton
                    className={dealerPositionBySeat[dealerSeatIndex]}
                />

                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-1 md:text-2xl sm:text-xl text-base'>
                    234Poker
                </div>
                <div className='absolute md:block hidden left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-xl'>
                    <Chips
                        amount={potAmount}
                        size='lg'
                        className='relative mb-1 text-xl'
                    />
                    <div className='flex flex-row gap-4'>
                        {communityCards.map((card) => (
                            <PokerCard
                                key={`${card.rank}-${card.suit}-community-card`}
                                card={card}
                                className='relative'
                            />
                        ))}
                    </div>
                </div>
                <Chips
                    amount={potAmount}
                    size='lg'
                    className='absolute block md:hidden left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 mb-1 md:text-lg sm:text-base text-sm'
                />
            </div>
            <div className='absolute sm:bottom-[40%] bottom-1/2 w-full md:hidden flex flex-row gap-3 justify-center'>
                {communityCards.map((card) => (
                    <PokerCard
                        key={`${card.rank}-${card.suit}-community-card`}
                        card={card}
                        sizeClassName='md:h-[100px] md:w-[75px] h-20 w-[60px]'
                        className='relative'
                    />
                ))}
            </div>
            <SmallCurrentPlayer
                className='flex md:hidden absolute sm:bottom-[25%] bottom-[35%] left-[50%] -translate-x-1/2 w-[80%]'
                playerName='XXX-XXX-XXX5'
                stackSize={1000}
                cards={playerCards}
                isActing={true}
                timeLeftInSeconds={30}
            />
            <ActionContainer
                isSelectingGame={isSelectingGame}
                bettingState={bettingState}
            />
        </main>
    );
}
