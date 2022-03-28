
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../services/itemService';

export const Item = () => {

    const { id } = useParams()
    console.log(id)

    const [item, setItem] = useState("");


    useEffect(async () => {

        const data = await getItem(id);
        console.log("data---")
        console.log(data)
        setItem(data);

    }, [])


    return (

        <div>
            {item && 
            
                <p>
                    <img src={`${item.picture}`}></img>
                    <p>{item.title}</p>
                    <p>{item.price.amount}</p>
                </p>
                
            
            }

        </div>



    )

}