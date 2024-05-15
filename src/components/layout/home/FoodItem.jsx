import axios from "axios";
import { useEffect, useState } from "react";
import { apiData } from "../../../provider/Api";
import Slider from "../../tools/slider/Slider";
import Aos from "aos";
import "aos/dist/aos.css";

const FoodItem = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {Aos.init();}, []);
    useEffect(()=> {
       const dataLoad = async () => {
           try {
               const res = await axios.get(`${apiData}/foods`);
               
               setFoods(res.data);
           }
           catch {
               console.log(console.error);
           }
       } 
       dataLoad();
    } 
    ,[])

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className="mx-10 my-48">
            <div>
                <Slider foods={foods}></Slider>
            </div>
        </div>
    );
};

export default FoodItem;