import React from 'react';
import '../styles/Pokecard.css'

const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const singleToThree = (num) => ( (num<=999) ? `00${num}`.slice(-3) : num)

class Pokecard extends React.Component {
  render() {
    let id= singleToThree(this.props.id)
    let imgSrc = `${Poke_API}${id}.png`;
    return (
      <div className="pokecard">
      <h2 className="pokecard-title">{this.props.name}</h2>
      <div className="pokecard-image">
        <img src={imgSrc} alt={this.props.name} />
      </div>
      <div className="pokecard-data">
        Type: {this.props.type}
      </div>
      <div className="pokecard-data">
        Exp: {this.props.base_experience}
      </div>
    </div>
    )
  }
}

export default Pokecard;