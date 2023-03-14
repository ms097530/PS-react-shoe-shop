import ProductListItem from "./ProductListItem"

export default function ProductList({ products, addToCart })
{


    return (
        // <h1>Products List</h1>
        <>
            {
                products.map(product =>
                {
                    return (
                        <ProductListItem product={product} addToCart={addToCart} key={product.id} />
                    )
                })
            }
        </>
    )
}
