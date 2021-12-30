import axios from "axios"

const FLIGHT_REST_API_URL='http://localhost:8085/Flight-details/allFlight'
class FlightService{

    getFlight(){
        return axios.get( FLIGHT_REST_API_URL)
    }

}
export default new FlightService();