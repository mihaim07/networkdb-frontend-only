import React from 'react';
import Card from '../Card/Card';
import './CardList.css';
// import { database } from '../../database';


const CardList = ({database}) => {
    console.log(database);
    return (
        <div className='cardList'>
            {
                database.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            ipLoopback={database[i].IPLoopback} 
                            nodeName={database[i].NodeName} 
                            address={database[i].Address}
                            city={database[i].City}
                            comments={database[i].Comments}
                            contact={database[i].Contact}
                            invId={database[i].InvId}
                            latitude={database[i].Latitude}
                            longitude={database[i].Longitude}
                            productType={database[i].ProductType}
                            responsibility={database[i].Responsibility}
                            project={database[i].Project}
                            prov1={database[i].Prov1}
                            ipAdd1={database[i].IPAdd1} 
                            vid1={database[i].Vid1} 
                            prov2={database[i].Prov2}
                            ipAdd2={database[i].IPadd2} 
                            vid2={database[i].Vid2} 
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;


