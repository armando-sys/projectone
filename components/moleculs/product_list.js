import AtomText from "../atoms/paragraph"

export default function product_list() {
    return (<>

        <div className="templateListProduct mt-3 text-left" style={{ padding: "20px" }}>
            <img src="/product/product_1.png" />
            <AtomText value="Lavonte #A1294"
                size="14px"
                weight="bold"
                lineHeight="30px"
                fontFamily="Roboto"
                margin="20px 0 0 0"
            />
            <AtomText value="Lavonte #A1294"
                size="14px"
                weight="bold"
                lineHeight="30px"
                fontFamily="Roboto"
            />
        </div>

    </>);
}