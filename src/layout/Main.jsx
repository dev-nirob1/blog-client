import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import NavbarComponent from "../shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="min-h-[calc(100vh-185px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;