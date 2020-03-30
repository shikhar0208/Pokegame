import React from "react";
import Pokecard from "./Pokecard";
import '../styles/Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        <h1 className={this.props.isWinner ? 'pokedex-winner' : 'pokedex-loser'}>
          {this.props.isWinner ? 'Winning Hand' : 'Losing Hand'}
        </h1>
        <h4 className="pokedex-exp">Total Experience: {this.props.exp}</h4>
        <div className="pokedex-cards">
          {this.props.pokemons.map(pokemon => (
            <Pokecard key={pokemon.id}
              id={pokemon.id}
              type={pokemon.type}
              name={pokemon.name}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
