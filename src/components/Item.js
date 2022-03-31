
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getItem } from '../services/itemService';

export const Item = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(async () => {
        const data = await getItem(id);
        setItem(data.item);
        setAuthor(data.author)
        setLoading(true);
    }, [])


    return (

        <div>
            {loading ?
                <div className='card-general pb-5 mb-3' >
                    <div className="row g-0">
                        <div className="col-md-8 img-item">
                            <img src={`${item.picture}`} className="img-fluid rounded-start "  alt="..." />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h4>{item.title}</h4>
                                <h4>$ {item.price.amount}</h4>
                                <p>Vendido por: {author.name} {author.lastName}</p>
                                <p>Cantidades vendidas: {item.sold_quantity}</p>
                                <button type="button" className="btn btn-primary button-buy">comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-7 car-description">
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