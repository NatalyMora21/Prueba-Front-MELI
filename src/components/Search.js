import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllItems } from '../services/itemService'
import { initItems } from '../stateHandler/actions/itemAction'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const Search = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let info = search;
        console.log(search);

        if (info != '') {
            //setMensajealert(false);
            const data = await getAllItems(info);
            console.log("---")
            console.log(data)
            dispatch(initItems(data));
            navigate('/items/search')
        }





    }
    return (
        <div class="container-fluid">

            <form class="d-flex" onSubmit={handleSubmit}>

                <input class="" id="searchWord" name="searchWord" className="input-search" placeholder="Nunca dejes de buscar" type="text" onChange={handleInputChange} />
                <div className='search-button'>
                    <input title="boton enviar" alt="boton enviar" src="/assets/search.png" type="image" />
                </div>

            </form>

        </div>
    )
}

export default Search;