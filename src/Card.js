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
                            <div id='dice_offense' className='dice box left'>
                                {this.dice(char.dice_defense, "orange", "left")}
                                <h2 className="bump_text">{this.dice_bump(char.bump_offense)}</h2>
                            </div>

                            <div id='dice_defense right' className='dice box right'>
                                <h2 className="bump_text">{this.dice_bump(char.bump_defense)}</h2>
                                {this.dice(char.dice_defense, "green", "right")}

                            </div>
                        </div>
                        <div className='frame-header'>
                            <h1 className='name bigserif'>{char.name}</h1>

                        </div>
                        <div className='char-images'>
                            <img className='char char_image' src={process.env.PUBLIC_URL + 'img/dwarf.png'}/>
                            <img className='favourite_terrain char_image'
                                 src={process.env.PUBLIC_URL + 'img/plains_tile.png'}/>
                        </div>


                        <div className='frame-type-line types'>
                            <div id='types'>
                            </div>
                                <h2 className='types bigserif'>Rasse: {char.race}, Rang: {char.rank}, Fraktion: {char.fraction}, Zusatz: {char.addition} </h2>


                        </div>

                        <div className='frame-text-box'>
                            <h3 className='abilityname'>Fähigkeit: "{char.ability_name}"</h3>
                            <p className='abilitytext'>
                                {char.ability_text}
                            </p>


                        </div>

                    </div>

                </div>

            </div>

        );
    }

    dice(amount, color, position) {
        var i = 0;
        var indents = [];
        while(i++ < amount) {
            indents.push(<img className={"dice defense"} src={process.env.PUBLIC_URL + `img/${color}_die.ico`}/>);
        }
        return indents;
    }
    dice_bump(amount) {
        if (amount > 0) {
            return `+${amount}`
        } else return "";
    }
}

export default Card;
