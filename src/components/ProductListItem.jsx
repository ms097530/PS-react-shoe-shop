export default function ProductListItem({ product })
{
    return (
        <div key={product.id}>
            <h2>Product {product.name}</h2>
            <img src={product.image} alt="" width={200} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}
