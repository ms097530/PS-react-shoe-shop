export default function ProductListItem({ product, addToCart })
{
    const handleClick = (e) =>
    {
        // addToCart is setCart, so use previous cart state to set new cart state
        addToCart(prevCart => [...prevCart, product])
    }

    return (
        <div>
            <h2>Product {product.name}</h2>
            <img src={product.image} alt="" width={200} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}
