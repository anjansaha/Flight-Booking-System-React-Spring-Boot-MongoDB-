import React, { Component } from "react";
import './login.css'

class Login extends Component {
    render() {
        return (
            <div className="SinginPage">
            <div className='Singin'>
            <form >
                 
                
                <div className='Login'>
                    <div className="LOGIN">
                    <h2 >LOGIN</h2>
                    </div>
                    <label htmlFor='EmailId'>Email</label>
                    <br />
                    <input type="email" name='EmailId'className='EmailId'/>
                    <br /><br />
                    <label for="password">Password</label>
                    <br />
                    <input type="password" id="password" className='password'/>
                    <br /><br />
                    <button type='submit'className='button2'>login</button>
                    <br />
                    <a href="/singup">SingUp?</a>
                
                </div>
                
                    
                

            </form>
           
            
        </div>
        </div>
        );
    }
}
export default Login;