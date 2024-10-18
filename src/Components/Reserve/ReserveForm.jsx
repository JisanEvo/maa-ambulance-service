
// with map
import React, { useState } from 'react';
import axios from 'axios';
import { Map, Marker, NavigationControl } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const AutoCompleteAddress = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null); // Coordinates for selected location
    const apiKey = 'b457125c27364542bbd332bea921f2aa'; // Your OpenCage API Key

    // Function to handle input change and fetch suggestions
    const handleInputChange = async (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            try {
                const response = await axios.get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(value)}&key=${apiKey}`
                );
                const results = response.data.results.map(result => ({
                    formatted: result.formatted,
                    geometry: result.geometry,
                }));
                setSuggestions(results); // Store both formatted address and location
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        } else {
            setSuggestions([]); // Clear suggestions if input is empty
        }
    };

    // Function to handle suggestion click and update map location
    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.formatted); // Set selected address in the input field
        setSuggestions([]); // Clear suggestions
        setSelectedLocation(suggestion.geometry); // Update map with selected location
    };

    return (

        <div >

            <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 bg-red-200 rounded-lg ">
                <h2 className="w-full text-3xl text-black text-center  font-bold leading-tight">রিজার্ভ ফর্ম</h2>
                <p className='text-black text-center'>নিচের তথ্য গুলো সঠিক ভাবে পূরণ করুন!!</p>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1 text-black">আপনার স্থান নির্ধারণ করুনঃ</label>
                    <input id="name" type="text" placeholder="আপনার স্থান নির্ধারণ করুন" required="" className="block w-full  text-black outline-none rounded-md py-3 px-2"
                        onChange={handleInputChange}

                    />
                </div>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1 text-black">আপনার গন্তব্য নির্ধারণ করুনঃ</label>
                    <input id="name" type="text" placeholder="আপনার গন্তব্য নির্ধারণ করুন" required="" className="block w-full outline-none rounded-md py-3 px-2  text-black" onChange={handleInputChange} />
                    {suggestions.length > 0 && (
                        <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '0', marginTop: '5px' }}>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: 'black',
                                        borderBottom: '1px solid #ddd',
                                    }}
                                >
                                    {suggestion.formatted}
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1 text-black">আপনার নামঃ</label>
                    <input id="name" type="text" placeholder="আপনার নাম" required="" className="block w-full outline-none rounded-md py-3 px-2  text-black"  />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 ml-1 text-black">তারিখঃ</label>
                    <input id="email" type="date" placeholder="তারিখ" required="" className="block w-full  text-black outline-none rounded-md py-3 px-2" />
                </div>
                <div>
                    <label className="block mb-1 ml-1 text-black">ফোণ নাম্বারঃ</label>
                    <input id="email" type="phone" placeholder="ফোণ নাম্বার" required="" className="block w-full outline-none rounded-md py-3 px-2  text-black " />
                </div>

                <div>
                    <button type="submit" className="w-full px-4 py-4 font-bold  shadow focus:outline-none  hover:dark:ring-violet-600 hover:bg-red-400 text-black  outline-none rounded-md" >রিজার্ভ করুন</button>
                </div>
            </form>
        </div>








        // <div style={{ width: '400px', margin: '0 auto' }}>
        //     {/* Input field for address */}
        //     <input
        //     className='text-black'
        //         type="text"
        //         value={inputValue}
        //         onChange={handleInputChange}

        //         placeholder="Enter address..."
        //         style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
        //     />

        //     {/* Show suggestions */}



        // </div>
    );
};

export default AutoCompleteAddress;
