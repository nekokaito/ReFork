import { useContext, useEffect} from "react";
import { apiData } from "../../../../provider/Api";
import MyFoodTable from "../../../tools/table/MyFoodTable";
import { AuthContext } from "../../../../provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingX from "../../../tools/loading/LoadingX";
import Aos from "aos";
import "aos/dist/aos.css";

const Manage_Food = () => {
   const {user} = useContext(AuthContext);
   useEffect(() => {Aos.init();}, []);
  
   useEffect(() => {
     document.title = "Manage My Foods | ReFork";
   }, []);
   
   const { isLoading, refetch, data:foods=[]} = useQuery({
    
    queryKey: ["myfood"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem('access-token');
        const { data } = await axios.get(
          `${apiData}/manage_food/${user?.email}`,
        
          { headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
          },
            withCredentials: true,
          }
        );
        return data;
      }
      catch (error) {
        throw new Error('Error fetching my food data: ' + error.message);
      }
      
    },
  });
  if(isLoading) {
    return <LoadingX></LoadingX>
  }
 
    return (
        <div data-aos="zoom-in-down" className="my-10">
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