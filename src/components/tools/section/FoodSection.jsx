import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FoodSection = () => {
    useEffect(() => {Aos.init();}, []);
    return (
        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="container mx-auto my-32">
            <h1 className="text-6xl text-center md:text-end font-jaro">Our Foods</h1>
            <div className="flex justify-center md:justify-end">
            <p className="font-roboto p-2 md:text-end w-1/2">Our food is generously provided by donors, ensuring that everyone in our community has access to nutritious and delicious meals. We deeply appreciate the kindness and support of those who contribute, helping us to nourish and uplift those in need.</p>
          
            </div>
        
        </div>
    );
};

export default FoodSection;