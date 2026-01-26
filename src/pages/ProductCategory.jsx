import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import CardList from "../components/CardList";

export default function ProductCategory() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        const url = "https://api.escuelajs.co/api/v1/products/?categoryId=" +   categoryId;
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

    useEffect(() => {
        getProducts();
    }, []);

    // Pengecakan sedang loading atau engga
    if (loading) {
        return (
            <div className="flex justify-center">
                <Spinner aria-label="Default status example" />
                <br />
                <p>sedang mengambil data...</p>
            </div>
        )
    }

    return (
        <div className="px-10 py-5">
            <h1 className="font-4xl font-bold">Produk Kategori {products[0].category.name}</h1>
            <CardList data={products} type="product" />

        </div>
    )
}