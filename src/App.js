import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Customers from './Customers';
import './App.css';
import SingleCustomer from './SingleCustomer';
const customers = [
  {
    id: 1, name: "Seytech", lastName: "Co", avatar: "https://www.seytech.co/images/logo.png",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 2, name: "Eliza", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/68719361?s=100&v=4",
    email: "eliza@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 3, name: "Adilet", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/55602501?s=100&v=4",
    email: "adilet@seytech.co", state: "WA", phone: 1234567703,
    role: "instructor", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 4, name: "Max", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/40704457?s=100&v=4",
    email: "0max@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 5, name: "Ulan", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/16879917?s=100&v=4",
    email: "rUlan@seytech.co", state: "WA", phone: 1234567703,
    role: "admin", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
]
class App extends Component {
  constructor(){
    super();
    this.state = {
      customers,
    }
  }
  render(){
    return (
    <div className="container">
    <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          </ul>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path='/customers'>
            <h1>Seytech Customers</h1>
            <Customers customers={this.state.customers} />
          </Route>
          <Route path='/customer/:id'> 
            <SingleCustomer customers={this.state.customers}/>
          </Route>
        </Switch>
    </Router>
    </div>            
    )
  }
}
export default App;
function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}