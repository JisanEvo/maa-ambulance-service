import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
                   <Outlet></Outlet>
        <Footer/>
        </div>

    );
};

export default Root;