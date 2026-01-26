import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Template from "../Template";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import ProductCategory from "../pages/ProductCategory";


// Membuat daftar routing 
export const router = createBrowserRouter([
    {path:"/", element: <Template/>,
        //mengisi outlet /> di template.jsx
        children: [
            {path: "/", element: < App/>},
            {path: "/products", element: <Products/>},
            {path: "/profile", element: <Profile/>},
            {path: "/categories/:categoryId", element: <ProductCategory/>}
        ]
     }
]);