import { redirect } from "react-router-dom";

// kemnapa engga pake default? -> karena gaada ui
export function auth(){
    let access_token = localStorage.getItem("access_token");
  
    
    // Jika tidak ada access_token di localstorage
    if(!access_token){
        // navigate() -> untuk fungsi yang menangani event
        // redirect() -> untuk fungi biasa (bukan penanganan event), digunakan dengan return
        return redirect("/login");
    }
    // Jika ada access-token dilanjutkan proses nya
    return null;
    

}