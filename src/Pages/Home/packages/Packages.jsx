import { Link } from "react-router-dom";

const Packages = ({ packages }) => {
    const { package_name, img, id } = packages;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[40vh] w-full" src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{package_name}!</h2>
                <Link className="font-semibold text-red-500" to={`packagesDetail/${id}`}>Details...</Link>
            </div>
        </div>
    );
};

export default Packages;