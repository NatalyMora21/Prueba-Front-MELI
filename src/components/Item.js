
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../services/itemService';

export const Item = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState("");

    useEffect(async () => {
        const data = await getItem(id);
        console.log(data)
        setItem(data);
        setLoading(true);
    }, [])


    return (

        <div>
            {loading ?
                <div class=" mb-3" className='card-general pb-5 ' >
                    <div class="row g-0">
                        <div class="col-md-8 img-item">
                            <img src={`${item.picture}`} class="img-fluid rounded-start "  alt="..." />
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h4>{item.title}</h4>
                                <h4>$ {item.price.amount}</h4>
                                <button type="button" class="btn btn-primary button-buy">comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-md-7 car-description">
                            <h5>Descripción del producto</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
                :
                    <img src={'/assets/loading.gif'} alt="" className='img-loading'></img>
            }
        </div>
    )

}