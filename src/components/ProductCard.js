import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actionCreators/productActions";
import { FaTrash } from "react-icons/fa";

const ProductCard = ({ product }) => {

  const isCart = useLocation().pathname.includes('/cart');

  console.log(isCart)

  const dispatch = useDispatch()

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'>
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          <li className='text-sm '><b>Price: </b>{product.price}</li>
        </ul>
      </div>
      {
        isCart === false &&
        <div className='flex gap-2 my-5'>
          <button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>

          <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        </div>
      }

      {
        isCart && <button
          className='bg-red-500 rounded-full max-h-[35px] py-1 px-2 flex-1 flex gap-1 items-center justify-between text-white text-bold my-2'
          onClick={() => dispatch(removeFromCart(product))}
        >
          <span className="font-semibold">Remove From Cart</span><FaTrash />
        </button>
      }

    </div>
  );
};

export default ProductCard;
