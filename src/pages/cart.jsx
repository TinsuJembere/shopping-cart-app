import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTile from "../components/cart-tile"


export default function Cart() {
  const [totalCart, setTotalCart] = useState(0)
  const { cart } = useSelector(state => state)
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);

  return <div>
    {
      cart && cart.length ?
        <div className="flex">
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center">
              {
                cart.map(cartItem => <CartTile key={cartItem.id} cartItem={cartItem} />)
              }
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-black">your cart summary</h1>
              <p>
                <span className="text-black font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-black font-bold">Total Amount</span>
                <span>: {totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        : <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text text-xl mb-2">your cart is empty</h1>
          <Link to={'/'}>
            <button className="bg-yellow-400 text-black rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
    }
  </div>
}