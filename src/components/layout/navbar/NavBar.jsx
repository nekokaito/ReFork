import {NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';

import { useState } from 'react';

const NavBar = () => {

	const [open, setOpen] = useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };
 

	const location = useLocation();
    return (
        <div>
            <header className="p-4 bg-[#64748b41] text-white font-jaro">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Home</NavLink>
			</li>
			<NavLink rel="noopener noreferrer" to="/available_foods" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/available_foods'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Available</NavLink>
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/add_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/add_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Add</NavLink>
			</li>
		</ul>
		
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center my-2">
		<img className=' w-16 md:w-16 ' src="/ReFork_Logo.png" alt="" />
		</a>

		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/manage_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/manage_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Manage</NavLink>
			</li>
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/request_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/request_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Request</NavLink>
			</li>
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/login" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/login'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Login</NavLink>
			</li>
		</ul>
		
		
		<Box sx={{ display: 'flex'}}>
		<button onClick={toggleDrawer(true)} title="Button" type="button" className="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
       <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >  
		<div className='flex my-10 flex-col gap-5 font-jaro'>
		<NavLink rel="noopener noreferrer" to="/" className={`flex items-center px-4 -mb-1 - ${ location.pathname === '/'? 'text-[#7ba3ff] ': 'text-black'}  `}>Home</NavLink>
		<NavLink rel="noopener noreferrer" to="/available_foods" className={`flex items-center px-4 -mb-1  ${ location.pathname === '/available_foods'? 'text-[#7ba3ff] ': 'text-black'}  `}>Available</NavLink>
		<NavLink rel="noopener noreferrer" to="/add_food" className={`flex items-center px-4 -mb-1   ${ location.pathname === '/add_food'? 'text-[#7ba3ff] ': 'text-black'}  `}>Add</NavLink>
    <NavLink rel="noopener noreferrer" to="/manage_food" className={`flex items-center px-4 -mb-1 ${ location.pathname === '/manage_food'? 'text-[#7ba3ff] ': 'text-black'}  `}>Manage</NavLink>
    <NavLink rel="noopener noreferrer" to="/request_food" className={`flex items-center px-4 -mb-1  ${ location.pathname === '/request_food'? 'text-[#7ba3ff] ': 'text-black'}  `}>Request</NavLink>
	<NavLink rel="noopener noreferrer" to="/login" className={`flex items-center px-4 -mb-1  ${ location.pathname === '/login'? 'text-[#7ba3ff] ': 'text-black'}  `}>Login</NavLink>
		</div>
		
         
        </Box>
      </Drawer>
    </Box>
	</div>
</header>
        </div>
    );
};

export default NavBar;