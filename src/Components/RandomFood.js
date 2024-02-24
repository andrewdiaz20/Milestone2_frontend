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
        console.log(randomfood)
        console.log('yes')
        const newLikeCount = (randomfood.likes || 0) + 1;
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/${randomfood._id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({likes: newLikeCount }),
        });

    }

    async function handleClick() {
        UpdateLike();
        setTimeout(() => {
            window.location.reload();
        },1000)
    }

    async function handleClick2(){
        DeleteFood();
        setTimeout(() => {
            window.location.reload();
        },1000)
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
                        <CardText><h4 className="card-headers">Likes: </h4> <p className="card-text-size">{randomfood.likes}</p></CardText>
                      
                    </Card>
                </div>
            )}
            <Button className="btn-danger col-3" onClick={handleClick2} navigate="/food/random">Destroy </Button>
            <Button className="btn-warning col-3" onClick={handleClick}> Like  </Button>
            <Button className="col-3"> Add to Cart</Button>
            {UpdateForm}
        </div>

    );
}


export default RandomFood