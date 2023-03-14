export default function Header({ shoppingCart })
{
    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {shoppingCart.length}</p>
        </header>
    )
}
