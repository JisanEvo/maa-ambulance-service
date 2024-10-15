import { useEffect, useState } from "react";
import banner1 from '/banner1.png';
import banner2 from '/banner2.jpg';
import banner3 from '/banner3.jpg';
import banner4 from '/banner4.jpg';
import banner5 from '/banner5.jpg';

export const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: banner1, title: "মা এ্যাম্বুলেন্স মেডিসিন !!", des: " আপনার বিপদে সঠিক সময়ে উপস্থিত থেকে বিশ্বস্ত এবং নির্ভরযোগ্য মেডিকেল সেবা প্রদান করে!!", }, { img: banner2, title:  "মা এ্যাম্বুলেন্স মেডিসিন !!", des: "২৪/৭ সেবা এবং দ্রুত যোগাযোগের মাধ্যমে আপনি আমাদের উপর পুরোপুরি নির্ভর করতে পারেন যেকোনো জরুরী মুহূর্তে।", }, { img: banner4, title:  "মা এ্যাম্বুলেন্স মেডিসিন !!", des: "আমাদের এ্যাম্বুলেন্সগুলো আধুনিক মেডিকেল সরঞ্জাম এবং অভিজ্ঞ কর্মীদল দ্বারা সজ্জিত, যা নিশ্চিত করে উন্নত চিকিৎসা।", }, { img:banner3 , title:  "মা এ্যাম্বুলেন্স মেডিসিন !!", des: "আমাদের এ্যাম্বুলেন্সগুলো আধুনিক মেডিকেল সরঞ্জাম এবং অভিজ্ঞ কর্মীদল দ্বারা সজ্জিত, যা নিশ্চিত করে উন্নত চিকিৎসা।", }, { img: banner5, title:  "মা এ্যাম্বুলেন্স মেডিসিন !!", des: "আমরা সাশ্রয়ী মূল্যে সেবা প্রদান করি, যাতে আপনার প্রয়োজনীয় চিকিৎসা সেবার জন্য অতিরিক্ত চাপ না পড়ে।", },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <>
            <div className="relative w-full h-80 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center "
                style={{ backgroundImage: `url(${sliders[currentSlider].img})`, padding: 16 }}>
                <div className="absolute inset-0 bg-black/50"></div>

                       {/* text container here */}
                <div className="drop-shadow-lg text-white font-serif text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-8">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg bg-red-600 rounded-md p-4">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>
        </>
    )
};

export default Banner;