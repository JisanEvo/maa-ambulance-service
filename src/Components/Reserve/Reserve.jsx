import ReserveForm from "./ReserveForm";

const Reserve = () => {
    // const screenHeight=window.innerHeight*0.72
    return (
        <div>
            <h1 className="text-xl">রিজার্ভ করুন </h1>
<div className="flex items-center justify-center min-h-screen container mx-auto">
<div className="bg-red-300 text-white w-full p-4 rounded-lg py-8">
                    <ReserveForm />
                </div>

            </div>

        </div>
    );
};

export default Reserve;