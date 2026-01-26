import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

export default function Template(){
    return(
        <>
            <NavbarComp/>
            {/* Menentukan tempat untuk konten dinamis mirip kaya yield di laravel ea*/}
            <Outlet/>
        </>
    )
}