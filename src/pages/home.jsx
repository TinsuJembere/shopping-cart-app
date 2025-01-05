import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner"
import ProductTile from "../product-tile"


export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchListOfProducts = async () => {
          setLoading(true);
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchListOfProducts();
      }, []);
      
    return <div>
        {
            loading ? <div className="min-h-screen w-full flex justify-center items-center">
                <Circles height={'120'} width={'120'} color="#0000FF" visible={true}/>
            </div> : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    products && products.length? products.map(item=> <ProductTile product={item}/>) : null
                }
            </div>
        }
    </div>
}