/* eslint-disable react/prop-types */
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { apiData } from "../../../provider/Api";
import axios from "axios";
const MyFoodTable = ({food, refetch}) => {


    const {_id ,food_name, location, date, quantity} = food;

    const foodDelete = (id) => 
      {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`${apiData}/foods/${id}`)
            .then(res => {
              
             if(res.data.deletedCount > 0 ) {
              
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch();
             }
            })
          }
        });
      }

    return (
        <tbody>
            <tr>
        <th>
          {food_name}
        </th>
        <td>
          {location}
        </td>
        <td>
         {date}
        </td>
        <td>{ quantity}</td>
        <th>
        <Link to={`/update/${_id}`}><button className="btn"><GrUpdate /></button></Link>  
        </th>
        <th>
            <button onClick={() => foodDelete(_id)} className="btn"><RiDeleteBin2Line /></button>
        </th>
      </tr>
      </tbody>
    );
};

export default MyFoodTable;