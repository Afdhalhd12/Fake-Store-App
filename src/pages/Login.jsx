import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import ToastFailed from "../components/ToastFailed";
import { useNavigate } from "react-router-dom";
import {AuthContext}  from "../contexts/AuthContext";



export default function Login() {
    const {login}= useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function submitForm() {
        console.log(form);
        if (form.email == "" || form.password == "") {
            setError("Gagal!, Pastikan Email dan Password terisi");

        } else {
            setLoading(true);
            processLogin();
        }
    }

    async function processLogin() {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            // Kalau response nya gaada access_token, berarti gagal login
            if (!result.access_token) {
                throw new Error("Email dan password tidak sesuai");
            }

            // Simpan token ke local storage

            localStorage.setItem("access_token", result.access_token);
            localStorage.setItem("refresh_token", result.refresh_token);

            setError('');
            // Func context untuk update isLogin
            login();
            // Pindahkan ke halaman keranjang
            // <Link> pindah melalui html, useNavigate pindah melalui js

            navigate("/cart");
        } catch (error) {
            setError("Gagal Login!, Pastikan email dan password sudah sesuai.")
        } finally {
            setLoading(false);
        }
    }
    // Ketika baru masuk ke login, cek jika sudah login maka akan di arahkan ke /cart
    useEffect(() =>{
        if(localStorage.getItem("access_token")){
            navigate("/cart");
        }
    })


    return (
        <>
            {
                error != "" && (<ToastFailed error={error} />)
            }
            <div className="w-100 block mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-5 text-center">LOGIN</h1>
                <form className="flex max-w-md flex-col gap-4 rounded-2xl shadow-2xl p-5">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1">Your email</Label>
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com"
                            // Memberikan nilai dari state form bagian email sesuai dengan value input ketika mengetikkan data
                            required onKeyUp={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1">Your password</Label>
                        </div>
                        <TextInput id="password1" type="password" required onKeyUp={(e) => setForm({ ...form, password: e.target.value })} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    {
                        loading ? (
                            <Button disabled color="alternative">
                                <Spinner aria-label="Default status example" />
                            </Button>
                        ) : (
                            <Button type="button" onClick={submitForm}>Login</Button>
                        )
                    }
                </form>
            </div>
        </>
    )
}