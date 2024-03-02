import Image from 'next/image';

export default function Chips({
    amount,
    size,
    className,
}: {
    amount: number;
    size: 'lg' | 'sm';
    className: string;
}) {    
    const classContainer = {
        'lg': 'lg:w-20 w-9 lg:h-20 h-9',
        'sm': 'lg:w-10 w-7 lg:h-10 h-7',
    };

    const sizesQuery = {
        'lg': '(min-width: 1024px) 80px, 36px',
        'sm': '(min-width: 1024px) 40px, 28px',
    };

    return (
        <div className={`text-center ${className}`}>
            <p className=' absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 font-bold text-slate-900'>
                ${amount}
            </p>
            <div className={`${classContainer[size]} relative left-1/2 z-10 -translate-x-1/2`}>
                <Image
                    fill
                    sizes={sizesQuery[size]}
                    src='/images/poker-chips.png'
                    alt='Image of chips in the pot.'
                />
            </div>
        </div>
    );
}
