import { useState } from "react"
import { useHistory } from "react-router"
import useFetch from "./useFetch"




const Create = () => {
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [image, setImage] = useState('')
    const [services, setServices] = useState([])
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [description, setDescription] = useState('')
    const [picker, setPicker] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRestaurant = { name, description, picker };
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
    },1000)
        
        
    }

    return (

        
        <div className="create">
            <h2>Add a New Restaurant!</h2>
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
                value={cuisine}
                placeholder="Pick A Cuisine Type"
                onChange={(e) => setCuisine(e.target.value)}
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
                    onChange={(e) => setImage(e.target.value)}
                />

                <label>State:</label>
                <input
                    type="text"
                    required 
                    value={state}
                    onChange={(e) => setStreet(e.target.value)}
                />

                <label>Zip Code:</label>
                <input
                    type="text"
                    required 
                    value={zipcode}
                    onChange={(e) => setStreet(e.target.value)}
                />



                <label>Restaurant Description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Services Offered:</label><br />
                
                <label for="dinein">Dine In?</label>
                <input type="checkbox" id="dinein" name="dinein" value="Dine In" />
                <label for="takeout">Take Out?</label>
                <input type="checkbox" id="takeout" name="takeout" value="Take Out" />
                <label for="outdoorseating">Outdoor Seating?</label>
                <input type="checkbox" id="outdoorseating" name="Outdoor Seating" value="Outdoor Seating" />
                <label for="delivery">Delivery?</label>
                <input type="checkbox" id="delivery" name="Delivery" value="Delivery" />
                
  



                <br />
                

                <label>Restaurant Picker:</label>
                <select
                value={picker}
                onChange={(e) => setPicker(e.target.value)}
                >
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
                <p>{cuisine}</p>
                <p> <img src = {image} alt = "temp image" width="50%" height="50%"  /> </p>
                <p>{picker}</p>
                <p>{description}</p>
            </form>
        </div>        
    )
}

export default Create