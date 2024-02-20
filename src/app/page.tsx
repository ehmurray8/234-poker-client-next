import ActionButton from "@/components/action-button"
import Chips from "@/components/chips";
import PlayerInfo from "@/components/player-info"
import PokerCard from "@/components/poker-card";
import RaiseActionButton from "@/components/raise-action-button"

export default function Home() {
    const playerCards = [
        {
            rank: 'ace',
            suit: 'clubs',
        },
        {
            rank: 'ace',
            suit: 'spades',
        }
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

    // TODO: Add support for bet in front of user
    // TODO: Add timer
    // TODO: Add support for 2 and 3 cards
    return <main className='w-[100dvw] h-[100dvh]'>
        <div className="bg-cyan-600 h-[30%] w-[40%] portrait:h-[20%] short:h-[60%] short:w-[80%] rounded-[50%] absolute top-24 left-1/2 -translate-x-1/2">
            <PlayerInfo className="absolute bottom-[10%]" playerName="Player 1" stackSize={1000} />
            <PlayerInfo className="absolute top-1/5" playerName="Player 2" stackSize={1000} />
            <PlayerInfo className="absolute -top-10 left-1/2 -translate-x-1/2" playerName="Player 3" stackSize={1000} />
            <PlayerInfo className="absolute top-1/5 right-0" playerName="Player 4" stackSize={1000} />
            <PlayerInfo className="absolute bottom-[10%] right-0" playerName="Player 5" stackSize={1000} />
            <PlayerInfo className="absolute -bottom-10 left-1/2 -translate-x-1/2" playerName="Player 6" stackSize={1000} cards={playerCards} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl stroke-1">234Poker</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl z-10">
                <Chips amount={potAmount} size={80} />
                <div className="flex flex-row gap-4">
                    {communityCards.map((card) => (
                        <PokerCard key={`${card.rank}-${card.suit}-community-card`} card={card} />
                    ))}
                </div>
            </div>
        </div>
        <div className="absolute bottom-6 left-0 w-full flex flex-row justify-center gap-10">
            <ActionButton variant="destructive" actionName="Fold" />
            <ActionButton variant="neutral" actionName="Check" />
            <ActionButton variant="neutral" actionName="Call" amount={100} />
            <RaiseActionButton minAmount={200} maxAmount={1000} step={50} />
        </div>
    </main>
}
