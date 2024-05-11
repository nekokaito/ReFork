import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Root = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    return (
        <div className="flex flex-col min-h-screen">
             <motion.div
        className="fixed top-0 left-0 right-0 h-2  bg-gradient-to-r from-[#7ba3ff] to-[#afc7ff] animate-pulse transform z-[99] origin-top-left"
        style={{ scaleX }}
      />
            <NavBar />
            
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root; 
