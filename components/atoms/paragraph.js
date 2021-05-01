
export default function AtomText({ value,
    size,
    fontFamily,
    color,
    margin,
    customClass,
    padding,
    weight,
    width,
    variant,
    align,
    lineHeight
}) {
    return (
        <>
            <p
                className={customClass}
                style={{
                    color: color,
                    fontSize: size,
                    fontFamily: fontFamily,
                    fontVariant: variant,
                    margin: margin,
                    padding: padding,
                    weight: weight,
                    width: width,
                    textAlign: align,
                    lineHeight: lineHeight,

                }}>
                {value}
            </p>
        </>
    );
}