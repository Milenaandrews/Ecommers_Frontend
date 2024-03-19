import { useContext, useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from "react-bootstrap";
import ProductContext from "../../context/products/ProductContext";
import CartContext from "../../context/cart/CartContext";

const Slide = () => {
    const { getProducts, products} = useContext(ProductContext);
    const { addItemToCart, setIsCartOpen } = useContext(CartContext)
    
    const handleCart = (product) => {
        addItemToCart(product)
        setIsCartOpen(true)
        setTimeout(() => {
            setIsCartOpen(false)
        }, 2000);
    }
    // const handleAdd = () => { if (cartCount < stock) addItemToCart(product[0]) }

    const [first10Products, setFirst10Products] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            await getProducts();
            const first10 = products.slice(0, 10);
            setFirst10Products(first10);
        };

        fetchProducts();
    }, [getProducts, products]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <Carousel responsive={responsive}>
            {first10Products.map((product) => (
                <div key={product._id} className="card my-3 mx-2 py-2">

                    <img className="h-[350px]" src={product.image} alt={product.name} />

                    <div className="py-3">
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                    <Button variant="dark" size="lg" className="bg-dark px-4 me-md-2" onClick={() => handleCart(product)}>Add To cart</Button>
                </div>
            ))}
        </Carousel>
    );
};

export default Slide;
