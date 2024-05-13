import { motion } from "framer-motion";
import FoodCard from "../cards/FoodCard";

const Slider = ({foods}) => {
    // const ar = [{num: 1},{num: 2},{num: 3},{num: 4},{num: 5},{num: 6},{num: 7}]
    // const dup = [...ar, ...ar]
    return (
        
        <div className="relative w-full overflow-hidden">
            <motion.div animate={{x:['-100%','0%'], transition: {ease: 'linear', duration: 10, repeat: Infinity, }}} className="flex justify-center gap-5">
            {
                foods.slice(0, 6).map( (food) => <FoodCard key={food._id} food={food}></FoodCard>)
            }
           
        </motion.div>
         {/* <div key={i} style={{width: `${100/food.length}%`}} className=" flex-shrink-0"> <div className="flex items-center justify-center h-full">{k.num}</div></div> */}
        </div>
    );
};

export default Slider;