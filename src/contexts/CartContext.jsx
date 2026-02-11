import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();
export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const { isLogin } = useContext(AuthContext);
    
    function addToCart(product, qty) {
    if(isLogin) {
        setCart((prev) => {
            // Cek jika produk yang dipilih sudah ada di state Cart, update qty nya saja
            const exist = prev.find((item) => item.id == product.id);
            if (exist) {
                return prev.map((item) => {
                    if (item.id == product.id) {
                        return { ...item, qty: item.qty + 1 }
                    } else {
                        // Kalo item yang di loop ini bukan id yang dimaksud, ga diupdate apa apa isinya
                        return item;
                    }
                })
            } else {
                // Kalau product.id gaada di cart state, isi data object baru ke arr state cart
                return [
                    ...prev, {
                        id: product.id,
                        title: product.title,
                        image: product.images ? product.images[0] : "",
                        price: product.price,
                        qty: qty
                    }
                ]
            }
        })
    } 
     else{
        navigate('/login');
    }
}


    // useEffect(() => {
    //     console.log(cart)
    // }, [cart]);

    function changeQty(productId, type) {
        setCart((prev) => {
            // Loop data cart, cari data id yang sesuai, update qty nya
           return prev.map((item) => {
                if (item.id == productId) {
                    if (type == "+") {
                        return { ...item, qty: item.qty + 1 }
                    } else {
                        // jika tipe perubahannya -, diupdate maks angka 1 kurang nya
                        if (item.qty > 1) {
                            return { ...item, qty: item.qty - 1 }
                        } else {
                            return item;
                        }
                    }
                } else {
                    return item;  //jika id loop bukan productId diminta, tdk diubah
                }
            });
        })
    }

    function deleteAll(){
        setCart([]);
    }

    function deleteItem(productId){
        setCart((prev) =>{
            return prev.filter((item) => item.id != productId);
        })
    }

    function showAlert(){
        setAlert(true);
        setCart([]);
        navigate('/');
    }

    function handleAlert(){
        setAlert(false);
        navigate('/');
        }

    

    

    return (
        <CartContext.Provider value={{ cart, addToCart, changeQty, deleteAll, deleteItem, showAlert, handleAlert, alert }}>
            {children}
        </CartContext.Provider>
    )
}