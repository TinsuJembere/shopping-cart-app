import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/slices/cart-slice'

export default function CartTile({ cartItem }) {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem.id))
    }

    return <>
        <div className="flex items-center p-5 justify-between bg-white shadow-lg mb-2 rounded-xl">
            <div className="flex p-3">
                <img src={cartItem?.image} className="h-28 rounded-lg" alt={cartItem?.title} />
                <div className="ml-10 self-start space-y-5">
                    <h1 className="text-xl text-black">{cartItem?.title}</h1>
                    <p className="text-black font-bold">{cartItem.price}</p>
                </div>
                <div>
                    <button onClick={handleRemoveFromCart} className="bg-blue text-white rounded-lg font-bold p-4">
                        remove from cart
                    </button>
                </div>
            </div>
        </div>
    </>
}