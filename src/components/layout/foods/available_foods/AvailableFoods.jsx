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
        <div>
           {
            foods.map(food => <FoodCard key={food._id} food={food} ></FoodCard> )
           } 
        </div>
    );
};

export default AvailableFoods;