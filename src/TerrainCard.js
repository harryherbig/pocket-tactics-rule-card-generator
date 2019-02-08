import React, {Component} from 'react';
import './TerrainCard.sass'

class TerrainCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const terrain = this.props.terrain;
        return (
            <div className="card">
                <div className="highlight header">
                    <h1>{terrain.name}</h1>
                </div>

                <div className="char_images terrain">
                    <img className='terrain favourite_terrain' src={this.terrain(terrain.id)}/>
                </div>
                <div className="terrain descriptionbackground">
                    <div className="specs">
                        <div className="spec terrainspec">
                            <br/>
                            <h2 className='ability abilityname longtext'>{terrain.occupy_name}</h2>
                            <span className='ability abilitytext longtext'>
                                {terrain.occupy_text}
                            </span>
                            <h2 className='ability abilityname longtext'>{terrain.ability_name}</h2>
                            <span className='ability abilitytext longtext'>
                                {terrain.ability_text}
                            </span>
                            <div><h2 className='ability abilityname longtext'>{terrain.ability_name2}</h2><span className='ability abilitytext longtext'> {terrain.ability_text2}</span></div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }


    terrain(terrain) {
        return process.env.PUBLIC_URL + `img/tile_${terrain}.png`
    }


}

export default TerrainCard;