import { Link } from "react-router-dom";


const CarCard = ({car}) => {

    const {_id, photo, name, brand_name, type, price, description}=car;
    return (
        <div>
            <div className="">
                <div className="hero-content w-full flex-col lg:flex-row shadow-lg rounded-xl">
                    <img src={photo} className="w-full" />
                    <div className="w-full h-full bg-slate-300 space-y-3 p-4">
                        <h2 className="text-2xl font-bold">Model: {name}</h2>
                        <h2 className="text-xl font-semibold">Brand: {brand_name}</h2>
                    <p className="text-xl font-semibold">Price: {price}</p>
                    <Link>
                        <button className="btn btn-primary  text-white mt-3">See Full Features</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;