export default function DealerButton({
    className,
    size,
}: {
    className: string;
    size: number;
}) {
    return (
        <div className={className}>
            <svg
                viewBox='0 0 100 100'
                height={size}
                width={size}
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
