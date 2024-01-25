import { Link, useLocation, useNavigate, } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const RegisterForm = ({ onTabChange, onGoogleLogin, onForgotPassword }) => {
  const { createUser, verifyEmail } = useAuth()
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, email, password }
    console.log(userInfo)

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;

        if (loggedUser) {
          
          verifyEmail(loggedUser)
            .then(() => {
              alert('We Sent a email to verify your email please check!')
              
              if (loggedUser.emailVerified) {
                axios.put(`${import.meta.env.VITE_api_url}/user`, userInfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.acknowledged) {
                      navigate(from, { replace: true });
                      alert(`Welcome ${loggedUser.displayName}`)
                    }
                  })
              }
            })
        }
      })
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-900 opacity-75">Please Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-rose-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
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
            Forgot Password? <Link className="hover:underline" to='/reset-password'>Reset Here</Link>
          </button>
        </p>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 focus:outline-none focus:shadow-outline-rose mb-4"
        >
          Register
        </button>
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red mb-4"
        >
          Continue with Google
        </button>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => onTabChange('login')}
            className="hover:underline focus:outline-none"
          >
            Login here
          </button>
        </p>

      </form>
    </div>
  );
};

export default RegisterForm;
