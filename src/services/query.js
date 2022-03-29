import { request, gql } from 'graphql-request'

export const querySearchItems = (search) => {

    return (
        gql
            `
            {
                getAllItemsType(search: "${search}") {
                    id
                    author{
                        name
                        lastName
                    }
                    title
                    price { 
                    currency 
                    amount 
                    decimals
                    } 
                    picture 
                    condition 
                    free_shipping 
                    sold_quantity
                }
            }
            `
    )
} 

export const queryInfoItem = (id) => {

    return (gql
        `
        {
            getItem(id: "${id}") {
                id
                title
                price { 
                    currency 
                    amount
                }
                picture
                description
                
            } 
        }
        `
    )
}

