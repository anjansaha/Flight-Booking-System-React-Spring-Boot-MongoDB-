import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import Search from './Component/Search';
import SingUp from './Component/singup';
import Login from './Component/login';
import Home from './Component/home';
import AddFlight from './Component/AddFlight';
import Admin from './Component/Admin';
import FlightList from './Component/FlightList';
import AdminHeader from './Component/AdminHeader';
import SearchList from './Component/SearchList';
import Payment from './Component/Payment';
import Contact from './Component/Contact';
import Footter from './Component/Footter';
import CheackIn from './Component/CheackIn';
import HomeSy from './Component/HomeSy';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/singup"  >
          <Header/>
            <SingUp/>
          </Route>
          <Route path="/login" >
            <Header/>
              <Login />
          </Route>
          <Route path="/payment" >
              <Payment />
          </Route>
          <Route path="/list">
            <AdminHeader />
            <FlightList />
          </Route>
          <Route path="/addflight">
            <AdminHeader/>
            <AddFlight />
          </Route>
          <Route path={"/searchList"}>
            <Header />
            <SearchList />
          </Route>
          <Route path={"/cheack-in"}>
            <Header />
            <CheackIn />
          </Route>
          <Route path={"/admin"}>
            <AdminHeader />
            <Admin/>
          </Route>
          
          <Route path="/contact"> 
            <Contact />
            <Footter />
          </Route>
          <Route path="/">
            <div className='home'>
            <Header/>
            <Home />
            
            <Search/>
            <HomeSy />
            <Footter/>
            </div>
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
