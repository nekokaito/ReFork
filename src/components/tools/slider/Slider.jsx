import { motion } from "framer-motion";

const Slider = () => {
    const ar = [{num: 1},{num: 2},{num: 3},{num: 4},{num: 5},{num: 6},{num: 7}]
    const dup = [...ar, ...ar]
    return (
        
        <div className="relative w-full overflow-hidden">
            <motion.div animate={{x:['-100%','0%'], transition: {ease: 'linear', duration: 20, repeat: Infinity}}} className="flex justify-center gap-10">
            {
                dup.map( (k,i) => <div key={i} style={{width: `${100/ar.length}%`}} className=" flex-shrink-0"> <div className="flex items-center justify-center h-full">{k.num}</div></div>)
            }
        </motion.div>
        </div>
    );
};

export default Slider;