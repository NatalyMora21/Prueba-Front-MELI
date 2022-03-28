
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

export const Items = () => {

    const state = useSelector(state => state.items)

    console.log(state)

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(state)
    }, [state])


    return (

        items.map(item => {
            return(
                <>
                    <img src={`${item.picture}`}></img>
                    <p>{item.title}</p>
                    <NavLink to={`/items/${item.id}`}>{item.title}</NavLink>
                    <p>{item.price.amount}</p>
                </>
            )
        })
    )

}