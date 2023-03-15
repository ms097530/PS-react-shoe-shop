import { useContext } from "react"
import { ProductContext } from "../App"

export default function Header()
{
    const { cart } = useContext(ProductContext)
    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {cart.length > 0 ? cart.length : 'Empty'}</p>
        </header>
    )
}
