import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div id='navbar'>
           <img src='/headerimg.png' width={300}/>
           <a href='https://emcomeau.herokuapp.com'> Meet The Creator</a>
        </div>
    )
}
