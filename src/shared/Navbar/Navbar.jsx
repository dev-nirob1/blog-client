import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container mx-auto shadow">
            <nav className="py-4 px-2 md:px-5 w-full flex items-center justify-between gap-2 md:gap-5">
                <Link to="/"><h2 className="text-3xl font-semibold italic">EchoLens</h2></Link>
                <SearchBar />
                <NavLinks />
            </nav>
        </div>
    );
};

export default Navbar;