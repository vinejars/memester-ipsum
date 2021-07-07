import React, { Component } from 'react'

let memeArr = ['/meme1.png', '/meme2.png','/meme3.png','/meme4.png','/meme5.png','/meme6.png', '/meme7.png']

export default class Carousel extends Component {
    constructor(){
        super()
        this.state = {
            counter : 0
        }
    }
   componentDidMount(){
       setInterval(() =>{
           if(this.state.counter < 6){
               this.setState({
                   counter: this.state.counter += 1
               })
           } else {
               this.setState({
                   counter: 0
               })

           }
                          console.log(this.state.counter)
       }, 3000)
   }

    render() {
        return (
            <div id='meme-container'>
                <img src={memeArr[this.state.counter]} width={350} className='meme'/>
            </div>
        )
    }
}
