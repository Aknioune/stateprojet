import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // définition de l'état initial du composant
  state = {
    person: {
      fullName: "Fatima zahra Aknioune",
      bio: "Je suis Fatima zahra aknioune j'ai 20 ans ,Etudiante en developpement informatique",
      imgSrc:
        "https://img.freepik.com/vecteurs-premium/developpement-web-logiciel-programmeur-femme-programmation-codage-script-travail-fille_352905-203.jpg",
      profession: "Web Developer",
    },
    shows: false, //  initial du bouton de montrer
    timeElapsed: 0, //  initial Time
  };

  // méthode pour inverser l'état de show (true / false)
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  // méthode qui calcule le temps
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
  }

  // méthode pour nettoyer l'interval lors de la destruction du composant
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // extraction des données du state
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <div>
          <button onClick={this.toggleShow}>{shows ? "Hide" : "Show"}</button>
          {shows && (
            <div className="info">
              <img src={imgSrc} alt={fullName} />
              <h1 className="name">{fullName}</h1>
              <p className="bio">{bio}</p>
              <p className="profession">{profession}</p>
            </div>
          )}
          <p className="time">Time : {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
