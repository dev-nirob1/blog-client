
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavbarComponent = () => {
    const { user, logOut } = useAuth()
    const handleLogout = ()=>{
        logOut()
        .then(() => {})
    }
    return (
        <div className="navbar sticky top-0 bg-base-200 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-4 py-8 shadow bg-base-100 rounded-box w-52 space-y-2">
                        <li><Link>Home</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link>About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="text-3xl font-medium ">VividVista</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end mr-5">
                    <div tabIndex={0} role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded">
                        <input className="border rounded-md p-2" type="text" name="" id="" placeholder="Search Here" />
                    </div>
                </div>
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="user profile image" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to="login" className="text-white font-medium px-5 py-2 bg-rose-500 rounded-md">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavbarComponent;