import React, { Component } from 'react'
import Search from './components/users/Search.jsx'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import App from './App.jsx'


export class Home extends Component {
 
    render() {
        const style={
            minHeight: '15vh',
    
            list:{
                listStyle: 'none',
                width: '50%'
                
            },
        }
        return (
            <Router>
            <>
            <nav className='d-flex justify-content-between align-items-center bg-dark text-white' style={style}>
            <h3 className='ml-5'>Simple Router</h3> 
            <ul className='d-flex justify-content-around align-items-center mt-2' style={style.list}>
                    {/* <button className='btn btn-dark'>Click me</button> */}
                {/* <Link to='/' className='text-white'><li>Home</li></Link>
                <Link to='/about' className='text-white'><li>About us</li></Link>
                <Link to='/contact' className='text-white'><li>Contact us</li></Link> */}
                
            </ul>    
            </nav>
            <ul className='d-flex justify-content-around align-items-center mt-5' style={style.list}>
            <Link to='/app'><button className='btn btn-dark'>User Search</button></Link>
                    
               <Switch>
                   <Route path='/app' render={props => <App/>}/>
                     
               </Switch>
                
            </ul>
            </>
            </Router>
        )
    }
}

export default Home
