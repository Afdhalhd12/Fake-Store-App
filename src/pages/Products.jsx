import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { Spinner } from "flowbite-react";
import SearchComp from "../components/SearchComp";
import DropdownComp from "../components/DropdownComp";
import PaginationComp from "../components/PaginationComp";


export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
        // tidak mengitim param url, karena uda di url = fucntion sudah ada current page dari set
        getProducts();
    }
    

    function processSearch(event) {
        setSearch(event.target.value);
        let url = "https://api.escuelajs.co/api/v1/products" + "?title=" + search;
        setLoading(true);
        getProducts(url);
    }

    async function getProducts(url = "https://api.escuelajs.co/api/v1/products" + "?limit=8" + "&offset=" + currentPage) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
        }
    }

    function processSort(type) {
        // Copy isi products ke nama baru agar terdeteksi di setProducts untuk memunculkan tampilan produk baru (sesuai hasil sort)
        let productNew = [...products];
        if (type == "harga termurah") {
            productNew.sort(function (a, b) { return a.price - b.price });
        } else if (type == "harga termahal") {
            productNew.sort(function (a, b) { return b.price - a.price });
        } else if (type == "alfabet menurun") {
            productNew.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (type == "alfabet menaik") {
            productNew.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));;
        }
        setProducts(productNew);
    }

    useEffect(() => {
        getProducts();
    }, []);




    return (
        <div>
            <h1 className="text-4xl font-bold ms-46 mb-5 ">Daftar Produk</h1>
            <div className="flex">
                <SearchComp processSearch={processSearch} />
                <DropdownComp processorSort={processSort} />
            </div>

            {
                loading ? (
                    <div className="flex justify-center">
                        <Spinner aria-label="Default status example" />
                        <br />
                        <p>sedang mengambil data...</p>
                    </div>
                ) : (<CardList data={products} type="product"></CardList>)
            }

            <div className="my-5">
                <PaginationComp currentPage={currentPage} onPageChange={onPageChange} />
            </div>
        </div>
    )
}