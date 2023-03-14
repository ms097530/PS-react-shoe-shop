import { useState } from "react"

import ProductListItem from "./ProductListItem"

import nikeData from "../data/nike-data"

console.log(nikeData)

export default function ProductList()
{
    const [data, setData] = useState(nikeData)
    const [cart, setCart] = useState([])
    return (
        // <h1>Products List</h1>
        <>
            {
                data.map(product =>
                {
                    return (
                        <ProductListItem product={product} key={product.id} />
                    )
                })
            }
        </>
    )
}
