import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getAllItems } from '../services/itemService'

export const ItemsInit = () => {


    const [items, setItems] = useState([]);

    useEffect(async () => {
        const data = await getAllItems("tv");
        console.log(data)
        setItems(data.slice(0,4));

    }, [])


    return (
        <div class="card-group">

            {
                items.map(item => {
                    return (
                        <div class="card card-init">
                            <img src={`${item.picture}`} class="card-img-top card-general" alt="..." />
                            <div class="card-body">
                                <h5 class="title-direc"><NavLink to={`/item/${item.id}`}>{item.title}</NavLink></h5>
                                <p class="card-text">$ {item.price.amount}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}