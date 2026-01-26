import { Dropdown, DropdownItem } from "flowbite-react";

export default function DropdownComp({ processorSort }) {
    return (
        <Dropdown color="alternative" className="ms-3 w-50" label="Urutkan Data" dismissOnClick={false}>
            <DropdownItem onClick={() => processorSort('harga termurah')}>Harga Termurah</DropdownItem>
            <DropdownItem onClick={() => processorSort('harga termahal')}>Harga Termahal</DropdownItem>
            <DropdownItem onClick={() => processorSort('alfabet menurun')}>Alfabet Menurun</DropdownItem>
            <DropdownItem onClick={() => processorSort('alfabet menaik')}>Alfabet Menaik</DropdownItem>
        </Dropdown>
    )
}