
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Item = (id) => {

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
                    <p>{item.price.amount}</p>
                </>
            )
        })
    )

}