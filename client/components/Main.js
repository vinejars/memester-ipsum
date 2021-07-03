import React, { Component } from 'react'
import Navbar from './Navbar'
import Left from './Left'
import Right from './Right'

export default class Main extends Component {
   
    render() {
        return (
            <div>
               <Navbar/> 
               <div id='column-maker'>
               <div className='left'><Left/></div>
               <div className='right'><Right/></div>
               </div>
            </div>
        )
    }
}
