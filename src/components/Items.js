
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Items = () => {

    const state = useSelector(state => state.items)

    console.log(state)

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(state)
    }, [state])


    return (

        items.map(item => {
            return (
                <div class=" mb-3" className='card-general pb-5 ' >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={`${item.picture}`} class="img-fluid rounded-start image-item" alt="..." />
                        </div>
                        <div class="col-md-5">
                            <div class="card-body">
                                <h4>${item.price.amount}</h4>
                                <div className='title-direc'>
                                    <NavLink to={`/items/${item.id}`}>{item.title}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-user">
                                <p class="card-text"><small class="text-muted">Nataly Mora</small></p>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
    )

}