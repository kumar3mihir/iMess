import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import nitLogo from "../assets/NitRkl.png";
// Import your logos with a relative path


function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., validate credentials, make API calls, etc.)
        // You can use state or context to manage user authentication
        console.log("User clicked login!");
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here (e.g., show a modal, navigate to a reset password page, etc.)
        console.log("User clicked forgot password!");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 text-left">
                <div className="flex items-center mb-4">
                    {/* Display the resized logo on the left */}
                    <img src={nitLogo} alt="NIT Logo" className="w-16 h-16" />

                    {/* Text on the right side of the logo */}
                    <div className="ml-4">
                        <p className="text-lg font-bold">NIT Rourkela</p>
                        <p className="text-sm">Sign in to Mess portal</p>
                    </div>
                </div>

                {/* Line and background for icons */}
                <div className="mb-4 p-4 bg-gray-200 rounded">
                    <div className="flex items-center justify-center border-b border-gray-300 pb-2 mb-2">
                        <PersonIcon />
                        <input
                            type="text"
                            placeholder="Username"
                            className="ml-2 px-4 py-2 w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <LockIcon />
                        <input
                            type="password"
                            placeholder="Password"
                            className="ml-2 px-4 py-2 w-full focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full focus:outline-none"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
                <p
                    className="text-blue-500 cursor-pointer hover:underline mt-4 text-right"
                    onClick={handleForgotPassword}
                >
                    Forgot Password?
                </p>
            </div>
        </div>
    );
}

export default Login;
