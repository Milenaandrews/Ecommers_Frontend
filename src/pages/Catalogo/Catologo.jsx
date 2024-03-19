import { useContext, useEffect } from "react";

import ProductContext from "../../context/products/ProductContext";
import CardProducts from "../../components/CardProducts/CardProducts";

const Catalogo = () => {
  const { getProducts, products } = useContext(ProductContext);

  useEffect(() => {
    const axiosProducts = async () => {
      await getProducts();
    };
    axiosProducts();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl py-3 pb-5 font-extrabold tracking-tight text-gray-900">Nuestros Productos</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <CardProducts key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
