import { useEffect, useState } from "react"
import "./Grocery.css";

function Grocery() {
    const[searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action
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
      };

    return(
        <div className= "form">
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange = {(e) => setSearchTerm(e.target.value)} placeholder="Search Food"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Price"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Description"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Rating"/>
            <input type="submit"/>
        </form>
        </div>
    
    )

}


export default Grocery;

