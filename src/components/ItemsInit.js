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
        <div className="card-group">
            {
                items.map(item => {
                    return (
                        <div className="card card-init">
                            <NavLink to={`/item/${item.id}`}><img src={`${item.picture}`} className="card-img-top card-general" alt="..." /></NavLink>
                            <div className="card-body">
                                <h5 className="title-direc"><NavLink to={`/item/${item.id}`}>{item.title}</NavLink></h5>
                                <p className="card-text">$ {item.price.amount}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}