export default function Button({Label, handlerClick}) {
    // props ke traha ham yayah par variblw ko assign kiya hai jiska value durasa file se aayega ho use hoga
    return (
        <button onClick={handlerClick}>{Label}</button>
    )
}