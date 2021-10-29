import { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import Alerts from "react-bootstrap/Alert"




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
    const [commentsToDisplay, setCommentsToDisplay]= useState()
    const [add, setAdd]=useState(false)
    
    function handleComments(e){ 
       setNewComment(e.target.value)}   

    function submitComment(){
        let updatedComments = commentsToDisplay ? ([...commentsToDisplay, newComment]) : [...restaurant.comments, newComment]
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
        .then((data)=> { 
        setCommentsToDisplay(data.comments)
        setAdd(!add)
        setNewComment([])
        })}
  

    function deleteComment(e){
        let idx = commentsToDisplay? (commentsToDisplay.indexOf(e)) : (restaurant.comments.indexOf(e))
        console.log(idx)
        let afterDeleted = commentsToDisplay? (commentsToDisplay.filter((comment)=> comment !== e)) : (restaurant.comments.filter((comment)=> comment !==e ))
        console.log(afterDeleted)
        fetch('http://localhost:4000/restaurants/' + restaurant.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                comments:  afterDeleted
              }),
            })
        .then(r=>r.json())
        .then((data)=> { 
        setCommentsToDisplay(data.comments)
        setAdd(!add)
        })
    }
    

    return(
        <div className="restaurant-details">
            { isLoading && <div>Loading...</div>}
            
            { error && <div>{error}</div>}
            
            {restaurant  && <article>
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
                            {restaurant.services.delivery ? <a href={restaurant.orderlink} ><button>Delivery</button></a> : null}
                            </h5>  
                        </div> 
                    </Col> 
                    </Row> 
                            </center>
                            </Container>
         
                <br></br>
                <div><h3>Description:</h3> {restaurant.description}</div>


                <div class="row">
  <div class="col-sm-6"><center><h3>Comments: </h3> </center>
                <center><p>
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                            <th>Comments:</th>
                            </tr>
                        </thead>
                        <tbody>
                   
                    {commentsToDisplay? (
                    commentsToDisplay.map((comment)=>{
                return <tr><td key={comment} id={comment} onClick={()=>deleteComment(comment)}>{comment}</td></tr>}) ) : (
                    restaurant.comments.map((comment)=>{
                return <tr><td key={comment} id={comment} onClick={()=>deleteComment(comment)} >{comment}</td></tr>}) )}
                </tbody></table>
                </p></center></div>
  
  <div class="col-sm-6"><center><h3>New Comment: </h3>
  <textarea
   class="form-control" rows="5" id="comment"
                    value={newComment}
                    onChange={handleComments}
                /><br></br>
                <button onClick={submitComment}>Add Comments</button>
                </center></div>
</div>
                
                
                <div class="alert alert-danger"><center>
                    
                <button type="button" class="btn btn-danger btn-lg btn-block" onClick={() => handleDelete(restaurant.id)}>Delete Restaurant</button>
                <br></br><strong>Danger!</strong> <br></br>This is irreversible.
                </center></div>
                </article>}
        </div>
    )
}

export default RestaurantDetails