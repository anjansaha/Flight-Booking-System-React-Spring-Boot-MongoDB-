import React from 'react'
import './SearchList.js'
function Payment() {
   const onChange= e=>{

    }
    return (
        <div className='CheackIn'>
            <div>
                <img className='img1' src="https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png" alt="" />
                <img className='img2' src="https://zeevector.com/wp-content/uploads/Logo-Visa-Card-PNG.png" alt="" />
            <img className='img3' src="https://i2.wp.com/zeevector.com/wp-content/uploads/2021/03/rupay-logo.png?resize=600%2C358&ssl=1" alt="" />
          
            </div>
        <div className='popup'>
            <h2 className='hedu'>Pay With Card</h2>
            <div className='fr'>
           <form className='frg'>
               <img src="" alt="" />
               <label for="fristName" aria-hidden="true">Holder Name</label>
               <label className='cardNum'  for="CaredNumber" aria-hidden="true"> Card Number</label>
               <br />
               <input 
                   type="text" 
                   name='Holder Name'
                   required='required'
                   placeholder='Enter Card Holder Name '
                   onChange={e=>onChange(e)}/> 
                  
                   <input 
                   type="Number" 
                   name="CardNumber"
                   required='required'
                   className='last'
                   placeholder='XXXX XXXX XXXX'
                   onChange={e=>onChange(e)}/> 
                   <br />
                   <label  for="age" aria-hidden="true">Expire date</label>
                   <label className='Lsatname'   for="cvv" aria-hidden="true">CVV</label>
                   <br />
               <input 
                   type="text" 
                   name='date'
                   required='required'
                   placeholder='mm/yy'
                   onChange={e=>onChange(e)}/>   
                     
                   
                   <input 
                       type="text" 
                       name='cvv'
                       required='required'
                       className='last'
                       placeholder='123'onChange={e=>onChange(e)}
                       />
                      </form>
                      <button className='buttton99'>PAY</button> 
                    </div>
                </div>
          </div>
    )
}

export default Payment
