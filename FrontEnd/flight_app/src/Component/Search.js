import React, {useState, useEffect} from 'react'
import './search.css'

function Search() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Flight, setFlight]= useState([]);
    const [SerchFlight, setSerchFlight]=useState({
        from:null,
        to:null,
        date:null
    });
    const {from, to, date}= SerchFlight;
    const onChange=e=>{

        setSerchFlight({...SerchFlight,[e.target.name]: e.target.value});
    };
	const OnClick= async e=>{
            fetch(`http://localhost:8085/Flight-details/flights/from=${from}}&to=${to}&date=${date}`)
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setFlight(result);
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
              console.log(setFlight)
          }
	
    return (

    <>
        <div className='from'>
            <form action='/searchList'>
                
                <div className='Search'>
                    <label htmlFor='From' className='lable'>From</label>
                    <input 
                        type="text" 
                        name='from' 
                        required="required"
                        onChange={e=>onChange(e)}
                        className='to'/>
                    <label htmlFor='To'className='lable'>To</label>
                    <input 
                        type="text" 
                        name='to'
                        required="required"
                        onChange={e=>onChange(e)}
                        className='to'/>
                    <label for="Depart"className='lable'>Depart</label>
                    <span id="date-format"></span>
                    <input 
                        type="date" 
                        id="date" 
                        className='to' 
                        name='date' 
                        required="required"
                        onChange={e=>onChange(e)}
                        aria-describedby="date-format" 
                        min="2021-03-01" max="2031-01-01" />
                        <br /><br /><br />
                    <button type='submit'className='button' onClick={e=>OnClick(e)} >Surch flight</button>
                
                </div>
                
                   
                

            </form>
            
            
        </div>
       
        </>
    )
}

export default Search;
