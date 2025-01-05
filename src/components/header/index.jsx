import { Link } from "react-router-dom";


export default function Header(){
   return <nav  className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={'/'}>
            <div>
            <h2 className="text-black font-bold sm:text-2xl cursor-pointer tracking-wide ml-20">React Redux Shopping Cart</h2>
            </div>
        </Link>
        <Link>
            <ul className="flex items-center space-x-6 text-darkgray font-semibold">
                <Link to={'/'}>
                    <li className="cursor-pointer hover:text-blue transition">Home</li>
                </Link>
                <Link to={'/cart'}>
                    <li className="cursor-pointer hover:text-blue transition">Cart</li>
                </Link>
            </ul>
        </Link>
    </nav>
}