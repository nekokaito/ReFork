
import ReactShowMoreText from "react-show-more-text";
import { FaLocationArrow } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiData } from "../../../../provider/Api";
import Modal from '@mui/material/Modal';
import { AuthContext } from "../../../../provider/AuthProvider";
import { useContext } from "react";


const FoodDetails = () => {
  const {user} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const foods= useLoaderData();
    const { _id } = useParams();
    console.log(foods)
    const food = foods.find(food => food._id == _id);
    console.log(_id)
    console.log(food)
    const {food_name, notes, location, food_image, date, status, quantity, user_name, user_photo} = food;
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
        <motion.div  initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} layout className="card m-10 bg-[#64748b41] font-jaro">
  <figure className="p-6">
    <img className="p-2 rounded-3xl" src={food_image} alt={food_name} />
    </figure>
  <div className="card-body">
    <h2 title={food_name} className="card-title font-jaro line-clamp-1 text-center text-2xl md:text-4xl">{food_name}</h2>
    <div className="flex justify-center gap-2 items-center"> 
        <div>
           <img className="w-6 rounded-full" src={user_photo} alt={user_name} />
        </div>
        <div>
            <p className="text-xs">{user_name}</p> 
            </div>
            <div>
                {
                    status === 'available'? (<div className=" badge badge-primary animate-pulse badge-outline">Available</div>
                    ) : (
                        <div className=" badge  animate-pulse badge-accent badge-outline">Not Available</div>
                    )
                }
            </div>
    </div>
    <div className="">
    <div className="text-xs md:text-sm text-center ">
    <ReactShowMoreText
        lines={3}
        more='Show more'
        less='Show less'
        anchorClass=''
        onClick={() => {}}
        expanded={false}
      >
{notes}
      </ReactShowMoreText>
    </div>
    </div>
   
    <div className="my-2 flex justify-center"> 
        <span className="flex items-center gap-2 text-xs md:text-sm"> <FaLocationArrow /> Pick Up:  {location}</span>
       <div className="flex my-2 gap-5 text-xs  md:text-sm">
        <span className="flex items-center gap-2 md:text-sm"><MdProductionQuantityLimits /> Quantity: {quantity}</span>
        <span className="flex items-center gap-2 md:text-sm"><BsCalendar2Date />Expire Date:  {formattedDate}</span>
        
       </div>
    </div>
   
    <div className="card-actions justify-center mt-auto">
     <button onClick={handleOpen} className="btn bg-[#7ba3ff] text-white hover:bg-[#537ad4]">Request</button>
    </div>
  </div>
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div style={style} className="bg-black mt-10 w-full md:w-3/4 border rounded-2xl">
  <div className="">
            <section className="p-6 ">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1 flex flex-col gap-5">
				<p className="text-5xl font-jaro"> &gt; Request</p>
				<div className="">
                <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
<p className="text-sm font-light font-roboto">Donator Information</p>
<p className="text-2xl font-jaro">{user?.displayName}</p>
<p className="text-sm font-jaro">{user?.email}</p>

</div>
			</div>
			<div className="grid grid-cols-6 gap-10 col-span-full lg:col-span-3 font-jaro">
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Food Name</label>
					<input id="Food_Name" name="food_name" type="text" placeholder={food_name} className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" disabled/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Food Image</label>
					<input id="Food_Image" name="food_image" type="text" placeholder={food_image} className="w-full h-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" disabled/>
				</div>
				<div className="col-span-full sm:col-span-5">
					<label  className="text-sm">Additional Notes</label>
					<input id="notes" name="notes" type="text" defaultValue={notes} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 p-2 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="location" className="text-sm">Pick Up Location</label>
					<input id="location" name="location" type="text" placeholder={location} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" disabled/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Expired Date</label>
					<input id="date" name="date" type="date" placeholder="" defaultValue={date} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" disabled/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Status</label>
					<select id="status" name="status" type="text" placeholder="" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" defaultValue={status} disabled>
                    <option value="available">Available</option>
                    <option value="not Available">Not Available</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Quantity</label>
					<input id="quantity" type="number" name="quantity" placeholder={quantity} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" disabled/>
				</div>
                <button type="submit" className="btn w-full hidden md:flex bg-[#7ba3ff]">Request Food</button>
			</div>
            
		</fieldset>
        <button type="submit" className="btn flex md:hidden bg-[#7ba3ff]">Request Food</button>
	</form>
</section>
        </div>
  </div>
</Modal>
</motion.div>
    );
};

export default FoodDetails;