import {createStore} from 'redux';
import RootReducer from "../reducer/Reducer"
const Store= createStore(RootReducer);
export default Store;