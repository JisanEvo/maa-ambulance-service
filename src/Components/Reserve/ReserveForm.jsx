
const ReserveForm = () => {
    return (
        <div>
            <section className="p-6 dark:text-gray-800">
                <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">আপনার স্থান নির্ধারণ করুনঃ</label>
                        <input id="name" type="text" placeholder="আপনার স্থান নির্ধারণ করুন" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" fdprocessedid="76892" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">আপনার গন্তব্য নির্ধারণ করুনঃ</label>
                        <input id="name" type="text" placeholder="আপনার গন্তব্য নির্ধারণ করুন" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" fdprocessedid="76892" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-1 ml-1">আপনার নামঃ</label>
                        <input id="name" type="text" placeholder="আপনার নাম" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" fdprocessedid="76892" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">তারিখঃ</label>
                        <input id="email" type="date" placeholder="তারিখ" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" fdprocessedid="k7dd7a" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 ml-1">ফোণ নাম্বারঃ</label>
                        <input id="email" type="phone" placeholder="ফোণ নাম্বার" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" fdprocessedid="k7dd7a" />
                    </div>

                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 hover:bg-red-600   dark:text-gray-50" fdprocessedid="2g6efx">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ReserveForm;