import Header from "../../tools/header/Header";
import FoodSection from "../../tools/section/FoodSection";
import FoodItem from "./FoodItem";
import Review from "./Review";

import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Support></Support>
            <FoodSection></FoodSection>
            <FoodItem></FoodItem>
            <Review></Review>
        </div>
    );
};

export default Home;