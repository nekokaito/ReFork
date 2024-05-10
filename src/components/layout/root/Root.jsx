import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root; 
