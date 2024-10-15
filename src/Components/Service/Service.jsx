// import React from 'react';
// import call from 'react-native-phone-call'
// import { View, Button } from 'react-native';
// import Communications from 'react-native-communications';
import { FcRight } from "react-icons/fc";
// import { FcRight } from "react-icons/fc";

const Service = () => {
    const phoneNumber = '+880130355-2174'; // Replace with the desired phone number

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 container mx-auto'>
            {/* পাবনা টু ঢাকা ১ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">ঢাকা টু পাবনা</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        {/* <button >কল করুন(args) </button> */}
                        <a href={`tel:${phoneNumber}`}>
                            <button className="btn btn-primary">কল করুন </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* পাবনা টু রাজশাহী ৩ */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
    );
};

export default Service;