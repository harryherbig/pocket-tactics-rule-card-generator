import React, {Component} from 'react';
import './App.sass';
import Card from './Card';

class App extends Component {

    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch("/characters").then((resp) => {
            return resp.json();
        }).then((characters) => {
            console.log(characters);
            this.setState(() => {
                return {characters: characters};
            })
        }).catch(console.error)
    }

    render() {
        return (

            <React.Fragment>
                <section className="page">
                    <ul>
                {
                    this.state.characters.map((character) => (
                        <li>
                        <Card character={character}/>
                        </li>
                    ))

                }
                    </ul>
                </section>
            </React.Fragment>

        );
    }
}

export default App;
