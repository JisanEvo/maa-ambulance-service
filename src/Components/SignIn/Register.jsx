import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const { createuser, user, setUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const pass = form.password.value;
        const photo = form.photo.value;
        const email = form.email.value;
        console.log(name, pass, photo, email)
        try {
            const result = await createuser(email, pass)
            console.log(result)

            await updateUserProfile(name, photo)
            setUser({ ...user, PhotoUrl: photo, displayName: name })
            navigate('/')
            Swal.fire({
                icon: "success",
                title: "Great",
                text: "Google Log in Sucessfull",

            });

        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Alass !!",
                text: "Something Went Wrong",

            });
        }
    }

    return (
        <div>
            {/* <h1>Register Now This Site....</h1> */}
            <div className="flex justify-center items-center h-screen" >
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-red-500 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
                <form onSubmit={handleSignUp}   noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl text-white">Username:</label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md "  autoComplete="name"/>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-xl text-white">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md "  autoComplete="email" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-xl text-white">Password:</label>
                        <input
  type="password"
  name="password"
  id="password"
  placeholder="Password"
  className="w-full px-4 py-3 rounded-md"
  autoComplete="new-password"
/>


                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="photo">Choose Your Profile</label>
                        <input
  id="photo"
  name="photo"
  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md"
  type="file"
  autoComplete="photo"
/>
                    </div>

                    <button className="block btn btn-warning w-full p-3 text-center rounded-sm text-black dark:bg-violet-600">Sign Up</button>
                </form>
                <div className="flex items-center justify-center space-x-1">
                    <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                        {/* <SocialLogin></SocialLogin> */}
                        <NavLink to="/login">
                            <span className="btn btn-link">Log in</span>
                        </NavLink>
                        <br />
                        {/* <NavLink to='/'>  <button className="btn btn-warning text-white">Home</button></NavLink> */}

                    </p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Register;