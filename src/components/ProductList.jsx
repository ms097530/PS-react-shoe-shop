import ProductListItem from "./ProductListItem"

// Context
import { ProductContext } from "../App"
import { useContext } from "react"

export default function ProductList()
{
    // 3. Consume the data from the context
    const productContextValue = useContext(ProductContext)

    console.log('productContextValue:', productContextValue)
    console.log('productContextValue.data:', productContextValue.data)

    return (
        // <h1>Products List</h1>
        <>
            {
                productContextValue.data.map(product =>
                {
                    return (
                        <ProductListItem product={product} key={product.id} />
                    )
                })
            }
        </>
    )
}
