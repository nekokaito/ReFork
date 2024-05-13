import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from 'axios';
import { apiData } from "../../../../provider/Api";
import toast from 'react-hot-toast';
import {useParams } from "react-router-dom";
const UpdateFood = () => {

   const {user} = useContext(AuthContext);
   const [foods, setFoods] = useState([]);
   const {_id} = useParams();
   console.log(_id);
   useEffect(()=> {
    const dataLoad = async () => {
        try {
            const res = await axios.get(`${apiData}/update/${_id}`);
            
            setFoods(res.data);
        }
        catch {
            console.log(console.error);
        }
    } 
    dataLoad();
 } 
 ,[])


 const {food_name, notes, location, food_image, date, status, quantity, user_name, user_photo, user_email} = foods;
   
     const handleSubmit =  (e) => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const notes = form.notes.value;
        const location = form.location.value;
        const food_image= form.food_image.value;
        const date = form.date.value;
        const status = form.status.value;
		const quantity = form.quantity.value;
        
        const foodData = {food_name, notes, location, food_image, date, status, quantity};

		axios.put(`${apiData}/foods/${_id}`, foodData)
  .then(() => {
    console.log('Update successful');
    
  })
  .catch(error => {
    console.error('Error updating data:', error);
    
  });
	
     }
    
    return (
        <div>
            <section className="p-6 ">
	<form onSubmit={handleSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1 flex flex-col gap-5">
				<p className="text-5xl font-jaro"> &gt; Add Food</p>
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
					<input id="Food_Name" name="food_name" type="text" defaultValue={food_name} className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Food Image</label>
					<input id="Food_Image" name="food_image" type="text" defaultValue={food_image}  className="w-full h-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Additional Notes</label>
					<input id="notes" name="notes" type="text" defaultValue={notes} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 p-2 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="location" className="text-sm">Pick Up Location</label>
					<input id="location" name="location" type="text" defaultValue={location} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Expired Date</label>
					<input id="date" name="date" type="date" defaultValue={date} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Status</label>
					<select id="status" name="status" type="text" defaultValue={status} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" >
                    <option selected value="available">Available</option>
                    <option value="not Available">Not Available</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Quantity</label>
					<input id="quantity" type="number" name="quantity" defaultValue={quantity} className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
				</div>
                <button type="submit" className="btn w-full hidden md:flex bg-[#7ba3ff]">Add Food</button>
			</div>
            
		</fieldset>
        <button type="submit" className="btn flex md:hidden bg-[#7ba3ff]">Add Food</button>
	</form>
</section>
        </div>
    );
};

export default UpdateFood;