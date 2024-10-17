import { NavLink } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
                <h1 className="text-xl bg-red-500">Login Now</h1>
                <div className="flex justify-center items-center h-screen bg-red-200" >
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center text-white">Login</h1>
                <form  className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl text-white">Email:</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-xl text-white">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <button className="block btn btn-warning w-full p-3 text-center rounded-sm text-black dark:bg-violet-600">Log in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm text-white">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                {/* <SocialLogin></SocialLogin> */}
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