
import React, { useEffect, useState } from 'react';
import { getItem } from '../services/item';

export const Item = (id) => {

    const [item, setItem] = useState();


    useEffect(async () => {

        const data = await getItem(id);
        setItem(data);

    }, [])


    return (

        <div>
            <p>{item.title}</p>
            <p>{item.title}</p>
            <p>{item.price.amount}</p>
            <p>{item.description}</p>

        </div>



    )

}