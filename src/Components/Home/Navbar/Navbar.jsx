import { Link } from "react-router-dom";


const Navbar = () => {
    // Ref to the service section

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
                  <Link to='/login'><a className="btn">লগ ইন</a></Link>
                </div>
            </div>


        </div>
    );
};

export default Navbar;