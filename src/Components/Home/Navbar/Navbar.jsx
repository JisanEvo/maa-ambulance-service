import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    // Ref to the service section
    const {user,logOut}=useContext(AuthContext)

    return (
        <div>
            <div className="navbar bg-red-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* <img src="/logo.png" alt="" /> */}
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to='/'>  <li className="text-black"><a>হোম</a></li></Link>

                            <Link to='/service'><li className="text-black"><a>সার্ভিস</a></li></Link>
                            <Link to='/reserve'><li className="text-black"><a>রিজার্ভ </a></li></Link>
                            <Link to="/contact"><li className="text-black"><a>যোগাযোগ </a></li></Link>;                          {/* <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost w-20 "><img src="/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'>  <li className="text-black"><a>হোম</a></li></Link>
                        <Link to='/service'><li className="text-black"><a>সার্ভিস</a></li></Link>
                        <Link to='/reserve'><li className="text-black"><a>রিজার্ভ </a></li></Link>
                        <Link to="/contact"><li className="text-black"><a>যোগাযোগ </a></li> </Link>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ? <div title={user?.displayName}  className="dropdown dropdown-end z-40"  >
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL||"https://i.postimg.cc/QNkbjGzf/images.png" } alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName || "Jisan"}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={() => logOut()}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>


        </div>
    );
};

export default Navbar;