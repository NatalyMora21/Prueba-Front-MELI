
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Items = () => {

    const state = useSelector(state => state.items)

    console.log(state)
    console.log("state---")
    const [items, setItems] = useState([]);



    useEffect(async () => {
        setItems(state);
    }, [state])


    return (


        <div>


        </div>

    )
}