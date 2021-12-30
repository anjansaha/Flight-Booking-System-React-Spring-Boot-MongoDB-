const InitialState=0;


const AddPay=(state= InitialState, action)=>{
    switch(action.type){
        case "PAY" : return Flight.fare;
        default: return state;
    }
}
export default AddPay 