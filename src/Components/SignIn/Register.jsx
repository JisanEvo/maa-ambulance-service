import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            {/* <h1>Register Now This Site....</h1> */}
            <div className="flex justify-center items-center h-screen" >
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-red-500 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
                <form  noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl text-white">Username:</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-xl text-white">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-xl text-white">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="photo">Choose Your Profile</label>
                        <input id="photo" autoComplete="photo" name="image" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="file" />
                    </div>

                    <button className="block btn btn-warning w-full p-3 text-center rounded-sm text-black dark:bg-violet-600">Sign Up</button>
                </form>
                <div className="flex items-center justify-center space-x-1">
                    <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                        <NavLink to="/login">
                            <span className="btn btn-link">Log in</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Register;