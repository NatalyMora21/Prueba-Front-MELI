import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllItems } from '../services/itemService'
import { initItems } from '../stateHandler/actions/itemAction'


const Search = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        let info = search;
        console.log(search);

        if (info != '') {
            //dispatch(searchGeneral(datos.searchWord, datos.options, datos.date))
            //setMensajealert(false);
            console.log("INGRESO")
            const data = await getAllItems(info);
            console.log("---")
            console.log(data)
            dispatch(initItems(data));
        }

    }

    return (
        <div class="container-fluid">
            <form class="d-flex" onSubmit={handleSubmit}>
                <input class="form-control" id="searchWord" name="searchWord"  placeholder="Nunca dejes de buscar" type="text" onChange={handleInputChange} />
                <button type="submit" id="button-addon2" >Buscar </button>
            </form>
        </div>
    )
}


export default Search;