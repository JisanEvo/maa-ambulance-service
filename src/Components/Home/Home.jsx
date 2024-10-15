import Banner from "./Banner/Banner";
import Description from "./Description/Description";
import Faq from "./Faq/Faq";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
               <div className="py-4 rounded-lg">
               <Banner></Banner>
               </div>
               <h1 className="text-4xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full mb-8 hover:bg-black hover:text-white hover:py-4 ">মা এম্বুলেন্স</h1>
               <Description></Description>
               <h1 className="text-4xl text-[#f3004b] fancy text-center pt-5 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full mb-8 hover:bg-black hover:text-white hover:py-4 ">কেন সেরা ?</h1>
                <Faq></Faq>

        </div>
    );
};

export default Home;