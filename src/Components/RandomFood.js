import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardImg, CardTitle, Button, CardText } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Card.css'
import { random } from "node-forge";
import UpdateForm from './UpdateForm'



function RandomFood() {
    const navigate = useNavigate()
    const [randomfood, setrandomfood] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('reviews retrevied')
            if (data && data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                setrandomfood(data[randomIndex]); // Select a random review
            }
        }
        fetchData();
    }, [])

    async function DeleteFood() {
        console.log(randomfood)
        try {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/${randomfood._id}`
            const response = await fetch(url, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },

            });
            if (response.ok) {
                console.log('fooddeleted')
            }
        } catch (error) {
            console.error("error deleting food", error)

        }

    }

    async function UpdateLike() {
        console.log(randomfood._id)
        console.log('yes')
    }
    
    return (
        <div className="container text-center">
            <h3>Random Food Selector 3000</h3>
            {randomfood && ( // Check if a review is selected
                <div className="card-div">
                    <Card className="custom-card">
                        <img src={randomfood.profilePicture} className="card-img" />
                        <CardTitle><h4 className="card-headers">Name:</h4> <h5>{randomfood.name}</h5></CardTitle>
                        <CardText><h4 className="card-headers">type: </h4> <p className="card-text-size">{randomfood.type}</p></CardText>
                        <CardText><h4 className="card-headers">price: </h4> <p className="card-text-size">{randomfood.price}</p></CardText>
                        <CardText><h4 className="card-headers">description: </h4> <p className="card-text-size">{randomfood.description}</p></CardText>
                        <CardText><h4 className="card-headers">section: </h4> <p className="card-text-size">{randomfood.section}</p></CardText>
                    </Card>
                </div>
            )}
            <Button className="btn-danger col-3" onClick={DeleteFood} navigate="/food/random">Destroy </Button>
            <Button className="btn-warning col-3" onClick={UpdateLike}> Like  </Button>
            <Button className="col-3"> Add to Cart</Button>
            {UpdateForm}
        </div>

    );
}


export default RandomFood