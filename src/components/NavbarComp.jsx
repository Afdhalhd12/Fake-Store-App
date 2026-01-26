import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";
import imageLogo from "../assets/logo.png";
import { useEffect, useState } from "react";
import AvatarComp from "./AvatarComp";

export default function NavbarComp() {
   const [user, setUser] = useState([]);
  
      async function getData() {
          const url = "https://api.escuelajs.co/api/v1/users";
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error(`Response status: ${response.status}`);
              }
  
              const result = await response.json();
              setUser(result[0]);
  
          } catch (error) {
              console.log(error.message);
          }
      }
  
      useEffect(() => {
          getData();
      }, []);

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src={imageLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fake Store App</span>
      </NavbarBrand>
      <AvatarComp data={user}/>
    </Navbar>
  );
}
