
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

export const Items = () => {

    const state = useSelector(state => state.items)
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    console.log(state)

    useEffect(() => {
        setItems(state)
    }, [state])

    return (
        items.map(item => {
            return (
                <div className=" mb-3 card-general pb-3"  >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <NavLink to={`/item/${item.id}`}><img src={`${item.picture}`} className="img-fluid rounded-start image-item" alt="..." /></NavLink>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <h5>$ {item.price.amount}</h5>
                                <div className='title-direc'>
                                    <NavLink to={`/item/${item.id}`}>{item.title}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-user">
                                <p className="card-text"><small className="text-muted">{item.author.name} {item.author.lastName}</small></p>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    )

}