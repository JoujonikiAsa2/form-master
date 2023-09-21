import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './grandpa.css'
export const AssetContext = createContext('gold')
export const MoneyAsset = createContext(1000)
const GrandPa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'Diamond Ring'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            <MoneyAsset.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyAsset.Provider>
        </div>
    );
};

// Create context
// Provide context value
// use context

export default GrandPa;