export default function DealerButton({
    className,
}: {
    className: string;
}) {
    return (
        <div className={`${className} md:h-7 h-5 md:w-7 w-5`}>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'
            >
                <circle cx='50' cy='50' r='50' fill='white' />
                <text
                    x='52%'
                    y='58%'
                    textAnchor='middle'
                    stroke='black'
                    letterSpacing='1.25'
                    fontSize='1.75em'
                    fontFamily='monospace'
                    paintOrder='stroke fill'
                    fill='black'
                >
                    DEALER
                </text>
            </svg>
        </div>
    );
}
