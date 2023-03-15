import { useContext } from "react"
import { ProductContext } from "../App"

export default function ProductListItem({ product, addToCart })
{
    // Consume the context
    const productContextValue = useContext(ProductContext)

    const handleClick = (e) =>
    {
        // use setter from context to update cart value
        productContextValue.setCart(prevCart => [...prevCart, product])
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
