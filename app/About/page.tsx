import { FaRegClock, FaRegMoneyBillAlt, FaRegHeart } from 'react-icons/fa';

const Page = () => {
  return (
    <>
      <section className="w-full relative flexCenter shadow-2xl">
        <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10"></div>
        <video
          src={"/about_video.mp4"}
          muted
          autoPlay
          loop
          className="absolute h-full w-full top-0 bottom-0 object-cover"
        ></video>
        {/* content  */}
        <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
          <div className="px-5 py-8 text-white lg:ms-20">
            <span className="uppercase regular-18 ">
              TRAVEL TO ANY CORNER OF WORLD
            </span>
            <h2 className="h2 max-w-[777px]">Make Your Tour Amazing With Us</h2>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mt-20 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">About Reyansh Travel</h1>
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Reyansh Travel is your gateway to unforgettable travel experiences. We specialize in curating
              personalized trips that cater to every traveler's unique interests, whether you're seeking
              adventure, cultural immersion, relaxation, or a mix of it all.
            </p>
            <p className="mb-4">
              Our team of travel enthusiasts is dedicated to crafting seamless itineraries that showcase the
              best each destination has to offer. From exotic beach getaways to thrilling jungle safaris,
              we're committed to exceeding your expectations every step of the way.
            </p>
            <p className="mb-4">
              At Reyansh Travel, we believe that travel has the power to enrich lives and foster connections
              across borders. That's why we strive to create authentic experiences that leave a lasting
              impact, both on our travelers and the communities we visit.
            </p>
            <p>
              Whether you're a seasoned globetrotter or embarking on your very first journey, let Reyansh
              Travel be your guide to the world's most captivating destinations. Join us and unlock the
              adventure of a lifetime!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center ">
              <FaRegClock className="text-5xl text-gray-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Time-Saving</h3>
              <p className="text-gray-700">We plan efficient itineraries, saving you time and hassle.</p>
            </div>
            <div className="text-center">
              <FaRegMoneyBillAlt className="text-5xl text-gray-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Affordable</h3>
              <p className="text-gray-700">Enjoy competitive prices without compromising on quality.</p>
            </div>
            <div className="text-center">
              <FaRegHeart className="text-5xl text-gray-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">Our priority is your happiness and satisfaction throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page;
