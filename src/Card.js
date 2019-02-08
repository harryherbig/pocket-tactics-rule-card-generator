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
                        <img className='offense dice symbol black'
                             src={process.env.PUBLIC_URL + 'img/icon-offense.png'}/>
                        {this.dice(char.dice_offense, "orange")}
                        <span className="bumptext">{Card.dice_bump(char.bump_offense)}</span>
                    </div>
                    <div className='dice_defense dicebox right'>
                        <span className="bumptext">{Card.dice_bump(char.bump_defense)}</span>
                        {this.dice(char.dice_defense, "green",)}
                        <img className='defense symbol black' src={process.env.PUBLIC_URL + 'img/icon-defense.png'}/>
                    </div>
                </div>
                <div className="highlight header">
                    <h1>{char.name} ({char.price})</h1>
                </div>

                {/*<div className="image" style={{*/}
                {/*backgroundImage: `url(${this.terrain(char.favourite_tile)})`,*/}
                {/*backgroundSize: "65%",*/}
                {/*backgroundRepeat: "no-repeat",*/}
                {/*backgroundPosition: "center center",*/}

                {/*}}>*/}
                <div className="char_images">
                    <img className='char favourite_terrain' src={this.terrain(char.favourite_tile)}/>
                    <img className='char char_image' src={this.charImage(char.id)}/>
                </div>
                <div className="highlight">
                    <h3 className="types">{Card.characterTypes(char)}</h3>
                </div>
                <div className="descriptionbackground">
                    <div className="specs">
                        <div className="spec">
                            <h2 className='ability abilityname longtext'>{char.ability_name}</h2>
                            <span className='ability abilitytext longtext'>
                            {char.ability_text}
                        </span>

                        </div>

                        <div className="bottomText">
                            {this.rolladice(char.rolladice)}
                            {this.movement(char)}
                        </div>
                    </div>

                </div>

            </div>
        );
    }


    terrain(terrain) {
        return process.env.PUBLIC_URL + `img/tile_${terrain}.png`
    }

    charImage(id) {
        return process.env.PUBLIC_URL + `img/${id.toLowerCase()}.png`
    }

    dice(amount, color) {
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
        var types = `${char.race}`;
        if (char.rank)
            types = types + `, ${char.rank}`;
        if (char.living)
            types = types + ", lebend";
        else
            types = types + ", untot";
        if (char.addition)
            types = types + `, *${char.addition}`;
        if (char.type) {
            types = types + `, *${char.type}`;
        }
        return types
    };

    rolladice(roll) {
        if (roll) {
            return <img className="rolladice" src={"/img/rolladice.png"}/>
        }
    }

    movement(char) {
        if (char.flying > 0) {
            return <div className="movement"><img src={"/img/wing.png"}/><span
                className="movement">+{char.flying}</span></div>
        } else if (char.swift > 0) {
            return <div className="movement"><img className="swift" src={"/img/swift.svg"}/><span>+{char.swift}</span>
            </div>
        } else if (char.ranged > 0) {
            return <div className="movement"><img src={"/img/distance.png"}/><span
                className="movement">+{char.ranged}</span></div>
        } else {
            return <div className="movement"/>;
        }
    };


}

export default Card;