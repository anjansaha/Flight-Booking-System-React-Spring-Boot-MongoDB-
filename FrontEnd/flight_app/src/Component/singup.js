import React, {useState} from 'react'

import axios from 'axios';

import { useHistory } from "react-router-dom";

import './singup.css';

function SingUp() {
	let history = useHistory();
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	
	const [User, setUser]= useState({
		name:null,
		email:null,
		password:null,
		phnumber:null
	});
	
    
    const {name, email, password,phnumber}=User;

    const onChange = e=>{
		setUser({...User,[e.target.name]: e.target.value});
	};
	const onSubmit=  e=>{
		e.preventDefault();
	 axios.post("http://localhost:8085/Flight-user/saveUser",User)
              .then(
                (result) => {
                  setIsLoaded(true);
                  history.push({
					pathname: '/login',
				
				})
                },
                (error) => {
                  setIsLoaded(true);
                  setError(error);
				  alert("This Email Id already used")
                }
              
		);
	};

    return (
        <>
      <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form onSubmit={e=>onSubmit(e)} >
					<label className='singname' for="chk" aria-hidden="true">Sign up</label>				
					<input 
						className='singupInput' 
						type="text" 
						name="name" 
						placeholder="name" 
						required="required"
						value={name}
						onChange={e=>onChange(e)}/>

					<input 
						className='singupInput' 
						type="email" 
						name="email" 
						placeholder="Email" 
						required="required"
						value={email}
						onChange={e=>onChange(e)}/>
					<input 
						className='singupInput' 
						type="password" 
						name="password" 
						placeholder="Password" 
						value={password}
						required="required"
						onChange={e=>onChange(e)} />
                    <input 
						className='singupInput' 
						type="text" 
						name="phnumber" 
						placeholder="Phone Number"
						required="required"
						value={phnumber} 
						onChange={e=>onChange(e)} />
					<button className='button1'>Sign up</button>
				</form>
			</div>
	

			
	</div>
	
    </>
    )
}

export default SingUp
