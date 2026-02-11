import { Card } from "flowbite-react";
import { ButtonGroup, Button } from "flowbite-react";
import { useContext, useEffect } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
export default function CardListHorizontal({ data, header, type }) {
    const { changeQty, deleteAll, deleteItem, showAlert } = useContext(CartContext);
    const navigate = useNavigate();

    const totalProduct = data.reduce(
        (akumulasi, hargaBaru) => akumulasi + hargaBaru.price, 0
    );

    const tax = totalProduct * 0.12;
    const totalPrice = totalProduct + tax;

    useEffect(() => {
     if(data.length == 0 && type == "checkout"){
        alert('Masukkan produk dulu');
        navigate('/')
     } 
  }, []);


    return (
        <>
            <Card className="block mx-auto my-25 w-4xl">
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{header}</h5>
                    {
                        type == 'cart' && data.length >= 1 ? (
                            <div>
                                <p className="text-sm font-medium text-red-600 hover:underline cursor-pointer dark:text-red-500" onClick={deleteAll}>
                                    Hapus Semua
                                </p>
                            </div>
                        ) : (
                            ""
                        )
                    }

                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">

                        {
                            data.map((item, index) => (

                                <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                alt="Neil image"
                                                height="32"
                                                src={item.image}
                                                width="50"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400 font-bold">X{item.qty}</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${item.price}</div>
                                    </div>
                                    {
                                        type == "cart" ? (
                                            <div>
                                                <div className="flex justify-end mt-4">
                                                    <ButtonGroup>
                                                        <Button color="blue" className="px-3 py-0" onClick={() => changeQty(item.id, "-")}><FaMinus className="w-3 h-3" /></Button>
                                                        <Button color="alternative" className="px-3 py-0">{item.qty}</Button>
                                                        <Button color="blue" className="px-3 py-0" onClick={() => changeQty(item.id, "+")}><FaPlus className="w-3 h-3" /></Button>
                                                    </ButtonGroup>
                                                    <FaTrash className="text-2xl mt-2 ms-2 text-red-500" onClick={() => deleteItem(item.id)} />
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    }
                                </li>
                            ))
                        }

                        {
                            type == "cart" && data.length >= 1 ? (
                                <div className="flex justify-end mt-5">
                                    <Link to="/checkout">
                                        <Button color="green">Checkout</Button>
                                    </Link>
                                </div>
                            ) : (
                                ""
                            )
                        }


                    </ul>
                    {
                        type == "checkout" ? (
                            <div>
                                <hr className="mt-3 text-gray-200" />
                                <h1 className="text-xl font-bold mt-5">Detail Pembayaran</h1>
                                <div className="mt-3 text-gray-600">
                                    <div className="flex justify-between">
                                        <p>Total Harga Produk</p>
                                        <p>${totalProduct}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p>Biaya Harga Aplikasi</p>
                                        <p>${tax}</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <p>Total Harga Bayar</p>
                                        <p>${totalPrice}</p>
                                    </div>


                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    }

                    {
                        type == "checkout" && data.length >= 1 ? (
                            <>
                                <hr className="mt-3 text-gray-200" />
                                <div className="flex justify-end mt-5">
                                    <Button type="button" color="default" onClick={showAlert}>Selesaikan Pembayaran</Button>
                                </div>
                            </>
                        ) : (
                            ""
                        )
                    }
                </div >
            </Card >
        </>
    )
}