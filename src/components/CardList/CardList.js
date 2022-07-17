import React from 'react';
import Card from '../Card/Card';
// import { database } from '../../database';


const CardList = ({database}) => {
    console.log(database);
    return (
        <div>
            {
                database.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            id={database[i].id} 
                            name={database[i].name} 
                            location={database[i].location}
                            vid={database[i].id} 
                            ipAdd={database[i].ipAdd} 
                            mask={database[i].mask} 
                            prov={database[i].prov}
                            info={database[i].info}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;


