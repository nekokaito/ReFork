import axios from "axios";
import { useEffect, useState } from "react";
import { apiData } from "../../../../provider/Api";
import FoodCard from "../../../tools/cards/FoodCard";
import { AnimatePresence, motion } from "framer-motion";
import { IoSearchSharp } from "react-icons/io5";
import { BsLayoutSplit } from "react-icons/bs";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { TbMoodSearch } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import LoadingX from "../../../tools/loading/LoadingX";
import Aos from "aos";
import "aos/dist/aos.css";
const AvailableFoods = () => {
   
    useEffect(() => {Aos.init();}, []);

    useEffect(() => {
        document.title = "Available Foods | ReFork";
      }, []);
    
    const [layout, setLayout] = useState ('col3');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortByExpiration, setSortByExpiration] = useState(true);
   
   const { isLoading, data:foods=[] } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
          const { data } = await axios.get(
            `${apiData}/foods_item?search=${searchQuery}`,
            {
              withCredentials: true,
            }
          );

          return data
        },
      });
      
      
      if(isLoading) {
        return <LoadingX></LoadingX>
      }
     const changeLayout = () => {
        if (layout === 'col3') {
            setLayout('col2')
        }
        else {
            setLayout('col3')
        }
     }
     
     const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearchQuery(search);
     }
    

     const sortedFoods = [...foods].filter(food => food.status === 'available').sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortByExpiration === true ? dateA - dateB : dateB - dateA;
    });
  
    
    return (
        <div data-aos="zoom-in" className="font-roboto">
            <div className="flex flex-col-reverse md:flex-row items-center my-10 justify-center gap-5">
            <div>
    <button onClick={changeLayout} className="btn bg-[#7ba3ff] text-white hover:bg-[#537ad4]">
        {layout === 'col3' ? <BsLayoutSplit /> : <BsLayoutThreeColumns />} Layout
    </button>
</div>
                <div>
                    <button onClick={()=> setSortByExpiration(!sortByExpiration)} className="btn bg-[#7ba3ff] text-white hover:bg-[#537ad4]"> <BsCalendarDate />Expire Date</button>
                </div>
                <div>
    <form onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="search" className="grow" placeholder="Search" />
            <button type="submit">
                <IoSearchSharp color="white" />
            </button>
        </label>
    </form>
</div>
            </div>
            <motion.div layout className={`grid p-10 m-2 gap-5 container mx-auto md:grid-cols-2 ${layout === 'col2'? 'lg:grid-cols-2 lg:w-1/2' : 'lg:grid-cols-3 lg:w-3/4'}`}>
           <AnimatePresence mode="wait">
           {
          (foods.length) === 0? (<h1 className="text-4xl font-jaro flex item-center gap-3">No Food Items Found <TbMoodSearch /></h1>)  :  sortedFoods.map(food => <FoodCard key={food._id} food={food} ></FoodCard> )
           } 
           </AnimatePresence>
            </motion.div>
           
        </div>
    );
};

export default AvailableFoods;