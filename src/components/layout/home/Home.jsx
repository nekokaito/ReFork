import { useEffect } from "react";
import Header from "../../tools/header/Header";
import FoodSection from "../../tools/section/FoodSection";
import Contact from "./Contact";
import FoodItem from "./FoodItem";
import Review from "./Review";

import Support from "./Support";

const Home = () => {
    useEffect(() => {
        document.title = "ReFork";
      }, []);
    return (
        <div>
            <Header></Header>
            <Support></Support>
            <FoodSection></FoodSection>
            <FoodItem></FoodItem>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;