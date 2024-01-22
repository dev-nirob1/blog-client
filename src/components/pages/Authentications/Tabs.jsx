// src/Tabs.js
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import useAuth from '../../../hooks/useAuth';

const Tabs = () => {
  const {googleLogin} = useAuth()

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const loggedUser = result.user;
      alert(`welcome ${loggedUser.displayName}`)
    })
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-5">
      <div className="bg-white p-8 rounded shadow-xl max-w-md w-full">
        <div className="flex mb-4">
          <button
            onClick={() => handleTabChange('login')}
            className={`flex-1 py-2 px-4 text-center focus:outline-none font-medium rounded ${
              activeTab === 'login' ? 'bg-rose-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange('register')}
            className={`flex-1 py-2 px-4 text-center focus:outline-none font-medium rounded ${
              activeTab === 'register' ? 'bg-rose-500 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Register
          </button>
        </div>
        {activeTab === 'login' ? (
          <LoginForm onTabChange={handleTabChange} onGoogleLogin={handleGoogleLogin} onForgotPassword={handleForgotPassword} />
        ) : (
          <RegisterForm onTabChange={handleTabChange} onGoogleLogin={handleGoogleLogin} onForgotPassword={handleForgotPassword} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
