import React from 'react'
import {createStore} from 'redux'


export const itemReducer = (state=[], action) => {

    switch(action.type){
        case "LIST-NOTE" : {
            return (action.paylod)
        }

        case "FILTER-NOTE" : {
            return (action.paylod)
        }

        default:
            return state

    }

}

