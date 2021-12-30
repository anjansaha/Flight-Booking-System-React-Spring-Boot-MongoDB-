
import './AddFlight.css'
import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function AddFlight() {
    let history = useHistory();
    const [Flight, setFlight]= useState({
		from:null,
        to:null,
        time:null,
        flight:null,
        fare:null,
        date:null

	});
	
    
    const {from, to, time,flight,fare,date}=Flight;

    const onChange = e=>{
		setFlight({...Flight,[e.target.name]: e.target.value});
	};
	const onSubmit= async e=>{
		e.preventDefault();
		await axios.post("http://localhost:8085/Flight-details/addflight",Flight);
        history.push("/list")
		
	};
    return (
        <div className='addFlight'>
              <h1>ADD FLIGHT</h1>
                <br /><br />
                <div className='FromOf'>
            <form  onSubmit={e=>{onSubmit(e)}}>
              
                <input 
                    type="text" 
                    name='from'
                    value={from}
                    className='inputAdd'
                    placeholder='Depacher'
                    required="required"
                    onChange={e=>{onChange(e)}}
                    />
                    <br /> <br />
                <input 
                    type="text" 
                    name='to'
                    value={to}
                    className='inputAdd'
                    placeholder='Arival'
                    required="required"
                    onChange={e=>{onChange(e)}}
                    />
                    <br /> <br />
                <input 
                    type="text" 
                    name='time'
                    value={time}
                    className='inputAdd'
                    placeholder='Time'
                    required="required"
                    onChange={e=>{onChange(e)}}
                    />
                    <br /> <br />
                <input 
                    type="text" 
                    name='flight'
                    value={flight}
                    className='inputAdd'
                    placeholder='Flight numbrt'
                    required="required"
                    onChange={e=>{onChange(e)}}
                    />
                    <br /><br />
                <input 
                    type="text"
                    name='fare' 
                    value={fare}
                    className='inputAdd'
                    placeholder='Fare'
                    required="required"
                    onChange={e=>{onChange(e)}}
                    />
                    <br /><br />
                <input 
                    type="date" 
                    name='date'
                    value={date}
                    className='inputAdd'
                    aria-describedby="date-format" 
                        min="2021-03-01" max="2031-01-01"
                        required="required"
                        onChange={e=>{onChange(e)}}
                         />
                        <br /><br />
                 <button className='button-30'>submit</button>       


            </form>
            </div>
        </div>
    )
}

export default AddFlight
