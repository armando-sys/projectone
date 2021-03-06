import AtomText from "../atoms/paragraph";
import AtomImage from "../atoms/image";


export default function product_list({ image, title, category, price, id }) {
    return (<>

        <div className="templateListProduct mt-3 text-left"
            style={{ padding: "20px" }}>

            <AtomImage
                image={image}
                background="#dedede"
                height="150px"
                size="contain"
                repeat="no-repeat"
                position="center"
            />

            <AtomText value={title}
                size="14px"
                weight="bold"
                fontFamily="Roboto"
                margin="30px 0 0 0"
            />
            <AtomText value={category}
                size="10px"
                fontFamily="Roboto"
            />
            <div className="row">
                <div className="col-8">
                    <AtomText value={price}
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