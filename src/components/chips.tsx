import Image from 'next/image';

export default function Chips({
    amount,
    size,
}: {
    amount: number;
    size: number;
}) {
    return (
        <div className='relative mb-1 text-center'>
            <p className='absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-slate-900'>
                ${amount}
            </p>
            <Image
                width={size}
                height={size}
                src='/images/poker-chips.png'
                alt='Image of chips in the pot.'
                className='relative left-1/2 z-10 -translate-x-1/2'
            />
        </div>
    );
}
