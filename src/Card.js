import React, {Component} from 'react';
import './Card.sass'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const char = this.props.character;
        return (
            <div className="card">
                <div className='diceline'>
                    <div id='dice_offense' className='dicebox left'>
                        <img className='offense dice symbol' src={process.env.PUBLIC_URL + 'img/icon-offense.png'}/>
                        {this.dice(char.dice_defense, "orange", "left")}
                        <span className="bumptext">{Card.dice_bump(char.bump_offense)}</span>
                    </div>
                    <div className='dice_defense dicebox right'>
                        <span className="bumptext">{Card.dice_bump(char.bump_defense)}</span>
                        {this.dice(char.dice_defense, "green", "right")}
                        <img className='offense symbol' src={process.env.PUBLIC_URL + 'img/icon-defense.png'}/>
                    </div>
                </div>
                <div className="highlight header">
                    <h2>{char.name}</h2>
                </div>

                <div className="image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/plains_tile.png'})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}>
                    <img className='char char_image' src={process.env.PUBLIC_URL + 'img/dwarf.png'}/>
                </div>
                <div className="highlight">
                    <h2>{Card.characterTypes(char)}</h2>
                </div>
                <div className="specs">
                    <div className="spec ">
                        <h3 className='ability abilityname longtext'>Fähigkeit: "{char.ability_name}"</h3>
                        <span className='ability abilitytext longtext'>
                            {char.ability_text}
                        </span>
                    </div>
                </div>

            </div>
        );
    }

    dice(amount, color, position) {
        var i = 0;
        var indents = [];
        while (i++ < amount) {
            indents.push(<img className={"dice symbol defense"}
                              src={process.env.PUBLIC_URL + `img/${color}_die.ico`}/>);
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
