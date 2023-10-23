import { useLoaderData } from "react-router-dom";
import CarCard from "./CarCard";


const Cars = () => {

const cars=useLoaderData();

console.log(cars);


    return (
        <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-56">
                {
                cars.map(car=><CarCard key={car.id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default Cars;