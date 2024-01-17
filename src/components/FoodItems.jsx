import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
const FoodItems = () => {
  const handleToast = () => toast('Cart adddes successfully.');

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-7 '>
    {
        FoodData.map((food) => {
          return <FoodCard key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          qty={food.qty}
          handleToast={handleToast}
/>
        })
      }
      
        
    </div>
    </>
  )
}

export default FoodItems