
import React from 'react'

const Search = () => {


    const handleSubmit = () => {

    }



    return (
        <div>
            <form onsubmit={handleSubmit}>

                <div className="input-group mb-3 ">
                    <input id="searchWord" name="searchWord"  type="text" />
                    <button  type="submit" id="button-addon2" >Buscar </button>
                </div>

            </form>
        </div>
    )



}


export default Search;