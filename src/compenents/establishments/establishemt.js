//Inporter Component de React est obligatoire pour pouvoir créer un compenent
import React, { Component } from 'react'

class Establishment extends Component {
    //tjs un render dans un compenent
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            liking: 0,
            disliking: 0,
            star : false
        };
    }
    //method pour liker
    liking = () => {
        let like = this.state.liking + 1
        this.setState({
            liking: like
        })
    }
    //method pour disliker
    disliking = () => {
        let dislike = this.state.disliking + 1
        this.setState({
            disliking: dislike
        })
    }
    //method pour mettre en favori
    staring = () => {
        let starState = this.state.star
        this.setState({
            //star équivaut à l'inverse de lui même c'est à dire soit à true s'il est initialement false et inversément
            star : !starState
            //permet de créer un simple switch d'état qui permet avec une simple condition de mettre l'icone en orange ou non 
        })
    }
    render() {
        //variable contenant l'icone star
        let star = <i className="fas fa-star"></i>

        //créer le switch d'état
        if(this.state.star/*==true*/){ 
            star = <i className="fas fa-star StarOne"></i>
        }
        else/* this.state.star == false */{
            star = <i className="fas fa-star"></i>
        }
        //ce qui est généré dans la page html
        return (
            //icone star 
            <div className="establishment">
                <h3>
                    {this.props.establishment.name}
                </h3>
                <p>
                    {this.props.establishment.description}
                </p>
                <p>Like = {this.state.liking /*affiche les likes contenu dans le stat */} Dislike = {this.state.disliking /*affiche les dislikes contenu dans le stat */} </p>
                <button onClick={this.liking /*appelle la fonction */}>Like</button>
                <button onClick={this.disliking /*appelle la fonction */}>Dislike</button>
                <div onClick={ this.staring }>{ star }</div>
            </div>
        )
    }
}
export default Establishment;