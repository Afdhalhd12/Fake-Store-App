import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import CartProvider from "./contexts/CartContext";

export default function Template() {
    return (
        <>
            <CartProvider>
                <NavbarComp />
                {/* Menentukan tempat untuk konten dinamis mirip kaya yield di laravel ea*/}
                <Outlet />
            </CartProvider>
        </>
    )
}