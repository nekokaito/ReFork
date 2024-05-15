/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import flower from "./flower.json"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Support = () => {
    useEffect(() => {Aos.init();}, []);
    return (
        <section data-aos="fade-right" className=" flex flex-col md:flex-row justify-evenly items-center">
            <div className=" w-96">
                <Lottie animationData={flower} loop={true} />
            </div>
            <div className="w-1/2">
                <h1 className="text-6xl font-jaro">Sharing is Caring</h1>
                <p className="font-roboto p-2">We're excited to announce that through our website, we've been able to provide support to food aid initiatives in <b>Palestine</b>. Collaborating with local partners, we're making a real difference in addressing food insecurity in the region. </p>
            </div>
        </section>
    );
};

export default Support;
