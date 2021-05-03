import AtomText from "../atoms/paragraph"

export default function product_list() {
    return (<>

        <div className="templateListProduct mt-3 text-left" style={{ padding: "20px" }}>
            <img src="/product/product_1.png" />
            <AtomText value="Lavonte #A1294"
                size="14px"
                weight="bold"
                fontFamily="Roboto"
                margin="30px 0 0 0"
            />
            <AtomText value="Forever Shoes"
                size="10px"
                fontFamily="Roboto"
            />
            <div className="row">
                <div className="col-8">
                    <AtomText value="$125.00"
                        size="18px"
                        weight="bold"
                        fontFamily="Roboto"
                    /></div>
                <div className="col-4">
                    <img src="/product/cart.png" />
                </div>
            </div>

        </div>

    </>);
}