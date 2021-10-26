import {useState} from 'react'
import {useHistory} from 'react-router-dom'
function Filter({handleFilter}){
    const history = useHistory()
    const [type, setType] = useState("")
    const [random, setRandom] = useState(0)
    function handleClick(){
        let random = Math.floor(Math.random() * 10+1)
        fetch(`http://localhost:4000/restaurants/`)
        .then(r=>r.json())
        .then((data)=> {
            setRandom(Math.floor(Math.random()* data.length +1))
            history.push(`/restaurants/${random}`)
        })
    }

    
    return(
        <div>
       <label>Cuisine Type</label>
                <select
                value={type}
                placeholder="Pick A Cuisine Type"
                onChange={(e) => {
                    setType(e.target.value)
                handleFilter(e.target.value)}}
                
                >
                    <option value="">Pick A Cuisine Type:</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Taiwanese">Taiwanese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Italian">Italian</option>
                    <option value="Latin">Latin</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="Chophouse">Chophouse</option>
                    <option value="Delicatessen">Delicatessen</option>

                </select>

            <button onClick={handleClick} id="generator">What to Eat?</button>
        </div>
    )
}
export default Filter;