import React, {Component} from 'react';
import './App.sass';
import TerrainCard from './TerrainCard';
import Card from './Card';

class App extends Component {

    constructor() {
        super();
        this.state = {
            characters: [],
            terrains: []
        }


    }

    componentDidMount() {
        fetch("/characters").then((resp) => {
            return resp.json();
        }).then((characters) => {
            console.log(characters);
            this.setState(() => {
                return {
                    characters: characters
                };
            })
        }).catch(console.error);

        fetch("/terrains").then((resp) => {
            return resp.json();
        }).then((terrains) => {
            console.log(terrains);
            this.setState(() => {
                return {
                    terrains: terrains,
                    characters: this.state.characters
                };
            })
        }).catch(console.error);
    }

    render() {
        return (
            <React.Fragment>
                {this.renderCharactersOfRace("Starfall Enklave")}
                {this.renderCharactersOfRace("Zwergenclan")}
                {this.renderCharactersOfRace("Schwarzholz Sippe")}
                {this.renderCharactersOfRace("Legion des Hohen Königs")}
            </React.Fragment>

        );
    }

    renderCharactersOfRace(type) {

        let dwarfs = this.state.characters.filter((character) => (
            character.fraction === type
        ));
        let terrains = this.state.terrains.filter((terrain) => (
            terrain.fractions.includes(type)
        ));
        return <section className="page">
                <ul>
                    {
                        dwarfs.map((character) => (
                            <li>
                                <Card character={character}/>
                            </li>
                        ))

                    }
                    {
                        terrains.map((terrain) => (
                            <li>
                                <TerrainCard terrain={terrain}/>
                            </li>
                        ))

                    }
                </ul>
            </section>
    }
}

export default App;
