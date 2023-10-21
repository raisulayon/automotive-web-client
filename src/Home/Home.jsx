import { useLoaderData } from "react-router-dom";
import Category from "../Categories/Category";
import Banner from "./Banner";


const Home = () => {

    const brands=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-5xl font-bold text-center text-red-700 mt-10 mb-10 md:mb-12">
                Our Most Popular Brand
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        brands.map(brand=><Category key={brand.id} brand={brand}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;