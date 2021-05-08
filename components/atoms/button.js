
export default function AtomButton({
    onClick,
    customClass,
    value,
    margin,
    padding,
    background,
    color,
    border,
    radius,
    shadow,
    float,
    variant
}) {
    return (<button
        onClick={onClick}
        className={customClass} style={{
            background: background,
            color: color,
            margin: margin,
            padding: padding,
            border: border,
            borderRadius: radius,
            boxShadow: shadow,
            float: float,
            variant: variant,
        }}>{value}
    </button>
    );
}