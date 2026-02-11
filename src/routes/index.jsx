import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../Template";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";
import Login from "../pages/Login";
import Cart from "../pages/cart";
import Checkout from "../pages/Checkout";
import { auth } from "../middleware/auth";


// Membuat daftar routing 
export const router = createBrowserRouter([
    {path:"/", element: <Template/>,
        //mengisi outlet /> di template.jsx
        children: [
            {path: "/", element: < App/>},
            {path: "/products", element: <Products/>},
            {path: "/profile", element: <Profile/>},
            {path: "/login", element: <Login/>},
            {path: "/categories/:categoryId", element: <ProductCategory/>},
        ]
     },{path:"/", element: <Template/>,
        loader: auth, 
        // Menjalankan fungsi ketika proses perpindahan halaman, menjalankan pengecekan middleware/auth.js baru meneruskan ke halaman
        //mengisi outlet /> di template.jsx
        children: [
            {path: "/cart", element: <Cart/>},
            {path: "/checkout", element: <Checkout/>},
        ]
     }
]);