import { useEffect, useState } from "react"
import "./Grocery.css";
import { useNavigate } from "react-router-dom";
import GroceryItem from "./GroceryItem";


function Grocery() {
    const[searchTerm, setSearchTerm] = useState('')


          useEffect(() => {
            async function fetchData() {
                const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
                const response = await fetch(url)
                const data  = await response.json()
                console.log(data)
                console.log('yes')
                setSearchTerm(data)
            }
            fetchData()
           },[])
           

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
};

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const url = `${process.env.REACT_APP_BACKEND_URL}/foods/searchfoods/steak`
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/searchfoods/${searchTerm}`
        const response = await fetch(url, {
            method: 'GET',
        })
   
    const data = await response.json();
    console.log(data)
    


    
        

    }
           


    return(
        <div className= "form">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search Food"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Price"/>
            <input type="submit"/>
           
            
        </form>
        </div>
    )
}




export default Grocery;

