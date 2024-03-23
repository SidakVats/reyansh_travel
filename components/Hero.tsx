import { IoLocation } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="max_padd_container w-full relative flexCenter shadow-2xl">
      <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10"></div>
      <video
        src={"./video.mp4"}
        muted
        autoPlay
        loop
        className="absolute h-full w-full top-0 bottom-0 object-cover"
      ></video>
      {/* content  */}
      <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
        <div className="px-0 py-8 text-white lg:ms-20">
          <span className="uppercase regular-18">
            TRAVEL TO ANY CORNER OF WORLD
          </span>
          <h2 className="h2 max-w-[777px]">Make Your Tour Amazing With Us</h2>
        </div>
        {/* form  */}
        <div>
          <div className="text-center">
            <span className="bg-white text-tertiary medium-16 py-4 rounded-xl px-12">Search For Your Trip</span>
          </div>
          <div className="flex flex-col lg:mx-20 md:flex-row gap-6 px-8 py-10 md:px-12 bg-white rounded-xl">
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="city" className="block text-gray-50 pb-2">
                Search Your Destination:
              </label>
              <div className="flexCenter h-10 px-6 py-1 bg-primary rounded-full w-full">
                <input
                  type="text"
                  placeholder="Enter Name Here..."
                  className="bg-transparent border-none outline-none w-full regular-20"
                />
                <IoLocation className="text-lg" />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
              <label htmlFor="date" className="block text-gray-50 pb-2">
                Search Your Date:
              </label>
              <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                <input
                  type="date"
                  className="bg-transparent border-none outline-none w-full regular-14"
                />
              </div>
            </div>
            <div className="flex flex-col w-full xl:px-6">
                <div className="flexBetween items-center">
                    <label htmlFor="price" className="block text-gray-50 pb-2">
                    Max Price:
                    </label>
                    <h4>₹150000</h4>
                </div>
                <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                    <input
                    type="range"
                    className="border-none outline-none w-full regular-14"
                    max={"1500000"}
                    min={"3000"}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
