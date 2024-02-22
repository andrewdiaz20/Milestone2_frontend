import React from "react"
import {useState, useEffect} from "react"
import{useNavigate} from "react-router-dom"
import { Card,CardBody,CardSubtitle,CardImg,CardTitle, Button, CardText} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Card.css'



function RandomFood(){
         const navigate = useNavigate()
         const [randomReview, setRandomReview] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('reviews retrevied')
            if (data && data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                setRandomReview(data[randomIndex]); // Select a random review
            }
        }
        fetchData();
    }, [])

 
   

    return (
        <div className="container text-center">
            <h3>Random Food Selector 3000</h3>
            {randomReview && ( // Check if a review is selected
                <div className="card-div">
                    <Card className="custom-card">
                        <img  src={randomReview.profilePicture} className="card-img" />
                        <CardTitle><h4 className="card-headers">Name:</h4> <h5>{randomReview.name}</h5></CardTitle>
                        <CardText><h4 className="card-headers">type: </h4> <p className="card-text-size">{randomReview.type}</p></CardText>
                        <CardText><h4 className="card-headers">price: </h4> <p className="card-text-size">{randomReview.price}</p></CardText>
                        <CardText><h4 className="card-headers">description: </h4> <p className="card-text-size">{randomReview.description}</p></CardText>
                        <CardText><h4 className="card-headers">section: </h4> <p className="card-text-size">{randomReview.section}</p></CardText>
                    </Card>
                </div>
            )}
                <Button className="btn-danger col-4" >Destroy </Button>
                <Button className="btn-warning col-4"> Make a better description  </Button>
        </div>
    
    );
}


export default RandomFood