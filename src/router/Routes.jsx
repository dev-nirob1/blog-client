import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Dashboard from "../layout/Dashboard";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <App />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />
    }
]);
export default router