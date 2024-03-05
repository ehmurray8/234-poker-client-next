'use client';

import { useState } from 'react';
import ActionButton from './action-button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export default function RaiseActionButton({
    minAmount,
    maxAmount,
    step,
}: {
    minAmount: number;
    maxAmount: number;
    step: number;
}) {
    const [amount, setAmount] = useState(minAmount);
    function sliderValueChange(value: number[]) {
        setAmount(value[0]);
    }

    return (
        <div className='flex flex-row'>
            <ActionButton
                variant='creative'
                actionName='Raise'
                amount={amount}
            />
            <Slider
                defaultValue={[amount]}
                min={minAmount}
                max={maxAmount}
                step={step}
                onValueChange={sliderValueChange}
                className={cn('ml-4 w-48 sm:w-56 md:w-64')}
            />
        </div>
    );
}
