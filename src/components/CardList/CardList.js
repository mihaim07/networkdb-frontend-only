import React from 'react';
import Card from '../Card/Card';
import {database} from '../../database';


const CardList = ({database}) => {
    const card = database.map((item, i) => {
        return <Card  id={database.id[i]} name={database.name[i]} location={database.location[i]} vid={database.id[i]} vid={database.id[i]} ipAdd={database.ipAdd[i]} mask={database.mask[i]} prov={database.prov[i]} />
    });
        return (
            <div>
                {card}
            </div>
        );
}

export default CardList;


