
const Navbar = () => {
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
                            <li className="text-white"><a>হোম</a></li>

                        <li className="text-white"><a>সার্ভিস</a></li>
                        <li className="text-white"><a>যোগাযোগ</a></li>
                            {/* <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost w-20 "><img src="/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-white"><a>হোম</a></li>
                       
                        <li className="text-white"><a>সার্ভিস</a></li>
                        <li className="text-white"><a>যোগাযোগ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">লগ ইন</a>
                </div>
            </div>


        </div>
    );
};

export default Navbar;