import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LoginForm = ({ onTabChange, onForgotPassword, onGoogleLogin }) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            alert('Welcome')
            form.reset()
            navigate(from, { replace: true });

        })
        .catch(err => {
            const errorMessage = err.message;
            alert(errorMessage)
        })

    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-900 opacity-75">Please Login</h2>

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="name"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                        placeholder="Your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
                        placeholder="Your password"
                    />
                </div>
                <p className="text-sm mb-4 text-gray-600">
                    <button
                        type="button"
                        onClick={onForgotPassword}
                        className="focus:outline-none"
                    >
                        Forgot Password? <Link className="hover:underline " to='/reset-password'>Reset Here</Link>
                    </button>
                </p>
                <button
                    type="submit"
                    className="w-full font-medium bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:shadow-outline-rose mb-4"
                >
                    Login
                </button>
                <button
                    type="button"
                    onClick={onGoogleLogin}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red mb-4"
                >
                    Register with Google
                </button>
            </form>

            <p className="text-sm text-center text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                    type="button"
                    onClick={() => onTabChange('register')}
                    className="hover:underline focus:outline-none"
                >
                    Register here
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
