import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Valute.css"

const Valute = () => {
    const [currency, setCurrency] = useState({})

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((res) => {
                const result = {
                    USD: res.data.Valute.USD.Value,
                    EUR: res.data.Valute.EUR.Value
                }
                setCurrency(result)
            })
    }, [])
    return (
        <div className="valute">
            <span>USD: {currency.USD}*</span>
            <span>EUR: {currency.EUR}*</span>
        </div>
    )
}

export default Valute
