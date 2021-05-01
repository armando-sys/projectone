
export default function AtomButton({ customClass, value, margin, padding, background, color, border, radius, shadow, float, variant }) {
    return (<button
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