// import React from 'react';
// import call from 'react-native-phone-call'
// import { View, Button } from 'react-native';
// import Communications from 'react-native-communications';
import { FcRight } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { FcRight } from "react-icons/fc";

const Service = () => {
    const phoneNumber = '+880130355-2174'; // Replace with the desired phone number

    return (
    <div>
            <h1 className="text-xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full mb-8 hover:bg-[#f3004b] hover:text-white hover:py-4 mt-7">কুইক সার্ভিস</h1>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1  container mx-auto gap-8 justify-center mb-7'>
            {/* পাবনা টু ঢাকা ১ */}


            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">পাবনা টু ঢাকা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                </div>
            </div>
            {/*  টু ঢাকা to pabna২ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">ঢাকা টু পাবনা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        {/* <button >কল করুন(args) </button> */}
                        {/* <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a> */}

                      <Link to='/reserve'>
                      <button>রিজার্ভ করুন</button>
                      </Link>
                    </div>
                </div>
            </div>
            {/* পাবনা টু রাজশাহী ৩ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                       src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">পাবনা টু ঢাকা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                </div>
            </div>
            {/* রাজশাহী টু পাবনা ৪ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">পাবনা টু ঢাকা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                </div>
            </div>
            {/* পাবনা টু ্সিরাজগঞ্জ ৫ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">পাবনা <FcRight /> সিরাজগঞ্জ</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                </div>
            </div>
            {/* সিরাজগঞ্জ টু ঢাকা ৬ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src='/c2.png'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">পাবনা টু ঢাকা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Service;