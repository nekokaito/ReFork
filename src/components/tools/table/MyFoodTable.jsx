import { GrUpdate } from "react-icons/gr";
const MyFoodTable = ({food}) => {


    const {food_name, notes, location, food_image, date, status, quantity, user_name, user_photo, user_email} = food;

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
          <button className="btn"></button>
        </th>
        <th>
            <button className="btn">btn</button>
        </th>
      </tr>
      </tbody>
    );
};

export default MyFoodTable;