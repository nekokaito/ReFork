import axios from "axios";
import { useEffect, useState } from "react";
import { apiData } from "../../../../provider/Api";
import FoodCard from "../../../tools/cards/FoodCard";


const AvailableFoods = () => {

    const [foods, setFoods] = useState([]);
  
     useEffect(()=> {
        const dataLoad = async () => {
            try {
                const res = await axios.get(`${apiData}/foods`);
                
                setFoods(res.data);
            }
            catch {
                console.log(console.error);
            }
        } 
        dataLoad();
     } 
     ,[])

     

    return (
        <div className="flex">
            <div className="grid p-10 m-2 gap-5 container mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5">
            {
            foods.map(food => <FoodCard key={food._id} food={food} ></FoodCard> )
           } 
            </div>
           
        </div>
    );
};

export default AvailableFoods;