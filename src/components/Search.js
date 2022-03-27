import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {

    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let info = search;
        console.log(search);

        if (info != '') {
            //dispatch(searchGeneral(datos.searchWord, datos.options, datos.date))
            //setMensajealert(false);
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