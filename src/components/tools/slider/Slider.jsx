/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import FoodCard from "../cards/FoodCard";

const Slider = ({foods}) => {
  
    return (
        
        <div className="relative mx-10 overflow-hidden">
            <motion.div animate={{x:['-100%','0%'], transition: {ease: 'linear', duration: 5}}} className="flex flex-col md:flex-row justify-center gap-5">
            {
                foods.slice(0, 6).map( (food) => <FoodCard key={food._id} food={food}></FoodCard>)
            }
           
        </motion.div>
         
        </div>
    );
};

export default Slider;