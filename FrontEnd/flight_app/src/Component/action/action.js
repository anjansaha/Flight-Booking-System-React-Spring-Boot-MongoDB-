export const addpay=(number=1)=>{
    return{
        type:"PAY",
        payload: number

    }
}