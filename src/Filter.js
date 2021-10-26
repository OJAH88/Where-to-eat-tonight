import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


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
        <div className = "filter"><center>
       <label><h4>Filter By Cuisine Type</h4></label>
       <br />
                
                    <button class="btn-lg" value="" onClick={handleFilter}>All Cuisines</button>{' '}<br />
                    <button value="Chinese" onClick={handleFilter}>Chinese</button>{' '}
                    <button value="Taiwanese" onClick={handleFilter}>Taiwanese</button>{' '}
                    <button value="Japanese" onClick={handleFilter}>Japanese</button>{' '}
                    <button value="Vietnamese" onClick={handleFilter}>Vietnamese</button><br />
                    <button value="Italian" onClick={handleFilter}>Italian</button>{' '}
                    <button value="Latin" onClick={handleFilter}>Latin</button>{' '}
                    <button value="Middle Eastern" onClick={handleFilter}>Middle Eastern</button>{' '}
                    <button value="Chophouse" onClick={handleFilter}>Chophouse</button>{' '}
                    <button value="Delicatessen" onClick={handleFilter}>Delicatessen</button>

                {/* </select> */}

           <div>
           <br />
                <h5>Still can't decide?</h5>
               
               <button class="btn-lg" onClick={handleClick} id="generator">Let Fate Choose</button>
        </div></center></div>
    )
}
export default Filter;