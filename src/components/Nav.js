import React from 'react'
import Search from './Search'

export const Nav = () => {



    return (
        <div>
            <nav class="navbar navbar-light  nav-general">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={'/assets/logo-meli.png'} alt="" width="30" height="24"></img>
                    </a>

                    <Search></Search>

                    
                </div>
            </nav>




        </div>

    )

}