import React from 'react'
import Search from './Search'
import { NavLink } from 'react-router-dom';
export const Nav = () => {

    return (
        <div>
            <nav class="navbar navbar-light  nav-general">
                <div class="container row">
                    <div class="col-md-2">
                        <a class="navbar-brand" href="#">
                            <NavLink to={'/'}><img src={'/assets/logo-meli.png'} alt="" width="30" height="24" className='logo'></img></NavLink>
                        </a>
                    </div>
                    <div class="col-md-10">
                        <Search></Search>
                    </div>
                </div>
            </nav>
        </div>
    )
}