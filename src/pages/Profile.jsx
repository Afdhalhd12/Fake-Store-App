
import { useEffect, useState } from "react";
import CardProfiles from "../components/CardProfiles";

function Profile() {
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
        <>
            <CardProfiles user={user}/>
        </>
    )
}
export default Profile;