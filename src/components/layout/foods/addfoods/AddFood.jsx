import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from 'axios';
import { apiData } from "../../../../provider/Api";
import toast from 'react-hot-toast';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AddFood = () => {

   const {user} = useContext(AuthContext);
     
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
        const user_name = user?.displayName;
        const user_photo = user?.photoURL;
        const user_email = user?.email;
      
        const foodData = {food_name, notes, location, food_image, date, status, quantity, user_name, user_photo, user_email};

		axios
		.post(`${apiData}/add_food`, foodData)
		.then(() => {
		toast.success("Food added successfully");
		form.reset("");
		}) 
		.catch((err) => {
		console.log(err);
		toast.error("Food not added");
		});
	
     }
	useEffect(() => {Aos.init();}, []);
	useEffect(() => {
		document.title = "Add Food | ReFork";
}, []);
    
    return (
        <div data-aos="flip-left">
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
					<input id="Food_Name" name="food_name" type="text" placeholder="Ex. Cow Beef" className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Food Image</label>
					<input id="Food_Image" name="food_image" type="text" placeholder="https://example.jpg/png" className="w-full h-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Additional Notes</label>
					<input id="notes" name="notes" type="text" placeholder="Notes: Ingredients used Cow Beef etc" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 p-2 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="location" className="text-sm">Pick Up Location</label>
					<input id="location" name="location" type="text" placeholder="#123, Street, Address, Zip" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 p-2 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Expired Date</label>
					<input id="date" name="date" type="date" placeholder="" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Status</label>
					<select id="status" name="status" type="text" placeholder="" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" >
                    <option selected value="available">Available</option>
                    <option value="not Available">Not Available</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Food Quantity</label>
					<input id="quantity" type="number" name="quantity" placeholder="1-100" className="w-full  h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
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

export default AddFood;