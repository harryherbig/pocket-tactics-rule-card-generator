import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const char = this.props.character;
        return (
            <div className='card-container'>
                <div className='card-background'>
                    <div className='card-frame'>
                        <div id='dice'>
                            <div id='dice_offense' className='dice box'>
                                <img className='dice offensee' src={process.env.PUBLIC_URL + 'img/offense.png'}/>
                            </div>
                            <div id='dice_defense' className='dice box'>
                                <img className='dice defense' src={process.env.PUBLIC_URL + 'img/defence.png'}/>
                            </div>
                        </div>
                        <div className='frame-header'>
                            <h1 className='name'>{char.name}</h1>

                        </div>
                        <div className='char-images'>
                            <img className='char char_image' src={process.env.PUBLIC_URL + 'img/dwarf.png'}/>
                            <img className='favourite_terrain char_image'
                                 src={process.env.PUBLIC_URL + 'img/plains_tile.png'}/>
                        </div>


                        <div className='frame-type-line'>
                            <div id='types'>
                                <h2 className='types'>Rasse: {char.race}, Rang: {char.rank}, Fraktion: {char.fraction} </h2>
                            </div>


                        </div>

                        <div className='frame-text-box'>
                            <h3>{char.ability_name}</h3>
                            <p className='description ftb-inner-margin'>
                                {char.ability_text}
                                Wird der Dwarfclan Bondi von einer benachbarten Fliese aus angegriffen, erhält
                                er <b>+1 Bonus </b> auf ein <b>OFF</b>ensives Würfelergebnis.
                            </p>


                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default Card;
