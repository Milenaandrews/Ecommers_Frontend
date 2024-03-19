import { Link } from "react-router-dom";
const CardProducts = ({product}) => {

  const {name, price, _id, image} = product;

  return (
    <div>
      <Link className="no-underline" to={`/products/${_id}`}>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-300 aspect-w-1 rounded-md overflow-hidden group-hover:opacity-60 lg:aspect-none">
            <img src={image} alt={name} className="w-full  object-center lg:w-full lg:h-80"  />
          </div>
          <div className="mt-4 justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{name}</h3>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              ${price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProducts