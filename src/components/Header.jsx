import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className='flex items-center justify-between py-10'>
        <a className='text-xl md:text-2xl font-bold' href='#'>
          Recipe Calories
        </a>

        <ul className='hidden md:flex items-center gap-2 lg:gap-8 *:text-lg *:text-gray-400 *:cursor-pointer'>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>

        <div className='hidden md:flex items-center border px-2 py-2 rounded-full gap-3'>
          <IoSearchOutline className='text-gray-500' />
          <input
            className='border-none outline-none'
            type='text'
            placeholder='Search'
          />
        </div>

        <div className='bg-green-600 rounded-full p-2 cursor-pointer'>
          <FaRegUserCircle className='text-white text-2xl' />
        </div>
      </nav>
    </>
  );
};

export default Header;
