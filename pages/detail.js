
import AtomButton from "../components/atoms/button";
import AtomText from "../components/atoms/paragraph";
import AtomImage from "../components/atoms/image";
import OrganismsNav from "../components/organisms/navbar";


export default function detail() {
    return (<>
        <OrganismsNav />
        <center>
            <div className="row container mt-5">
                <div className="col-6">
                    <div className="row container">
                        <div className="col-4">
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }} />
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginBottom: "20px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }} />
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginBottom: "20px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>

                        <div className="col-8 templateDetailProduct" style={{ height: "370px" }}>
                            <img src="/detail/bag.png" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4" />

                        <div className="col-8">
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginRight: "25px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }} />
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginRight: "25px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }} />
                            <img src="/detail/bag.png"
                                style=
                                {{
                                    width: "90px",
                                    padding: "5px",
                                    marginRight: "20px",
                                    border: "1px solid",
                                    background: "#FFFFFF",
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>

                    </div>
                </div>

                <div className="col-6 text-left">
                    <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment"
                        size="36px"
                        weight="700"
                    />
                    <AtomText value="Stock : 50"
                        size="14px" color="#9D9D9D"
                    />
                    <AtomText value="$50.00"
                        size="30px"
                    />
                    <AtomText value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        size="14px" align="justify"
                    />
                    <AtomButton value="Add to Cart"
                        radius="10px"
                        background="#0086CF"
                        color="#FFFFFF"
                        border="none"
                        padding="10px 40px 10px 10px"
                        margin="45px 0 40px 0"
                    />
                </div>
            </div>
        </center>
    </>);
}