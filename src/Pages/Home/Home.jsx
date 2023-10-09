import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import Service from "./Sarvice/Service";
import Planners from "./planners/Planners";
import Packages from "./packages/Packages";
import { useEffect, useState } from "react";

const Home = () => {
    const services = useLoaderData();

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("/public/packages.json")
            .then(rsc => rsc.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <Carousel></Carousel>
            <div className="mt-28 mb-10 w-[90%] mx-auto">
                <h1 className="text-4xl font-bold text-center mb-16">Our wedding Packages</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        packages.map(packages => <Packages key={packages.id} packages={packages}></Packages>)
                    }
                </div>
            </div>
            <div className="my-28 w-[90%] mx-auto">
                <h1 className="text-4xl font-bold text-center my-16">Our Wedding Planner</h1>
                <Planners></Planners>
            </div>
            <div className="w-[90%] mx-auto mt-28">
                <h1 className="text-4xl font-bold text-center my-16 ">See Detail Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 my-10 ">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;