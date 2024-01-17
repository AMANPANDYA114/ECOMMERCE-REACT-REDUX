

import React, { useEffect, useState } from "react";
import FoodData from '../data/FoodData'; // Assuming you have this import

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []); // Empty dependency array means this will only run once when the component mounts

  useEffect(() => {
    console.log(categories);
    
  }, [categories]); // Log when categories change

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg active:bg-green-500">
          All
        </button>
        {categories.map((category, index) => (
  <button  className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500" key={index}>
    {category}
  </button>
))}

      </div>
    </div>
  );
};

export default CategoryMenu;

