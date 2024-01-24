import React, { Component } from 'react'
import  ListOfPlayer  from '../Share/ListOfPlayer'
import PlayersPresentation from './PlayersPresentation'

class Main extends Component{
    constructor() {
        super();
        this.state ={
            players: ListOfPlayer
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players}/>
    }
}

export default Main