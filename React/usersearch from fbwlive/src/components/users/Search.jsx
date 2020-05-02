import React, { Component } from 'react'

class Search extends Component {
    state ={
        text:''
    };
    changeHandler = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        //when we have a class component in react and we have an eventHandler in return then we should use the method as arrow function otherwise it will not work. 
        return (

            <form className='form'>
                <input type="text" name='text' value={this.state.text} placeholder='Search Users' onChange={this.changeHandler}/>
                <input className='btn btn-dark btn-block' type="submit" value='Search'/>
            </form>
            
        )
    }
}

export default Search
