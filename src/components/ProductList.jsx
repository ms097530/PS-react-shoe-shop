import ProductListItem from "./ProductListItem"

export default function ProductList({ products, shoppingCart })
{


    return (
        // <h1>Products List</h1>
        <>
            {
                products.map(product =>
                {
                    return (
                        <ProductListItem product={product} key={product.id} />
                    )
                })
            }
        </>
    )
}
