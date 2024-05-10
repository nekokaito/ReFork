import { createBrowserRouter} from "react-router-dom";
import Home from "../components/layout/home/Home";
import AddFood from "../components/layout/foods/addfoods/AddFood";
import Root from "../components/layout/root/Root";
import AvailableFoods from "../components/layout/foods/available_foods/AvailableFoods";
import Manage_Food from "../components/layout/foods/manage_foods/Manage_Food";
import Food_Request from "../components/layout/foods/food_request/Food_Request";
import Login from "../components/layout/accounts/login/Login";
import SignUp from "../components/layout/accounts/signup/SignUp";

const Router =  createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/available_foods",
          element: <AvailableFoods></AvailableFoods>
               
        },
        {
          path: "/add_food",
          element: <AddFood></AddFood>
        },
        {
          path: "/manage_food",
          element: <Manage_Food></Manage_Food>
        },
        {
          path: "/request_food",
          element: <Food_Request></Food_Request>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default Router;