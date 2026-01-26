import { useEffect, useState } from "react";
import BannerComp from "./components/BannerComp";
import CardList from "./components/CardList";
import { Button } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";


function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url = "https://api.escuelajs.co/api/v1/categories";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setCategories(result.slice(0,4));
      setLoading(false);

    } catch (error) {
      console.log(error.message);
    }
  }

  async function getProducts() {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProducts(result.slice(0,4));
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  // Pengecakan sedang loading atau engga
  if(loading){
    return(
      <div className="flex justify-center">
        <Spinner aria-label="Default status example" />
        <br/>
        <p>sedang mengambil data...</p>
      </div>
    )
  }

  return (
    <>
      <BannerComp />
      <CardList data={categories} type="categories" />
      <CardList data={products} type="product">
        <div className="flex justify-between mb-5 mt-8">
          <h5 className="text-xl font-bold">Daftar Produk Populer</h5>
          <Link to="/products">
            <Button color="blue">Lihat Selengkapnya</Button>
          </Link>
        </div>
      </CardList>
    </>
  );
}

export default App;
