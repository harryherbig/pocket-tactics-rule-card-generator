import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const char = this.props.character;
        return (
            <card>
            <div className='card-container'>
                <div className='card-background'>
                    <div className='card-frame'>
                        <div id='dice'>
                            <div id='dice_offense' className='dice box left'>
                                <img className='offense symbol' src={process.env.PUBLIC_URL + 'img/icon-offense.png'}/>
                                {this.dice(char.dice_defense, "orange", "left")}
                                <span className="bump_text">{Card.dice_bump(char.bump_offense)}</span>
                            </div>

                            <div id='dice_defense right' className='dice box right'>
                                {this.dice(char.dice_defense, "green", "right")}
                                <span className="bump_text">{Card.dice_bump(char.bump_defense)}</span>
                                <img className='offense symbol' src={process.env.PUBLIC_URL + 'img/icon-defense.png'}/>
                            </div>
                        </div>
                        <div className='textbox name'>
                            <span className='name'>{char.name}</span>

                        </div>
                        <div className='char-images'>
                            <img className='char char_image' src={process.env.PUBLIC_URL + 'img/dwarf.png'}/>
                            <img className='favourite_terrain char_image'
                                 src={process.env.PUBLIC_URL + 'img/plains_tile.png'}/>
                        </div>


                        <div className='textbox types'>
                                {Card.characterTypes(char)}
                        </div>

                        <div className='textbox ability'>
                            <span className='abilityname longtext'>Fähigkeit: "{char.ability_name}"</span>
                            <p className='abilitytext longtext'>
                                {char.ability_text}
                            </p>


                        </div>

                    </div>

                </div>

            </div>
            </card>
        );
    }

    dice(amount, color, position) {
        var i = 0;
        var indents = [];
        while(i++ < amount) {
            indents.push(<img className={"dice symbol defense"} src={process.env.PUBLIC_URL + `img/${color}_die.ico`}/>);
        }
        return indents;
    };
    static dice_bump(amount) {
        if (amount > 0) {
            return `+${amount}`
        } else return "";
    };

    static characterTypes(char) {
        var types = `${char.race}, ${char.fraction}, ${char.rank}`;
        if (char.addition)
            types = types + `, ${char.addition}`
        return <span className="types">{types}</span>
    };
}


export default Card;
