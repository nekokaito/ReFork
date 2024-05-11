import {Link, NavLink, useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';


import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';



const NavBar = () => {

	const [open, setOpen] = useState(false);
    const {user, logOut} = useContext(AuthContext);
  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };
   

  

	const location = useLocation();
    return (
        <nav>
            <header className="p-4 bg-[#64748b41] text-white font-jaro">
	<div className="container  flex justify-between gap-2 h-16 mx-auto md:justify-center md:space-x-8">
		<ul className="items-stretch  gap-2 hidden space-x-3 md:flex">
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Home</NavLink>
			</li>
			<NavLink rel="noopener noreferrer" to="/available_foods" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/available_foods'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Available</NavLink>
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/add_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/add_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Add</NavLink>
			</li>
		</ul>
		
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center my-2">
		<img className='w-16' src="/ReFork_Logo.png" alt="" />
		</a>

		<ul className="items-stretch hidden gap-2 space-x-3 md:flex">
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/manage_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/manage_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Manage</NavLink>
			</li>
			<li className="flex">
			<NavLink rel="noopener noreferrer" to="/request_food" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/request_food'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Request</NavLink>
			</li>
			<li className="flex dropdown dropdown-bottom">
				{
					user? (
						<>
					<div tabIndex={0} role="button" rel="noopener noreferrer" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- hover:text-[#7ba3ff] hover:border-[#7ba3ff] text-white}  `}>{user?.displayName.split(' ')[0]}</div>
					<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><span className='flex items-center gap-5'><a>{user?.displayName}</a> <img className='rounded-full w-10' src={user?.photoURL} alt="" /></span> </li>
    <li><Link onClick={logOut}>Log Out</Link></li>
	
  </ul>
 
  </>
					
				)  : (<NavLink rel="noopener noreferrer" to="/login" className={`flex items-center px-4 -mb-1 border-b-2 dark:border- ${ location.pathname === '/login'? 'text-[#7ba3ff] border-[#7ba3ff]': 'text-white'}  `}>Login</NavLink>)
				}
			
			</li>
		</ul>
		
		
		<Box  sx={{ display: 'flex'}}>
		<button onClick={toggleDrawer(true)} title="Button" type="button" className="p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
       <Drawer color="primary"
  variant="solid"  anchor="right" open={open} onClose={toggleDrawer(false)}>
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
	{
		user? ('') : (<NavLink rel="noopener noreferrer" to="/login" className={`flex items-center px-4 -mb-1  ${ location.pathname === '/login'? 'text-[#7ba3ff] ': 'text-black'}  `}>Login</NavLink>)
	}
	
		</div>
		
         
        </Box>
      </Drawer>
    </Box>
	</div>
</header>
        </nav>
    );
};

export default NavBar;