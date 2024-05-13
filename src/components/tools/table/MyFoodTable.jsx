import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const MyFoodTable = ({food}) => {


    const {_id ,food_name, notes, location, food_image, date, status, quantity, user_name, user_photo, user_email} = food;

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
            <button className="btn"><RiDeleteBin2Line /></button>
        </th>
      </tr>
      </tbody>
    );
};

export default MyFoodTable;