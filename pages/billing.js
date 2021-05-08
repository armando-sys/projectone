import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from '../components/atoms/paragraph';
import AtomButton from '../components/atoms/button';
import OrganismsNav from '../components/organisms/navbar';
import MoleculInputForm from '../components/moleculs/inputform';

export default function billing() {

    const handleBilling = () => {
        let json = {
            name: "",
            email: "",
            telpon: "",
            ketarangan: "",
            alamat: "",
            cart: []
        }
    }

    return (<>

        <OrganismsNav />
        <center>

            <div className="row container mt-5">
                <div className="col-8">
                    <div className="row container">
                        <div className="col text-left">
                            <AtomText
                                value="Billing Info"
                                size="26px"
                            />
                            <AtomText
                                value="Invoice : 13.04.2020"
                                color="#646464"
                                size="16px"
                            />
                        </div>
                    </div>
                    <div className="row container text-left">
                        <div className="col-md-6 mt-3">
                            <MoleculInputForm value="Name" />

                        </div>
                        <div className="col-md-6 mt-3">
                            <MoleculInputForm value="Email" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <MoleculInputForm value="Telpon" />

                        </div>
                        <div className="col-md-6 mt-3">
                            <MoleculInputForm value="Keterangan" />
                        </div>
                        <div className="col-md-12 mt-3">
                            <MoleculInputForm value="Alamat" type="textarea" />
                        </div>
                    </div>


                </div>
                <div className="col-4">

                    <div className="templateCartList p-4 text-left">
                        <AtomText value="Billing Info" size="24px" weight="bold" />
                        <div style={{ height: "350px" }}>
                            <AtomText value="Lorevial #A1294" size="16px" />
                            <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
                            <AtomText value="Lorevial #A1294" size="16px" />
                            <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
                            <AtomText value="Lorevial #A1294" size="16px" />
                            <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
                        </div>
                        <div className="row">
                            <div className="col">
                                <AtomText value="Total Price :" />
                            </div>
                            <div className="col">
                                <AtomText value="$540.00" weight="bold" />
                            </div>
                        </div>
                    </div>

                    <AtomButton
                        onClick={handleBilling}
                        margin="10px"
                        padding="10px 120px"
                        value="Pay"
                        radius="10px"
                        border="none"
                        background="#0086CF;
                        "
                        color="#fff"
                    />
                </div>

            </div>
        </center>

    </>);
}