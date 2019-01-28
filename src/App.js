import React, {Component} from 'react';
import './App.css';
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
                <div className="cardoverview">
                {
                    this.state.characters.map((character) => (

                        <Card character={character}/>

                    ))

                }
                </div>
            </React.Fragment>

        );
    }
}

export default App;
