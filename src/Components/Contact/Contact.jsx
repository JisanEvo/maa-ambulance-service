import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="min-h-screen">

            <section className="bg-white dark:bg-gray-900">
                <p className="text-xl text-black fancy text-center pt-8 pb-1 w-48 mx-auto border-b-4 border-[#f3004b]  border-double rounded-full mb-8  ">পরিচালক বৃন্দ</p>
                {/*card1  */}
                <div className="flex flex-col items-center justify-center md:flex-row py-8">
                    <div className="group relative  sm:w-[350px]">
                        <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg bg-black/70" src="https://i.postimg.cc/SRRmsBGz/kuddusvi.jpg" alt="card navigate ui" />
                        <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                    </div>
                    <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        <div className="space-y-1">
                            <h2 className="text-center text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">আব্দুল কুদ্দুস মালিথা</h2>
                            <p className="text-gray-500 dark:text-white/70">পরিচালক</p>
                            <p>ফোণঃ০১৭৯৮৫৫৩৯৮৭</p>
                        </div>

                        <div>
                        <a href="https://www.facebook.com/kuddas.ali.5">
                        <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">SEND MESSAGE</button></a>
                        </div>
                    </div>
                </div>
                <div className=" px-6 py-10 mx-auto grid lg:grid-cols-2 sm:grid-cols-1">

                    {/*ড্রাইভার  */}
                    <div className="flex flex-col items-center justify-center md:flex-row py-8">
                    <div className="group relative  sm:w-[350px]">
                        <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg bg-black/70" src="https://i.postimg.cc/52zJrq0L/images.jpg" alt="card navigate ui" />
                        <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                    </div>
                    <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        <div className="space-y-1">
                            <h2 className="text-center text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">মোঃ আবির হোসেন </h2>
                            <p className="text-gray-500 dark:text-white/70">ড্রাইভার</p>
                            <p>ফোণঃ০১৭৯৮৫৫৩৯৮৭</p>
                        </div>

                        <div>
                        <a href="https://www.facebook.com/kuddas.ali.5">
                        <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">SEND MESSAGE</button></a>
                        </div>
                    </div>
                </div>

                    {/* card 2 */}

                    <div className="flex flex-col items-center justify-center md:flex-row py-8">
                    <div className="group relative  sm:w-[350px]">
                        <img width={350} height={350} className="h-full w-full scale-105 transform rounded-lg bg-black/70" src="https://i.postimg.cc/SRRmsBGz/kuddusvi.jpg" alt="card navigate ui" />
                        <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g id="style=linear"><g id="add"><path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path><path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path></g></g></g></svg></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                        <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
                    </div>
                    <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        <div className="space-y-1">
                            <h2 className="text-center text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">আব্দুল কুদ্দুস মালিথা</h2>
                            <p className="text-gray-500 dark:text-white/70">পরিচালক</p>
                            <p>ফোণঃ০১৭৯৮৫৫৩৯৮৭</p>
                        </div>

                        <div>
                        <a href="https://www.facebook.com/kuddas.ali.5">
                        <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">SEND MESSAGE</button></a>
                        </div>
                    </div>
                </div>

                </div>
            </section>


        </div>
    );
};

export default Contact;