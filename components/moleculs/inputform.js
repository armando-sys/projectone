import AtomText from "../atoms/paragraph";

export default function inputform({
    onChange,
    customClass,
    label,
    height,
    value = "Data",
    name,
    id,
    type,
    rows,
    border

}) {
    return (<>
        <label className={customClass} htmlFor={value} style={{ width: "100px" }}>
            {type !== "checkbox" ? (
                <AtomText value={label ? label : value} size="18px" />
            ) : (
                ""
            )}
            {type == "textarea" ? (
                <textarea
                    onChange={onChange}
                    id={id}
                    type={type}
                    rows={rows ? rows : "5"}
                    className="form-control mt-5}"
                    placeholder={`Enter your ${value}`}
                    style={{ border: border ? border : "solid thin #eee", width: "650px" }}
                />


            ) : (
                <input
                    onChange={onChange}
                    id={id}
                    type={type}
                    className="form-control mt-3"
                    placeholder={`Enter Your ${value}`}
                    style={{ height: height ? height : "30px", width: "300px", border: border ? border : "solid thin #eee" }} />

            )}
        </label>

    </>
    );
}