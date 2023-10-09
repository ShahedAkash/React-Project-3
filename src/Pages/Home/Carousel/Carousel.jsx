
const Carousel = () => {
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center -mt-28">
            <div className="-z-10 opacity-70 h-[100vh] w-full -mt-12 absolute brightness-125">
                <img className="h-[100%] w-full" src="https://i.ibb.co/wrFLCPD/1920x1080-0.jpg" />
            </div>
            <div className="absolute flex flex-col justify-center items-center -mt-48">
                <h1 style={{textShadow: '-2px -2px -4px rgba(0, 0, 0, 0.5)'}} className="text-xl md:text-3xl lg:text-5xl font-extrabold">Stay with us</h1>
                <h2 style={{textShadow: '-2px -2px -4px rgba(0, 0, 0, 0.5)'}} className="text-base md:text-xl lg:text-3xl font-bold mt-4 mb-2 ">and</h2>
                <p style={{textShadow: '-2px -2px -4px rgba(0, 0, 0, 0.5)'}} className="font-extrabold text-base md:text-lg lg:text-xl ">make your wedding memorable</p>

                {/* <div className="my-10 flex">
                    <input type="text" placeholder="Search here....." className="input input-bordered input-md w-full max-w-xs rounded-r-none" />
                    <button className="btn bg-red-500 text-white rounded-l-none border-red-500">Search</button>
                </div> */}
            </div>
        </div>
    );
};

export default Carousel;