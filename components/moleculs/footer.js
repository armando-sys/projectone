import AtomText from "../atoms/paragraph";

export default function footer() {
    return (<>

        <div className="row" style={{ background: "#0086CF" }}>
            <div className="col-2"></div>
            <div className="col-8 text-left">
                <AtomText value="BPS Provinsi Maluku"
                    weight="bold"
                    variant="small-caps"
                    size="18px"
                    margin="20px 0 0 250px"
                />
                <AtomText value="Jl. Wolter Monginsidi - Passo, Ambon 97231"
                    size="14px"
                    margin="5px 0 0 250px"
                />
                <AtomText value="Email : bps8100@bps.go.id Homepage: https://maluku.bps.go.id"
                    size="14px"
                    margin="5px 0 20px 250px"
                />
            </div>
            <div className="col-2"></div>

        </div>

    </>)
}