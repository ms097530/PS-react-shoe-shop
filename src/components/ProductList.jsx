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
                        <div>
                            <h2>Product {product.name}</h2>
                            <img src={product.image} alt="" width={200} />
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
