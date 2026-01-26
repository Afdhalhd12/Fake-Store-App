import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";


import { Link } from "react-router-dom";

export default function AvatarComp({data}){
    return(
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
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
    )
}