import React,{useState, useEffect} from 'react'
import './SearchList.css'
import './CheackIn.css'
import { useHistory } from "react-router-dom";
import axios from 'axios';
function SearchList() {
  let history = useHistory();
    const [Flight, setFlight]= useState(
    []
    );
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [buttonPopup, setPopup] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8085/Flight-details/allFlight")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setFlight(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
      const CheackIn=(id)=>{
         axios.post(`http://localhost:8085/Flight-Booking/saveFilght/${id}`)
        .then(
          history.push("/cheack-in", {ammount: Flight.fare})
        )

       

       }
    return (
            <div className='SearchCon'>
            <table className=''>
            <thead >
                <tr>
                    <th></th>
                    <div className='TableHead'>
                    <th>Time</th>
                    <th>Flight</th>
                    <th>Fare</th>
                    </div>
                    <th></th>
                </tr>
            </thead>

            <tbody>
             {Flight.map(Flight => (
          <tr key={Flight.id}>
            <td>
                <img className='logoImage' src="https://www.nicepng.com/png/detail/114-1141340_infinite-flight-logo-png.png" alt="" />
            </td>
            <div className='TD'>
          <td >{Flight.time}</td>
          <td >{Flight.flight}</td>
          <td >{Flight.fare}</td>
          </div>
          <td>
            <button  className='button-49' type='submit' onClick={()=>CheackIn(Flight.id)}>Book</button>
            </td>

  </tr>

        ))}
            </tbody>
            </table>
        </div>
    )
}

export default SearchList
