import { useState } from 'react';
import AdminSidebar from '../components/pages/dashboard/admin/AdminSidebar';
import AuthorSidebar from '../components/pages/dashboard/author/AuthorSidebar';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/DashboardHeader/Header';

const Dashboard = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const admin = true;
    const author = false;
    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className={`bg-rose-500 z-50 p-2 text-white w-64 h-screen sticky top-0 ${isSidebarVisible ? 'block absolute' : 'hidden'} md:block`}>
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <nav>
                    {
                        admin && <AdminSidebar />
                    }
                    {
                        author && <AuthorSidebar />
                    }
                </nav>
                <div className="divider"></div>

                <ul className="space-y-2">
                    <li className="p-2 cursor-pointer"><Link to="/">Go Home</Link></li>
                    <li className="p-2 cursor-pointer"><button>Logout</button></li>
                </ul>
            </aside>

            <div className="flex-1 flex flex-col m-0">

                <header className="bg-white">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden text-gray-600 focus:outline-none border p-2"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        <h1 className='md:hidden text-3xl'>VividVista</h1>
                    </div>
                </header>

                <main className="bg-gray-50 p-5">
                    <Header />
                    <div className="p-6 bg-white pb-5">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
