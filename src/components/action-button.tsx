'use client'

import { Button } from "@/components/ui/button";

export default function ActionButton({ variant, actionName, amount = undefined }: { variant: 'neutral' | 'destructive' | 'creative', actionName: string, amount?: number | undefined }) {
    const clickFunction = () => {
        console.log(`User clicked ${actionName}`);
    };

    const buttonLabel = amount ? `${actionName} $${amount}` : actionName;
    return <Button variant={`${variant}-outline`} size={'lg'} onClick={clickFunction}>{buttonLabel}</Button>
}
