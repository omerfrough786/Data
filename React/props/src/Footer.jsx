import React from 'react'

 const Footer = (props) => {

  
    return (
        <footer className='bg-dark text-white d-flex justify-content-center' style={{ position: 'absolute', bottom: '0', width: '100vw'}}>

        <h1 className='text-danger ml-5'>{props.titleFooter}</h1>

        </footer>
    )
}


export default Footer