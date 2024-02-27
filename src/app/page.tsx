import ActionContainer from '@/components/action-container';
import Chips from '@/components/chips';
import DealerButton from '@/components/dealer-button';
import PlayerInfo from '@/components/player-info';
import PokerCard from '@/components/poker-card';

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
    const dealerSeatIndex = 5;

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
    // Fix sizing issues

    const dealerPositionBySeat = [
        'absolute bottom-[30%] left-[14%]',
        'absolute top-[24%] left-[14%]',
        'absolute top-[12%] left-[60%]',
        'absolute top-[24%] right-[14%]',
        'absolute bottom-[30%] right-[14%]',
        'absolute bottom-[12%] left-[40%]',
    ];
    return (
        <main className='h-[100dvh] w-[100dvw]'>
            <div className='absolute left-1/2 top-24 h-[30%] w-[40%] -translate-x-1/2 rounded-[50%] bg-emerald-600 dark:bg-cyan-600 short:h-[60%] short:w-[80%] portrait:h-[20%]'>
                <PlayerInfo
                    className='absolute bottom-[10%]'
                    playerName='Player 1'
                    stackSize={1000}
                />
                <PlayerInfo
                    className='top-1/5 absolute'
                    playerName='Player 2'
                    stackSize={1000}
                />
                <PlayerInfo
                    className='absolute -top-[10%] left-1/2 -translate-x-1/2'
                    playerName='Player 3'
                    stackSize={1000}
                />
                <PlayerInfo
                    className='top-1/5 absolute right-0'
                    playerName='Player 4'
                    stackSize={1000}
                />
                <PlayerInfo
                    className='absolute bottom-[10%] right-0'
                    playerName='Player 5'
                    stackSize={1000}
                />
                <PlayerInfo
                    className='absolute -bottom-10 left-1/2 -translate-x-1/2'
                    playerName='Player 6'
                    stackSize={1000}
                    cards={playerCards}
                    isActing={true}
                    timeLeftInSeconds={30}
                />

                <Chips
                    amount={10}
                    size={40}
                    className='absolute bottom-[15%] left-[22%] text-lg'
                />
                <Chips
                    amount={10}
                    size={40}
                    className='absolute left-[22%] top-[23%] text-lg'
                />
                <Chips
                    amount={10}
                    size={40}
                    className='absolute left-1/2 top-[12%] text-lg'
                />
                <Chips
                    amount={10}
                    size={40}
                    className='absolute right-[22%] top-[23%] text-lg'
                />
                <Chips
                    amount={10}
                    size={40}
                    className='absolute bottom-[15%] right-[22%] text-lg'
                />
                <Chips
                    amount={10}
                    size={40}
                    className='absolute bottom-[12%] left-1/2 text-lg'
                />

                <DealerButton
                    className={dealerPositionBySeat[dealerSeatIndex]}
                    size={30}
                />

                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-1 text-2xl'>
                    234Poker
                </div>
                <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-xl'>
                    <Chips
                        amount={potAmount}
                        size={80}
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
            </div>
            <ActionContainer
                isSelectingGame={isSelectingGame}
                bettingState={bettingState}
            />
        </main>
    );
}
