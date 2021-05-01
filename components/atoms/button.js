
export default function AtomButton({ customClass, value, margin, padding, background, color, border, radius, shadow }) {
    return (<button
        className={customClass} style={{
            background: background,
            color: color,
            margin: margin,
            padding: padding,
            border: border,
            borderRadius: radius,
            boxShadow: shadow,
        }}>{value}
    </button>
    );
}