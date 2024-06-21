import { useState, useEffect} from "react";

function CurrencyInfo(baseCurrency){
    const [data,setData]= useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`)
        .then((res)=> res.json())   ///converted into json format
        .then((res)=> setData(res[baseCurrency]))/// In the json format, we set the base Currency from whi
    }
    ,[baseCurrency])
    console.log(data)
    return [data,setData];
}
export default CurrencyInfo;
