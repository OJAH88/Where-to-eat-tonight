import { useState } from "react"
import React, { useHistory, useParams } from "react-router"
import useFetch from "./useFetch"
import Button from 'react-bootstrap/Button';





const Create = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState('')
    const [menu, setMenu] = useState('')
    const [services, setServices] = useState([])
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [dinein, setDinein] = useState('')
    const [takeout, setTakeout] = useState('')
    const [outdoorseating, setOutdoorseating] = useState('')
    const [delivery, setDelivery] = useState('')
    const [description, setDescription] = useState('')
    const [comments, setComments] = useState([])
    const [picker, setPicker] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRestaurant = { name, type, image, description, address:{street, city, state, zipcode}, menu, services:{dinein, takeout, outdoorseating, delivery}, comments, picker };
        console.log(newRestaurant)

        setIsLoading(true);


        setTimeout(() => {
        fetch('http://localhost:4000/restaurants', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newRestaurant)
        }).then(() => {
            console.log('New Restaurant Added!!')
            setIsLoading(false)
            // history.go(-1)     goes back one page
            history.push('/')
        })
    },500)
        
        
    }

    return (

        
        <div className="create">
            <h1>Add a New Restaurant!</h1>
            <form onSubmit={handleSubmit}>
                <label>Restaurant Name:</label>
                <input
                    type="text"
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Cuisine:</label>
                <select
                value={type}
                placeholder="Pick A Cuisine Type"
                onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Pick A Cuisine Type:</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Taiwanese">Taiwanese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Italian">Italian</option>
                    <option value="Latin">Latin</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Chophouse">Chophouse</option>
                    <option value="Delicatessen">Delicatessen</option>

                </select>

                <label>Image Link:</label>
                <input
                    type="text"
                    required 
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <label>Street Address:</label>
                <input
                    type="text"
                    required 
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />

                <label>City:</label>
                <input
                    type="text"
                    required 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label>State:</label>
                <input
                    type="text"
                    required 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />

                <label>Zip Code:</label>
                <input
                    type="text"
                    required 
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />



                <label>Restaurant Description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Comments:</label>
                <textarea
                    required
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />

                <label>Services Offered:</label><br />
                
                <label for="dinein">Dine In?</label>
                <input type="checkbox" id="dinein" name="dinein" value="Dine In"  onChange={(e) => setDinein(e.target.value)}/>
                <label for="takeout">Take Out?</label>
                <input type="checkbox" id="takeout" name="takeout" value="Take Out"  onChange={(e) => setTakeout(e.target.value)}/>
                <label for="outdoorseating">Outdoor Seating?</label>
                <input type="checkbox" id="outdoorseating" name="Outdoor Seating" value="Outdoor Seating" onChange={(e) => setOutdoorseating(e.target.value)}/>
                <label for="delivery">Delivery?</label>
                <input type="checkbox" id="delivery" name="Delivery" value="Delivery" onChange={(e) => setDelivery(e.target.value)}/>
                
  



                <br />
                

                <label>Restaurant Picker:</label>
                <select
                value={picker}
                onChange={(e) => setPicker(e.target.value)}>
                    <option value="">Pick a Picker</option>
                    <option value="Jane">Jane</option>
                    <option value="Jesse">Jesse</option>
                    
                </select>
                {!isLoading&&<button>Add Restaurant</button>} 
                {isLoading&&<button>Adding...</button>} 
                <br></br>
                <br></br>
                <h2>Restaurant Post Preview:</h2>
                <p>{name}</p>
                <p>{type}</p>
                <p> <img src = {image} alt = "temp image" width="50%" height="50%"  /> </p>
                <p> {street} {city} {state} {zipcode}</p>
                <p> {dinein}{' '}{takeout}{' '}{outdoorseating}{' '}{delivery} </p>
                <p>{picker}</p>
                <p>{description}</p>
                <p>{comments}</p>
            </form>
        </div>        
    )
}

export default Create