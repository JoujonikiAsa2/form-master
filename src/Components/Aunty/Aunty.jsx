import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyAsset } from "../GrandPa/GrandPa";
const Aunty = () => {
    const [money,setMoney]= useContext(MoneyAsset)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'shohana'}></Cousin>
                <Cousin name={'sakib'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Aunty;