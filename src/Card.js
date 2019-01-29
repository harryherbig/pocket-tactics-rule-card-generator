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
                                <span className="bump_text">{Card.dice_bump(char.bump_offense)}</span>
                            </div>

                            <div id='dice_defense right' className='dice box right'>
                                {this.dice(char.dice_defense, "green", "right")}
                                <span className="bump_text">{Card.dice_bump(char.bump_defense)}</span>

                            </div>
                        </div>
                        <div className='frame-header name'>
                            <h1 className='name bigserif'>{char.name}</h1>

                        </div>
                        <div className='char-images'>
                            <img className='char char_image' src={process.env.PUBLIC_URL + 'img/dwarf.png'}/>
                            <img className='favourite_terrain char_image'
                                 src={process.env.PUBLIC_URL + 'img/plains_tile.png'}/>
                        </div>


                        <div className='frame-header types'>
                            <div id='types'>
                            {/*<h2 className='types bigserif'><u>Rasse:</u> {char.race}, <u>Rang:</u> {char.rank}*/}
                            {/*<br/><u>Fraktion:</u> {char.fraction}, <u>Zusatz:</u> {char.addition} </h2>*/}
                                {Card.characterTypes(char)}
                            </div>
                        </div>

                        <div className='frame-text-box'>
                            <h3 className='ability abilityname'>Fähigkeit: "{char.ability_name}"</h3>
                            <p className='ability abilitytext'>
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
    };
    static dice_bump(amount) {
        if (amount > 0) {
            return `+${amount}`
        } else return "";
    };

    static characterTypes(char) {
        var types = `${char.race},${char.fraction}, ${char.rank}`;
        if (char.addition)
            types = types + `, ${char.addition}`
        return <h2>{types}</h2>
    };
}


export default Card;
