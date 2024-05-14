import { useEffect } from "react";
import RequestTable from "../../../tools/table/RequestTable";
import axios from "axios";
import { apiData } from "../../../../provider/Api";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useState } from "react";


const Food_Request = () => {
    
    const {user} = useContext(AuthContext);
    const [requestedFood, setRequestedFood] = useState([]);

    useEffect(()=> {
        const token = localStorage.getItem('access-token');
        const dataLoad = async () => {
            try {
                const res = await axios.get(`${apiData}/foods/request_food/${user?.email}`, {
                    headers: {
                        'Authorization': `${token}`, 
                        'Content-Type': 'application/json'
                    }
                });
                
                setRequestedFood(res.data);
            }
            catch {
                console.log(console.error);
            }
        } 
        dataLoad();
     } 
     ,[])



    return (
        <div className=" flex justify-center my-10  items-center mx-auto">
            {
                requestedFood.length === 0? (
                    <div className="my-10 md:my-48 ">
                        <h1 className="text-4xl font-jaro text-center">No Food Has Been Requested.</h1>
                    </div>
                ) : (
<div className="my-10">
<h1 className="text-4xl mb-10 font-jaro text-center">My Requested Food</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Donar Name</th>
        <th>Food Name</th>
        <th>Pickup Location</th>
        <th>Expire Date</th>
        <th>Request Date</th>
      </tr>
    </thead>
    {
        requestedFood.map( (food, i) => <RequestTable key={food._id} i={i+1} food={food}></RequestTable>)
    }
            
            </table>
</div>
        </div>
                )
            }
            
            </div>
            
        
    );
};

export default Food_Request;