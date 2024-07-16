import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DataContext from '../context/DataContext';

const Nav = () => {
  const { search, setSearch } =useContext(DataContext)
  return (
    <div className='flex justify-between bg-black items-center px-10 sticky top-[69px]'>
      <form className='flex items-center w-96' onSubmit={(e) => { e.preventDefault(); }}>
        <label htmlFor='SearchBox' className='text-slate-50 whitespace-nowrap pr-5'>
          Search Post
        </label>
        <input
          type='text'
          id='SearchBox'
          placeholder='Search Here'
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
          className='px-5 w-full min-h-10 outline-none rounded'
        />
      </form>
      <ul className='flex text-slate-50'>
        <li className='hover:bg-white hover:text-black px-5 py-10'>
          <Link to="/home">Home</Link>
        </li>
        <li className='hover:bg-white hover:text-black px-5 py-10'>
          <Link to="NewPost">Post</Link>
        </li>
        <li className='hover:bg-white hover:text-black px-5 py-10'>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
