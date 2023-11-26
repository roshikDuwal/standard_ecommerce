const FormatCurrency=({price})=>{
    return Intl.NumberFormat("en-IN",{
        style:"currency",
        currency:"NPR",
        maximumFractionDigits:2
    }).format(price)
}


export default FormatCurrency