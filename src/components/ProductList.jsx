import ProductListItem from "./ProductListItem"

import nikeData from "../data/nike-data"

console.log(nikeData)

export default function ProductList()
{
    return (
        // <h1>Products List</h1>
        <>
            {
                nikeData.map(product =>
                {
                    return (
                        <ProductListItem product={product} />
                    )
                })
            }
        </>
    )
}
