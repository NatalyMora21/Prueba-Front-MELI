import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllItems }  from '../services/itemService'
import {initItems} from '../stateHandler/actions/itemAction'


const Search = () => {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch ();

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
        <div>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-3 ">
                    <input id="searchWord" name="searchWord" type="text" onChange={handleInputChange}/>
                    <button type="submit" id="button-addon2" >Buscar </button>
                </div>

            </form>
        </div>
    )
}


export default Search;