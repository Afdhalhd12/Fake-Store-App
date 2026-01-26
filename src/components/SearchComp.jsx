"use client";

import { TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function SearchComp({processSearch}) {
    return (
        <TextInput className="ms-47 mb-5 w-2xl" id="text" type="text" icon={CiSearch} placeholder="Cari Nama Produk" onKeyUp={processSearch} required />
    )
}