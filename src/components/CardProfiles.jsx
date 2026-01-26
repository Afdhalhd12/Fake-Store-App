import { Card} from "flowbite-react";

export default function CardProfiles({user}) {
    return (
        <Card className="max-w-sm mx-auto mt-10">
            <div className="flex gap-2">
                <img className="rounded-full w-30" src={user.avatar} />
                <div className="text-blue-600 text-xl">
                    <p>Nama : {user.name}</p>
                    <br/>
                    <p>Email : {user.email}</p>
                    <br/>
                    <p>Role : {user.role} </p>
                </div>
            </div>
        </Card>
    )
}