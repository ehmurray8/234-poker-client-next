import RaiseActionButton from './raise-action-button';
import ActionButton from './action-button';

export type BettingState = {
    amountToCall: number;
    minRaiseAmount?: number;
    maxRaiseAmount?: number;
    stepSize: number;
};

export default function ActionContainer({
    isSelectingGame = false,
    bettingState = undefined,
}: {
    isSelectingGame?: boolean;
    bettingState?: BettingState | undefined;
}) {
    let actions: React.JSX.Element;
    if (bettingState) {
        if (bettingState.amountToCall) {
            actions = (
                <>
                    <ActionButton variant='destructive' actionName='Fold' />
                    <ActionButton
                        variant='neutral'
                        actionName='Call'
                        amount={bettingState.amountToCall}
                    />
                </>
            );
        } else {
            actions = (
                <>
                    <ActionButton variant='neutral' actionName='Check' />
                </>
            );
        }

        if (bettingState.minRaiseAmount && bettingState.maxRaiseAmount) {
            actions = (
                <>
                    {actions}
                    <RaiseActionButton
                        minAmount={bettingState.minRaiseAmount}
                        maxAmount={bettingState.maxRaiseAmount}
                        step={bettingState.stepSize}
                    />
                </>
            );
        }
    } else if (isSelectingGame) {
        actions = (
            <>
                <ActionButton variant='neutral' actionName='Holdem' />
                <ActionButton variant='neutral' actionName='Pineapple' />
                <ActionButton variant='neutral' actionName='Omaha' />
            </>
        );
    } else {
        actions = <></>;
    }
    return (
        <div className='absolute bottom-6 left-0 flex w-full flex-row justify-center gap-5 md:gap-10 flex-wrap'>
            {actions}
        </div>
    );
}
