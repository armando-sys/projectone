
export default function AtomText({value,size,fontFamily,color,margin,customClass,padding,weight,width}){
    return (
    <>
    <p 
    className={customClass}
    style={{
    color:color,
    fontSize:size,
    fontFamily:fontFamily,
    margin:margin,
    padding:padding,
    weight:weight,
    width:width,
    }}>
        {value}
    </p>
    </>
    );
}