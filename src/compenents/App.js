import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { establishments } from './establishments/fixtures'
import Establishment from './establishments/establishemt'
//import icônes
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  constructor(props) {
    // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
    super(props);
    // On définit le state de notre component que l'on hérite de la classe "Component"
    // Cela remplace la fonction "getInitialState"
    this.state = {
      pseudo: "Inconnu",
      matricule: "??"
    };
  }
  // On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
  // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
  randomPseudo = () => {
    // On s'amuse un peu ;)
    let randomPseudo = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size = Math.floor(Math.random() * 10) + 5
    for (let i = 0; i < size; i++) {
      randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    // On met à jour le state via la fonction "setState" héritée de la classe Component
    this.setState({
      pseudo: randomPseudo
    })
  }
  randommatricule = () => {
    let size = Math.floor(Math.random()*10000);
    this.setState({
      matricule : size
    })
  }
  render() {
    //Création d'une constante qui contiendra ce que la fonction map appliquera sur tout les éléments du tableau
    //Dans notre cas la constante contiendra les info du tableau en JSX ce qui permettra de les afficher par la suite à l'aide du return
    const listEstablishement = establishments.map((establishment) => {
      return (
        // L'attribut "key" permet à React d'identifier les éléments.
        // Cela améliore les performances lors de l'ajout,
        // la modification et la suppression d'un élément.
        <Establishment
          key={establishment.id}
          //J'établis la "connexion" entre les propriétés; les props et ce qu'ils doivent contenir
          establishment={establishment}
          className="establishment"
        />
      );
    });
  
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome "{ this.state.pseudo }" to {this.props.title}</h2>
            <h3>Voici ton matricule : { this.state.matricule } </h3>
            <p>{this.props.phrase}</p>
            <p>
              Happy Drink<code>(Bad Propaganda)</code>
            </p>
           <button onClick={ this.randomPseudo } >Changer le pseudo !</button>
           <button onClick={ this.randommatricule } >Quelle est ton matricule ?</button>
          </header>
          <div className="App-establishment">
            {listEstablishement}
          </div>
        </div>
      </Fragment>
    );
  }
}


export default App;

