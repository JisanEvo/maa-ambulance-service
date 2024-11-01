import { NavLink } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Ensure you import navigate if not already done

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            navigate('/');

            Swal.fire({
                icon: "success",
                title: "Great",
                text: "Login Successful",
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something Went Wrong",
            });
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-red-500">
                    <h1 className="text-2xl font-bold text-center text-white">Login</h1>
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-xl text-white">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="username"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                required
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-xl text-white">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="block btn btn-warning w-full p-3 text-center rounded-sm text-black dark:bg-violet-600"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm text-white">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>

                    <p className="text-xs text-center sm:px-6 text-white">
                        Don't have an account?
                        <NavLink to="/signUp">
                            <span className="btn btn-link text-white">Sign Up</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
