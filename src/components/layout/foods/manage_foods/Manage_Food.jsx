import { useContext, useEffect, useState } from "react";
import { apiData } from "../../../../provider/Api";
import MyFoodTable from "../../../tools/table/MyFoodTable";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Manage_Food = () => {
   const {user} = useContext(AuthContext);

   
   const { isLoading, refetch, data:foods=[]} = useQuery({
    queryKey: ["myfood"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${apiData}/manage_food/${user?.email}`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
  });
   

    return (
        <div className="my-10">
          <h1 className="text-4xl mb-10 font-jaro text-center">Manage My Food</h1>
            <div className="container my-28 mx-auto">
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
        foods.map(food => <MyFoodTable key={food._id} food={food} refetch={refetch}></MyFoodTable>)
     }
     
      
      
  
    
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Manage_Food;