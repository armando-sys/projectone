
import AtomButton from "../components/atoms/button";
import AtomText from "../components/atoms/paragraph";
import OrganismsNav from "../components/organisms/navbar";


export default function detail() {
    return (<>
        <OrganismsNav />
        <center>
            <div className="row container mt-5">
                <div className="col">

                </div>
                <div className="col text-left">
                    <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment"
                        size="36px"
                        weight="700"
                    />
                    <AtomButton value="Add to Cart" />
                </div>
            </div>
        </center>
    </>)
        ;
}