import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Search } from '../components/Search'
import { Item } from '../components/Item'
import { renderHook } from '@testing-library/react-hooks';
import { itemReducer } from '../stateHandler/reducers/itemReducer';




const data = {

    author: {
        "name": "Nataly",
        "lastName": "Mora Mancera"
    },
    items: [
        {
            id: "MLA927545662",
            title: "Asus Rog Phone 5 Zs673ks Dual Sim 256 Gb Phantom Black 12 Gb Ram",
            price: {
                currency: "ARS",
                amount: 280000,
                decimals: 2.0
            },
            picture: "http://http2.mlstatic.com/D_671229-MLA46272952928_062021-I.jpg",
            condition: "new",
            free_shipping: true
        },
        {
            id: "MLA1109590146",
            title: "Apple iPhone 13 Mini (128 Gb) - Azul",
            price: {
                "currency": "ARS",
                "amount": 251970,
                "decimals": 2.0
            },
            picture: "http://http2.mlstatic.com/D_984249-MLA47782359300_102021-I.jpg",
            condition: "new",
            free_shipping: true
        }
    ]
}

describe('Items', () => {

    test('Returns new state after search', () => {
        const action = {
            type: 'LIST-NOTE',
            payload: data
        }

        const newState = itemReducer([],action);

        expect(newState.items).toHaveLength(2);
        expect(newState).toEqual(data);
        expect(newState.author.name).toEqual("Nataly");
        
    })



}



)