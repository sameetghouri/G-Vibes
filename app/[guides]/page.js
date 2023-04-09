"use client"

import { useAuthContext } from "@/store/authContext";
import { useEffect,useState } from "react";

const Guides = () => {
    const {user, authReady}=useAuthContext;
    const [guids, setguids] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
            if (authReady){
            fetch("/.netlify/functions/guids",user && {
                headers:{
                    Autorization:`Bearer ${user?.token.access_token}`
                }
            })
            .then(res => {
                if(!res.ok){throw Error("Could not fetch data")}
                return res.json() })
            .then(data => setguids(data))
            .catch(err => {
                setError(err.message)
                setguids(null) })
            }
    },[user,authReady])
    console.log("Guide Data",guids)
    return ( 
        <div className="w-full my-4 ">
            <h1 className="font-semibold text-lg">All Guides</h1>
            {!authReady&&<div className="font-bold">Loading...</div>}
            {error && <div className="bg-pink-300 text-red font-semibold border">{error}</div>}
            {guids && guids.map((item,id) => (
                 <div key={id+1} className="bg-white py-2 px-4 rounded my-2 shadow-lg">
                    <h2 className="font-semibold">{item.title}</h2>
                    <h3 className="text-gray-800">Writen By {item.author}</h3>
                    <p className="text-gray-700">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                 </div>               
            ))}
        </div>
     );
}
 
export default Guides;