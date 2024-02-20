import Image from 'next/image';

export default function Chips({ amount, size }: { amount: number, size: number }) {
    return <div className="relative text-center mb-1">
        <p className="absolute z-20 text-slate-900 font-bold top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl">${amount}</p>
        <Image width={size} height={size} src='/images/poker-chips.png' alt='Image of chips in the pot.' className="z-10 relative left-1/2 -translate-x-1/2" />
    </div>
}
