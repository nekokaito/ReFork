import { useContext, useEffect, useState } from "react";
import { apiData } from "../../../../provider/Api";
import MyFoodTable from "../../../tools/table/MyFoodTable";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";


const Manage_Food = () => {
   const {user} = useContext(AuthContext);

   const [foods, setFoods] = useState([]);
    useEffect(()=> {
        const dataLoad = async () => {
            try {
                const res = await axios.get(`${apiData}/manage_food/${user?.email}`);
                
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
            <div className="container mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Food Name</th>
        <th>Pick Up Location</th>
        <th>Expire Date</th>
        <th>Quantity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
     
     {
        foods.map(food => <MyFoodTable key={food._id} food={food}></MyFoodTable>)
     }
     
      
      
  
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Manage_Food;