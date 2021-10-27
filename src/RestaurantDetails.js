import { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useState } from "react"



const RestaurantDetails = () => {
    const {id} = useParams()
    const { data: restaurant, error, isLoading } = useFetch('http://localhost:4000/restaurants/' + id)
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:4000/restaurants/' + restaurant.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')

        })
        
    }
    const [newComment , setNewComment]= useState([])
    function handleComments(e){ 
       setNewComment(e.target.value)}
    function submitComment(){
        let updatedComments = [...restaurant.comments, newComment]
        fetch('http://localhost:4000/restaurants/' + restaurant.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                comments:  updatedComments
              }),
            })
        .then(r=>r.json())
        .then((data)=> { console.log(data)
        history.push("/restaurants")})    
        
    }

    return(
        <div className="restaurant-details">
            { isLoading && <div>Loading...</div>}
            
            { error && <div>{error}</div>}
            
            {restaurant && <article>
                <center><h1>{restaurant.name}</h1>
             
                <p><h5>Picked By:  {restaurant.picker} </h5></p></center>

                <Container fluid><center>
                    <Row>
                <Col><img src={restaurant.image}  className='img-fluid rounded-pill shadow-2-strong' border='2px solid' border-color= '#f1356d' style={{ maxWidth: '20rem' }} /><br /> <br />

                <a href={restaurant.menu} target="_blank"> <button>Click Here For Menu</button></a></Col>

                <Col><p><h4>Cuisine:  {restaurant.type}  </h4></p> 

                <p><h5>Address:</h5>{restaurant.address.street} <br />{restaurant.address.city},  {restaurant.address.state}  {restaurant.address.zipcode}</p>

                <div>
                    <h5>Restaurant Features:
                        <br />
                            {restaurant.services.dinein ? <a href="http://www.google.com/" target="_blank"> <button>Dine In</button></a> : null}{' '} 
                            {restaurant.services.takeout ? <a href="http://www.google.com" target="_blank"><button>Take Out</button></a>: null}{' '}
                            {restaurant.services.outdoorseating ? <a href="http://www.google.com" target="_blank"><button>Outdoor Seating</button></a> : null}{' '}
                            {restaurant.services.delivery ? <a href="http://www.google.com" target="_blank"><button>Delivery</button></a> : null}
                            </h5>  
                        </div> 
                    </Col> 
                    </Row> 
                            </center>
                            </Container>
         
                <br></br>
                <div><h3>Description:</h3> {restaurant.description}</div>
                <div><h3>Comments: </h3> 
                <p>{restaurant.comments.map((comment)=>{
                return <li>{comment}</li>})}</p>
                </div>
                <textarea
                    value={newComment}
                    onChange={handleComments}
                />
                <button onClick={submitComment}>Add Comments</button>

                <br></br>
                
               <div className= "remove">
                <button onClick={() => handleDelete(restaurant.id)}>Delete Restaurant</button></div>
                </article>}
        </div>
    )
}

export default RestaurantDetails
