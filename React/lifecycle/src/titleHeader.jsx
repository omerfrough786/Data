import React, { Component } from 'react'

export class titleHeader extends Component {

    state = {
        title: ''
    };
    static getDerivedStateFromProps(props, state){
        console.log('sync state with props')
        console.log('current state' , state.title)
        console.log('new props' , props.newTitle)

        if(state.title !== props.newTitle){
            return {
                title: props.newTitle
            }
        }else{
            return null;
        }
    }
  
    componentDidMount(){
        console.log('component did mount')
        let header = document.querySelector('h1')
        header.style.background = 'yellow'
    }

    componentDidUpdate(){
        let header = document.querySelector('h1')
        header.style.background = 'green'
    }

    componentWillUnmount(){
        console.log('component will unmount')
        alert('component will unmount')
        this.setState({
            title: ''
        })
    }
    
    render() {
        console.log('component is rendered', this.state.title)
        return (
            <h1>{this.state.title}</h1>
        )
    }
}

export default titleHeader
