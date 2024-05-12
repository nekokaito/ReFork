import Header from "../../tools/header/Header";
import FoodItem from "./FoodItem";
import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Support></Support>
            <FoodItem></FoodItem>
        </div>
    );
};

export default Home;