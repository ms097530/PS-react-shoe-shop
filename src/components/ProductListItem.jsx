export default function ProductListItem({ product })
{
    return (
        <div>
            <h2>Product {product.name}</h2>
            <img src={product.image} alt="" width={200} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}
