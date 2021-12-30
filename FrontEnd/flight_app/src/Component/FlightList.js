import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './FlightList.css'
function FlightList() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

    const [Flight, setFlight]= useState([]);
	

    
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
      const DeleteFlight= async (ind)=>{
        alert("It will delete the flight ")
        await axios.delete(`http://localhost:8085/Flight-details//deleteflight/${ind}`)
        .then(
          setFlight(Flight.filter(Flight => Flight.id !== ind))
        )

      }

    return (
            <div className='list'>
              <h1 className='hOne'>LIST OF ALL FLIGHT</h1>
            <table className="Table">
            <thead className='TableHead'>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Time</th>
                    <th>Flight</th>
                    <th>Date</th>
                    <th>Fare</th>
                    <th>Option</th>
                </tr>
            </thead>

            <tbody>
            { Flight.map((Flight)=>(
                            <tr key={Flight.id}>
                            <td>{Flight.from}</td>
                            <td>{Flight.to}</td>
                            <td>{Flight.time}</td>
                            <td>{Flight.flight}</td>
                            <td>{Flight.date}</td>
                            <td className='fare'>{Flight.fare}</td>
                            <td >
                              <button className='button-49' onClick={()=>DeleteFlight(Flight.id)} >delete</button>
                              </td>
                  
                    </tr>
                  
                        ))
                    }
            </tbody>
            </table>
        </div>
    )
}

export default FlightList
