import ProductListItem from "./ProductListItem"

export default function ProductList({ data })
{


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
