import { useLoaderData, useParams } from "react-router-dom";
import DetailInfo from "./DetailInfo/DetailInfo";

const DetailService = () => {
    const srevices = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const service = srevices.find(service => service.id === intId );
    const detail = service.details;
    
    return (
        <div className="w-[90%] mx-auto">
            {
                detail.map(detailInfo => <DetailInfo key={detailInfo.name} detailInfo={detailInfo}></DetailInfo>)
            }
        </div>
    );
};

export default DetailService;