import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-185px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;