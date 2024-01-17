import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addTocart } from '../redux/splices/CartSlice';
import toast from 'react-hot-toast';

const FoodCard = (props) => {
  const { id, name, price, desc, rating, img ,handleToast} = props;
const dispatch=useDispatch();
  return (
    <div className='font-bold w-[250px] p-5 bg-white gap-2'>
      <img
        src={img}
        alt=""
        className="w-[200px] hover:scale-110 cursor-grab transition-all duration-500"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">{price}₹</span>
      </div>

      <p className='text-sm  font-normal'>{desc.slice(0,50)}</p>
      
      <div className='flex justify-between'>
        <span className=' flex justify-center items-center'>
          <AiFillStar className='text-yellow-400 mr-1' />4.3
        
        </span>
      
        <button
          onClick={() => {
            dispatch(
              addTocart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast();
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
       
        
      </div>
    </div>
  );
}

export default FoodCard;
