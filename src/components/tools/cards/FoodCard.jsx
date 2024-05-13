
import ReactShowMoreText from "react-show-more-text";
import { FaLocationArrow } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoodCard = ({food}) => {
    const {_id , food_name, notes, location, food_image, date, status, quantity, user_name, user_photo} = food;
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options);

    return (
        <motion.div  initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} layout className="card  bg-[#64748b41] font-jaro">
  <figure className="p-6">
    <img className="p-2 rounded-3xl" src={food_image} alt={food_name} />
    </figure>
  <div className="card-body">
    <h2 title={food_name} className="card-title font-jaro line-clamp-1">{food_name}</h2>
    <div className="flex gap-2 items-center"> 
        <div>
           <img className="w-6 rounded-full" src={user_photo} alt={user_name} />
        </div>
        <div>
            <p className="text-xs">{user_name}</p> 
            </div>
            <div>
                {
                    status === 'available'? (<div className=" badge badge-primary animate-pulse badge-outline">Available</div>
                    ) : (
                        <div className=" badge  animate-pulse badge-accent badge-outline">Not Available</div>
                    )
                }
            </div>
    </div>
    <div className="text-xs font-r">
    <ReactShowMoreText
        lines={3}
        more='Show more'
        less='Show less'
        anchorClass=''
        onClick={() => {}}
        expanded={false}
      >
{notes}
      </ReactShowMoreText>
    </div>
    <div className="my-2"> 
        <span className="flex items-center gap-2 text-xs"> <FaLocationArrow /> {location}</span>
       <div className="flex my-2 gap-5 text-xs">
        <span className="flex items-center gap-2"><MdProductionQuantityLimits /> {quantity}</span>
        <span className="flex items-center gap-2"><BsCalendar2Date />{formattedDate}</span>
        
       </div>
    </div>
   
    <div className="card-actions justify-center mt-auto">
     <Link to={`/food/${_id}`}><button className="btn bg-[#7ba3ff] text-white hover:bg-[#537ad4]">View Details</button></Link> 
    </div>
  </div>
</motion.div>
    );
};

export default FoodCard;