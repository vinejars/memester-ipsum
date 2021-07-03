import React, { Component } from 'react'

let memeWords = ['many wow', 'you cant if you never', 'chicky nuggies', 'i dont always','chad', 'ermahgerd', 'doge', 'lol', 'omg wow', 'omg shoes', 'can haz cheeseburger', 'l33t', '!!!111!eleven', 'one does not simply', 'dont be like bill', 'not sure if... or just', 'shut up and take my money', 'me to me:', 'same', 'stonks', 'thats the joke', 'but thats none of my business', 'rawr', 'henlo', 'moar', 'uwu', 'theyre the same picture']
let otherWords = ['the one', 'and ok', 'and then', 'and so', 'let them', 'my and', 'your was', 'who is', 'our other', 'some time', 'and them', 'by the', ]

export default class Right extends Component {
    constructor(props){
        super(props);
        this.state = {
            ipsum : [],
            num: 0
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generate = this.generate.bind(this)
    }

    handleChange(evt) {
        if(parseInt(evt.target.value) > 0 && parseInt(evt.target.value) < 50 && parseInt(evt.target.value))
        this.setState({
          num : parseInt(evt.target.value),
        });
      }

    handleSubmit(){
        console.log(this.state.num)
        document.querySelector('input').value = '';
        this.generate()
    }


    generate(){
        let str = 'I am once again asking '
        for(let i =0; i < this.state.num; i++){
            for (let p = 0; p < 5; p++){
            for(let s=0; s< 15; s++){
                let randoMeme = memeWords[Math.floor(Math.random() * memeWords.length)];
                let randoOther = otherWords[Math.floor(Math.random() * otherWords.length)];
                console.log('randoMeme: ', randoMeme, 'randoOther: ', randoOther)
                if(s % 2 === 0){
                    str = str.concat(' ', randoOther)
                } else {
                   str = str.concat(' ', randoMeme)
                }
            }
            str = str.concat('.')
        }
        }
        this.setState({
            ipsum : str
        })
    }

    render() {
        return (
            <div>
                <div id='number-picker'>
                <h4>How many paragraphs?</h4>
                <input id='pnum' type='text' onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Submit</button>
                </div>
                <div>
                    <p>{this.state.ipsum}</p>
                </div>
            </div>
        )
    }
}
