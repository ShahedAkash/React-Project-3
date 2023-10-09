
const DetailInfo = ({detailInfo}) => {
    const {name, famousFor, img,price} = detailInfo;
    return (
        <div className="flex justify-center items-center mb-4">
            <div className="w-[50%]">
                <img className="w-full rounded-r-full" src={img}/>
            </div>
            <div className="mx-auto">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{famousFor}</p>
                <h3 className="text-lg font-semibold">{price}</h3>
            </div>
        </div>
    );
};

export default DetailInfo;