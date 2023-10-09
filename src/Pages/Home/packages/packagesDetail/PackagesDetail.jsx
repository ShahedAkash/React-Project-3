import { useLoaderData, useParams } from "react-router-dom";

const PackagesDetail = () => {
    const packages = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const selectedPackage = packages.find(selectedPackage => selectedPackage.id === intId);

    return (
        <div className="w-[90%] mx-auto">
            <div className="rounded-box">
                <img className="rounded-box" src={selectedPackage.img} alt="" />
            </div>
            <div className=" my-10">
                <h2>{selectedPackage.package_name}</h2>
                <p>{selectedPackage.description}</p>
                <p>{selectedPackage.price}</p>
                {
                    selectedPackage.includes.map(include=> <li className="list-decimal">{include}</li>)
                }

            </div>
        </div>
    );
};

export default PackagesDetail;