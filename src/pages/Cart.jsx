import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import CardListHorizontal from "../components/CardListHorizontal";

export default function Cart(){
    const {cart} = useContext(CartContext);
    return(
        <div >
           <CardListHorizontal header={"Keranjang"} data={cart} type="cart"/>
        </div>
    )
}