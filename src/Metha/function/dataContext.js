import {createContext, useState } from "react";
import axios from "axios";

const Search = createContext({});


export const SearchProvider = (children)=>{
const [result, setResult] = useState([]);

const handleSearch = ()=>{
    axios.get(`https://64005a829f844910298eb65c.mockapi.io/products`)
    .then((response)=>response.json())
    .then((data)=>{
        setResult(data);
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

return(
    <Search.Provider
    value={{
        result,
        handleSearch
    }}
    >
        {children}
    </Search.Provider>
)
}