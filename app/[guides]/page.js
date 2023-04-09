"use client"

import { useAuthContext } from "@/store/authContext";
import { useEffect, useState } from "react";

const Guides = () => {
    const { user, authReady } = useAuthContext();
    const [guides, setguides] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (authReady && user) {
            fetch("/.netlify/functions/guides", {
                headers: {
                    Authorization: "Bearer "+ user.token.access_token
                }
            })
                .then(res => {
                    if (!res.ok) { throw Error("Log in to view the Content ") }
                    return res.json()
                })
                .then(data => setguides(data))
                .catch(err => {
                    setError(err.message)
                })
        }
    }, [user, authReady])
   
    console.log("Guid Auth",authReady)
    console.log('Guid User',user)
    console.log("Guide Data", guides)
    return (
        <div className="w-full my-4 ">
            <h1 className="font-semibold text-lg">All Guides</h1>
            {!authReady && <div className="font-bold text-center">Loading...</div>}
            {error && <div className="bg-pink-200 m-4 text-red-600 text-center p-4 rounded-lg">{error}</div>}
            {guides && guides.map((item, id) => (
                <div key={id + 1} className="bg-white p-4 rounded-lg my-4 shadow">
                    <h2 className="font-semibold">{item.title}</h2>
                    <h3 className="text-gray-800">Writen By {item.author}</h3>
                    <p className="text-gray-700">Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
            ))}
        </div>
    );
}

export default Guides;