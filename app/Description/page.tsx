"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { LuArrowBigRightDash, LuArrowBigLeftDash } from "react-icons/lu";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCentercode } from "react-icons/lia";
import { HOTEL } from "@/CONSTANT";
import { FEATURE1 } from "@/CONSTANT";
import { RiSearchLine } from "react-icons/ri";

interface HotelItem {
  URL: string;
  title: string;
  des: string;
  location: string;
  price: string;
  duration: string;
}

const Page: React.FC = () => {
  const [showAllHotels, setShowAllHotels] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to toggle showing all hotels
  const handleViewAll = () => {
    setShowAllHotels(true);
  };

  // Function to toggle showing only the initial six hotels
  const handleShowLess = () => {
    setShowAllHotels(false);
  };

  // Filtered hotels based on whether to show all or just the initial six
  const filteredHotels: HotelItem[] = showAllHotels
    ? HOTEL
    : HOTEL.slice(0, 6).filter((hotel) =>
        hotel.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5"
      >
        <LuArrowBigRightDash className="" />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <>
        <div
          onClick={onClick}
          className="bg-white hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5"
        >
          <LuArrowBigLeftDash />
        </div>
      </>
    );
  };

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  // Function to clear the search query
  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div>
      {/* Banner Section */}
      <section className=" w-full relative flexCenter shadow-2xl mt-10">
        <video
          src={"./italy_video.mp4"}
          muted
          autoPlay
          loop
          className="absolute h-full w-full top-0 bottom-0 object-cover"
        ></video>
        <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
          <div className="px-0 py-8 text-white  lg:ms-20">
            <span className="uppercase regular-18 px-5">TRAVEL TO ANY CORNER OF WORLD</span>
            <h2 className="h2 max-w-[777px] px-5">Ancient Italy</h2>
          </div>
        </div>
      </section>

      {/* Top Destination section */}
      <section className=" shadow-sm py-20 xl:py-32 bg-white">
        <div className="w-[90%] m-auto">
          <div className="mx-4">
            <h4 className="bold-18 text-secondary ">WHAT WE SERVE</h4>
            <h3 className="h2 max-w-xl font2">Top Destinations In Italy</h3>
            <p className="max-w-4xl">
              Italy has something to offer to every kind of tourist, whether their interests lie in the romantic canals of Venice, the Renaissance masterpieces of Florence, or the ancient ruins of Rome. So grab your gears and set out on an incredible adventure into the heart of Italy, where each encounter leaves a lasting imprint and every turn unveils a new joy.
            </p>
          </div>
          <div className="pt-12">
            <Slider {...settings}>
              {FEATURE1.map((feature) => (
                <FeatureItem key={feature.URL} URL={feature.URL} title={feature.title} />
              ))}
            </Slider>
          </div>
        </div>


        

      </section>

      {/* Top Hotels section */}
      <section className="max_padd_container py-16 xl:py-28 bg-slate-10">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">TAKE A LOOK AT THESE OFFERS</h4>
          <h3 className="h2 max-w-xl font2">Top Hotels In Italy</h3>
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam adipisci quasi, corporis praesentium natus ea assumenda similique nemo hic doloremque qui cum ex veniam animi, amet numquam exercitationem esse necessitatibus.
          </p>
        </div>

        {/* Search bar */}
        <div className="max_padd_container mt-10 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Hotels and Prices"
              className="w-full card4 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-primary"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            {searchQuery && (
              <div
                className="absolute inset-y-0 right-0 flex items-center cursor-pointer bg-secondary p-3 px-5 text-white"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
                onClick={clearSearchQuery}
              >
                Clear
              </div>
            )}
            {!searchQuery && (
              <div
                className="absolute inset-y-0 right-0 flex items-center cursor-pointer bg-secondary p-3 px-5 text-white"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                <RiSearchLine className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-8 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-col-4 py-12">
          {filteredHotels.map((elem, index) => (
            <PackagesItem
              key={elem.URL}
              URL={elem.URL}
              title={elem.title}
              des={elem.des}
              location={elem.location}
              price={elem.price}
              duration={elem.duration}
            />
          ))}
        </div>

        {/* "View All" button */}
        {!showAllHotels && (
          <div className="text-center mt-8">
            <button
              className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition duration-300"
              onClick={handleViewAll}
            >
              Show All Hotels
            </button>
          </div>
        )}

        {/* "Show Less" button */}
        {showAllHotels && (
          <div className="text-center mt-8">
            <button
              className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary-dark transition duration-300"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

type FeatureItem = {
  URL: string;
  title: string;
};

const FeatureItem = ({ URL, title }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group relative rounded-2xl ">
      <Link href={"#"} className="overflow-hidden ">
        <div className="shadow-2xl">
          <Image
            src={URL}
            alt="img"
            height={600}
            width={510}
            className="group-hover:rotate-3 hover:scale-105 transition-all duration-700 overflow-hidden "
            style={{ height: "350px" }}
          />
        </div>
        <h4 className="regular-18 absolute top-8 left-0 bg-tertiary text-white px-4 py-2 rounded-r-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">{title}</h4>
      </Link>
    </div>
  );
};

const PackagesItem: React.FC<HotelItem> = ({ title, URL, des, location, price, duration }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-2xl border border-slate-200 group">
      <Link href={"/HotelDescription"} className="overflow-hidden relative">
        <div className="overflow-hidden">
          <Image
            src={URL}
            alt="Image"
            width={640}
            height={366}
            className="overflow-hidden group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <span className="bold-16 text-white bg-tertiary absolute top-6 left-2 px-6 py-2 rounded-full group-hover:bg-secondary">
          ₹{price}
        </span>
      </Link>
      <div className="p-4 bg-white">
        <div className="capitalize medium-22">
          <div className="pb-2 flexBetween">
            <span className="group-hover:text-secondary">{title}</span>
            <span className="bg-tertiary text-white px-4 py-1 rounded-2xl regular-18 hover:bg-secondary">
              <a href="/Contact">Book Now</a>
            </span>
          </div>
          <div className="flex items-center gap-x-2 my-1">
            <IoLocationOutline className="text-gray-50 group-hover:scale-105 transition-all duration-300" />
            <span className="regular-16 text-gray-50 group-hover:scale-105 transition-all duration-300">
              {location}
            </span>
          </div>
        </div>
        <hr className="mt-3" />
        <p className="my-3">{des}</p>
        <hr className="mb-3" />
        <div className="flexBetween">
          <div className="flexCenter gap-x-4">
            <div className="flexCenter gap-x-2 text-secondary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="medium-16">(222)</span>
          </div>
          <div className="flexStart gap-2 text-gray-50">
            <LiaCentercode className="text-lg" />{" "}
            <span className="medium-16">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
