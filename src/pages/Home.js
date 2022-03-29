
import React from 'react'
import { ItemsInit } from "../components/ItemsInit"
import { Nav } from "../components/Nav"


export const Home = () => {

    return (
        <div>

            <Nav></Nav>
            <div className="container-general cont-home">
                <div className="container ">
                    <ItemsInit></ItemsInit>
                </div>
            </div>

        </div>
    )

}