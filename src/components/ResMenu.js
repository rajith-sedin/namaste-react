import React, { useState } from 'react';
import { RES_NAMES } from '../utils/mockData';
import { useParams } from 'react-router-dom';

const ResMenu = () => {
    const [menu, setMenu] = useState(RES_NAMES);
    const itemLoop = menu[0].data.cards[0].card.menu;
    const { name, rating, deliveryTime } = menu[0].data.cards[0].card;
    const {resId} = useParams()

    return (
        <div className='menu-container'>
            <h1>{name}</h1>
            <h4>Rating: {rating}</h4>
            <h4>Delivering in : {deliveryTime}</h4>
            <p>Menu</p>
            <ul className='menu-list'>
                {itemLoop.map(((item,index) => <li key={index}>{item.name} - Rs {item.price}</li> ))}
            </ul>
        </div>
    );
}

export default ResMenu;
