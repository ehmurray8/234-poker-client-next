import ActionContainer from '@/components/action-container';
import Chips from '@/components/chips';
import DealerButton from '@/components/dealer-button';
import PlayerInfo from '@/components/player-info';
import PokerCard from '@/components/poker-card';
import SmallCurrentPlayer from '@/components/small-current-player';

export default function Game() {
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
    //  * 741px and lower has issues with player-info
    //  * Dealer button is misplaced on small screens
    //  * Horizontal is broken on mobile

    // Day2
    // TODO: Raise winning cards

    const dealerSeatIndex = 0;

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
            <div className='absolute left-1/2 top-20 aspect-[5/2] w-[150vmin] max-w-[75%] -translate-x-1/2 rounded-[50%] bg-emerald-600 dark:bg-cyan-600 sm:top-28 md:max-w-[80%]'>
                <PlayerInfo
                    className='-left-14 bottom-0 xl:bottom-[10%] xl:left-0'
                    playerName='XXX-XXX-XXX0'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='-left-14 top-0 xl:left-0 xl:top-0'
                    playerName='XXX-XXX-XXX1'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='-top-[25%] left-1/2 -translate-x-1/2 md:-top-[15%] xl:-top-[10%]'
                    playerName='XXX-XXX-XXX2'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='-right-14 top-0 xl:right-0 xl:top-0'
                    playerName='XXX-XXX-XXX3'
                    stackSize={1000}
                    numCards={playerCards.length}
                />
                <PlayerInfo
                    className='-right-14 bottom-0 xl:bottom-[10%] xl:right-0'
                    playerName='XXX-XXX-XXX4'
                    stackSize={1000}
                    numCards={playerCards.length}
                />

                <PlayerInfo
                    className='-bottom-14 left-1/2 hidden -translate-x-1/2 md:flex xl:-bottom-10'
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
                    className='absolute bottom-[25%] left-[18%] text-sm sm:text-base md:bottom-[20%] xl:bottom-[26%] xl:left-[26%] xl:text-lg'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute left-[18%] top-[30%] text-sm sm:text-base md:top-[28%] xl:left-[26%] xl:top-[26%] xl:text-lg'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute left-1/2 top-[6%] text-sm sm:text-base xl:top-[14%] xl:text-lg'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute right-[18%] top-[30%] text-sm sm:text-base md:top-[28%] xl:right-[26%] xl:top-[26%] xl:text-lg'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute bottom-[25%] right-[18%] text-sm sm:text-base md:bottom-[20%] xl:bottom-[26%] xl:right-[26%] xl:text-lg'
                />
                <Chips
                    amount={10}
                    size='sm'
                    className='absolute bottom-0 left-1/2 text-sm sm:text-base xl:bottom-[14%] xl:text-lg'
                />

                <DealerButton
                    className={dealerPositionBySeat[dealerSeatIndex]}
                />

                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-1 text-base sm:text-xl md:text-2xl'>
                    234Poker
                </div>
                <div className='absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 text-xl md:block'>
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
                    className='absolute left-1/2 top-1/2 z-10 mb-1 block -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base md:hidden md:text-lg'
                />
            </div>
            <div className='absolute bottom-[38%] flex w-full flex-row justify-center gap-3 md:hidden'>
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
                className='absolute bottom-[25%] left-[50%] flex w-[80%] -translate-x-1/2 md:hidden'
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
