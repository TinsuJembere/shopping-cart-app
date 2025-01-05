import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/cart-slice'

export default function ProductTile({ product }) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    function handleAddToCart() {
        dispatch(addToCart(product))
    }

    function handleRemoveFromCart(){
        dispatch(removeFromCart(product.id))
    }

    return <div>
        <div className="group flex flex-col items-center bg-white gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl shadow-lg">
            <div className="h-[180px]">
                <img src={product?.image} alt={product?.title} className="object-cover h-full w-full" />
            </div>
            <div>
                <h1 className="w-40 truncate text-darkgray text-deepblack mt-3">{product.title}</h1>
            </div>
            <div className="flex items-center w-full mt-5 justify-center">
                <button onClick={cart.some(item => item.id === product.id)? handleRemoveFromCart : handleAddToCart} className="w-full bg-white text-blue border-2 border-blue rounded-lg font-bold p-2">
                    {
                        cart.some(item => item.id === product.id)? 'remove from cart' : 'add to cart'
                    }
                </button>
            </div>
        </div>
    </div>
}