import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { id, serviceType, imageURL } = service;
    return (
        <div className="card border-none">
            <figure><img className="h-[15vh]" src={imageURL} /></figure>
            <h2 className="text-xl font-bold text-center">{serviceType}</h2>
            <Link className="text-red-500 font-semibold text-center" to={`/detailService/${id}`}>Details...</Link>
        </div>

    );
};

export default Service;