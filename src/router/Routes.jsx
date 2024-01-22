import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard";
import Tabs from "../components/pages/Authentications/Tabs";
import ResetPassword from "../components/pages/Authentications/ResetPassword";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/login', 
                element: <Tabs/>
            },
            {
                path: '/reset-password', 
                element: <ResetPassword/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />
    }
]);
export default router