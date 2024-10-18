import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
        {/* <button className='w-full bg-white PY-4'>  <p><FcGoogle className='text-xl' /> </p></button> */}
        <span className="w-full  py-3 bg-yellow-500  font-bold text-center flex items-center justify-center mx-5">Sign in with Google <FcGoogle className=''></FcGoogle></span>

        </div>
    );
};

export default SocialLogin;