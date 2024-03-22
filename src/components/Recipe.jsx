import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
  const [foods, setFoods] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [readyForCooking, setReadyForCooking] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleWantToCook = (id) => {
    id = parseInt(id);

    for (const food of foods) {
      if (id === parseInt(food.recipe_id)) {
        for (const want of wantToCook) {
          if (parseInt(want.recipe_id) === id) {
            toastify(want.recipe_name);
            return;
          }
        }
        const ids = parseInt(food.recipe_id) - 1;
        setWantToCook([...wantToCook, foods[ids]]);
      }
    }
  };

  const toastify = (name) => {
    toast("Added: " + name);
  };

  const handlePreparing = (id, preparingTime, getCalories) => {
    preparingTime = parseInt(preparingTime);
    getCalories = parseInt(getCalories);
    setMinutes(minutes + preparingTime);
    setCalories(calories + getCalories);

    for (const food of foods) {
      food.recipe_id = parseInt(food.recipe_id);
      if (parseInt(id) === food.recipe_id) {
        const ready = foods[food.recipe_id - 1];
        setReadyForCooking([...readyForCooking, ready]);
        removedItem(food.recipe_id);
        return;
      }
    }
  };

  const removedItem = (id) => {
    setWantToCook(wantToCook.filter((item) => parseInt(id) !== item.recipe_id));
  };

  return (
    <section className='mb-20'>
      <div className='mb-12'>
        <h2 className='text-2xl lg:text-5xl font-bold text-center mt-12'>
          Our Recipes
        </h2>
        <p className='max-w-[800px] mx-auto text-center text-base md:text-xl mt-5 text-[#03071299]'>
          Yes, you can run unit tests and view the results directly within the
          app. The integrated testing features allow for a streamlined.
        </p>
      </div>

      {/* recipe card */}

      <div className='grid grid-cols-5 gap-6'>
        {/* food items (left side) */}
        <div className='col-span-5 md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {foods.map((food, i) => (
            <FoodCard key={i} food={food} handleWantToCook={handleWantToCook} />
          ))}
        </div>

        {/* cooking counter (right side) */}
        <div className='col-span-5 md:col-span-2 border rounded-2xl'>
          {/* want to cook */}
          <div>
            <h2 className='text-2xl font-bold px-4 text-center py-4'>
              Want to Cook: {wantToCook.length}
            </h2>
            <hr className='w-10/12 mx-auto' />

            <table className='flex flex-col justify-center my-4 w-full border'>
              <thead className='py-2'>
                <tr className='flex items-center gap-5 md:gap-14 md:ml-9'>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <ToastContainer
                position='top-right'
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
              />
              ;
              <tbody className='space-y-2'>
                {wantToCook.map((cookItem, i) => (
                  <tr
                    key={cookItem.recipe_id}
                    className='flex justify-between bg-gray-200 p-2 gap-2'
                  >
                    <td className='text-gray-600'>
                      <span>{i + 1}. </span> {cookItem.recipe_name}
                    </td>
                    <td className='text-gray-600'>
                      {cookItem.preparing_time} minutes
                    </td>
                    <td className='text-gray-600'>
                      {cookItem.calories} calories
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handlePreparing(
                            cookItem.recipe_id,
                            cookItem.preparing_time,
                            cookItem.calories
                          )
                        }
                        className='bg-green-500 px-2 text-sm md:text-lg md:px-4 py-1 text-blue-950 font-medium rounded-full'
                        type='button'
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* currently cooking */}
          <div>
            <h2 className='text-2xl font-bold px-4 text-center py-4'>
              Currently Cooking: {readyForCooking.length}
            </h2>
            <hr className='w-10/12 mx-auto' />
            <table className='flex flex-col justify-center my-4 w-full border'>
              <thead className='py-2'>
                <tr className='flex justify-between items-center gap-14 px-2'>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              <tbody className='space-y-2'>
                {readyForCooking.map((item, i) => (
                  <tr
                    key={item.recipe_id}
                    className='flex justify-between bg-gray-200 p-2'
                  >
                    <td className='text-gray-600'>
                      <span>{i + 1} </span> {item.recipe_name}
                    </td>
                    <td className='text-gray-600'>
                      {item.preparing_time} minutes
                    </td>
                    <td className='text-gray-600'>{item.calories} calories</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className='text-lg font-medium px-2 mb-1'>
            Total Time = {minutes} minutes
          </p>
          <p className='text-lg font-medium px-2'>
            Total Calories = {calories} calories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
