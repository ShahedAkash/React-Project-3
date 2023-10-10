import { useLoaderData, useParams } from "react-router-dom";

const PackagesDetail = () => {
    const packages = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const selectedPackage = packages.find(selectedPackage => selectedPackage.id == intId);

    return (
        <div className="w-[90%] mx-auto">
            <div className="rounded-box w-full">
                <img className="rounded-box" src={selectedPackage.img} alt="" />
            </div>
            <div className=" my-20 space-y-2">
                <h2 className="text-2xl font-bold">{selectedPackage.package_name}</h2>
                <p className="">{selectedPackage.description}</p>
                <p className="font-semibold">{selectedPackage.price}</p>
                <p>Includes:-</p>
                {
                    selectedPackage.includes.map(include=> <li className="list-decimal text-xs">{include}</li>)
                }

            </div>
        </div>
    );
};

export default PackagesDetail;