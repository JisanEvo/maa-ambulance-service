import ReserveForm from "./ReserveForm";

const Reserve = () => {
    return (
        <div>
      <div className="flex flex-col sm:flex-row">
    <div className="bg-black text-white sm:w-1/3 w-full p-4">
        <ReserveForm />
    </div>
    <div className="bg-blue-700 sm:w-2/3 w-full text-white min-h-screen p-4">
        Google Map
    </div>
</div>

        </div>
    );
};

export default Reserve;