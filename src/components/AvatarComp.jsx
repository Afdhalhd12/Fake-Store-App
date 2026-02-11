import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";



export default function AvatarComp({ data }) {
  // Menggunakan context
  const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogout() {
    // panggil func logour di luar context
    logout();
    navigate("/")
  }
    const { cart } = useContext(CartContext);
// console.log(isLogin);

  return (
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img={data.avatar} rounded />
        }
      >
        <DropdownHeader>
          <span className="block text-sm">Nama : {data.name}</span>
          <span className="block truncate text-sm font-medium">Email : {data.email}</span>
        </DropdownHeader>
        <Link to="/profile">
          <DropdownItem>Profile</DropdownItem>
        </Link>
        <Link to="/">
          <DropdownItem>Home</DropdownItem>
        </Link>

        <Link to="/cart">
          <span className="bg-red-200 text-red-500 px-2 rounded-full" style={{position: "absolute", right: "20px", marginTop: "5px"}}>{cart.length}</span>
          <DropdownItem>Cart</DropdownItem>
        </Link>
        {
          isLogin ? (
            <DropdownItem onClick={handleLogout} >Logout</DropdownItem>
          ) : (
            <DropdownItem >
              <Link to="/login">
                Login
              </Link>
            </DropdownItem>
          )
        }

      </Dropdown>
      <NavbarToggle />
    </div>
  )
}