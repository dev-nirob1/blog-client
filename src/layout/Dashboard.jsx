import { useState } from 'react';

const Dashboard = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className={`bg-blue-500 text-white w-64 min-h-screen ${isSidebarVisible ? 'block' : 'hidden'} md:block`}>
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <nav>
                    <ul className="space-y-2">
                        <li className="p-2 hover:bg-blue-600 cursor-pointer">Home</li>
                        <li className="p-2 hover:bg-blue-600 cursor-pointer">Profile</li>
                        <li className="p-2 hover:bg-blue-600 cursor-pointer">Settings</li>
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col m-0 overflow-hidden">

                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between p-4">
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden text-gray-600 focus:outline-none focus:bg-gray-300 p-2"
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
                        <h1 className='md:hidden'>VividVista</h1>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-6">
                        <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
