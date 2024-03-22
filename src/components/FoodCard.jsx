/* eslint-disable react/prop-types */
import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const FoodCard = ({ food, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    recipe_img,
    calories,
    preparing_time,
    recipe_desc,
    ingredients,
  } = food;
  return (
    <div key={recipe_id} className='border p-6 rounded-2xl flex flex-col '>
      <img className='rounded-2xl' src={recipe_img} alt='' />
      <h2 className='text-2xl font-bold my-5'>{recipe_name}</h2>
      <p className='border-b-2 pb-5 text-gray-700 font-normal'>{recipe_desc}</p>

      <h3 className='text-lg text-gray-900 font-semibold mb-2'>
        Ingredients: 6
      </h3>
      <ul className='border-b-2 pb-5 *:list-disc *:ml-9 *:text-gray-600 flex flex-col gap-1 flex-grow'>
        {ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className='flex items-center justify-between my-5'>
        <p className='flex items-center gap-2'>
          <FaRegClock />
          <span>{preparing_time} minutes</span>
        </p>
        <p className='flex items-center gap-2'>
          <FaFire />
          <span>{calories} calories</span>
        </p>
      </div>

      <button
        onClick={() => handleWantToCook(recipe_id)}
        className='bg-green-400 px-7 py-2 text-black text-xl font-semibold rounded-full'
        type='button'
      >
        Want to Cook
      </button>
    </div>
  );
};

export default FoodCard;
