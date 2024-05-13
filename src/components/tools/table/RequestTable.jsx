
 
 const RequestTable = ({food, i}) => {

    const {food_name, user_name, location, date, currentDate} = food;
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
      const exp = new Date(date).toLocaleDateString('en-GB', options);
    return (
        
        <tbody>
      
      <tr>
        <th>{i}</th>
        <td>{user_name}</td>
        <td>{food_name}</td>
        <td>{location}</td>
        <td>{exp}</td>
        <td>{currentDate}</td>
      </tr>
      
    </tbody>

    );
 };
 
 export default RequestTable;