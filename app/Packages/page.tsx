"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { PACKAGE } from "@/CONSTANT";

interface PackageItem {
  URL: string;
  title: string;
  des: string;
  location: string;
  price: string;
  duration: string;
}

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter packages based on search term and duration
  const filteredPackages: PackageItem[] = PACKAGE.filter(
    (pkg: PackageItem) =>
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.duration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Video background */}
      <section className="w-full relative flexCenter shadow-2xl">
        <video
          src={"./package_video.mp4"}
          muted
          autoPlay
          loop
          className="absolute h-full w-full top-0 bottom-0 object-cover"
        ></video>
        {/* Content */}
        <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
          <div className="px-0 py-8 text-white  lg:ms-20">
            <span className="uppercase regular-18 px-5 sm:text-xl">
              TRAVEL TO ANY CORNER OF WORLD
            </span>
            <h2 className="h2 max-w-[777px] px-5">
              Make Your Tour Amazing With Us
            </h2>
          </div>
        </div>
      </section>

      {/* Display filtered packages or "No results found" message */}
      <section className="max_padd_container py-16 xl:py-28 bg-slate-10">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">
            TAKE A LOOK AT THESE OFFERS
          </h4>
          <h3 className="h2 max-w-xl font2">We Provide Top Destinations</h3>
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            adipisci quasi, corporis praesentium natus ea assumenda similique
            nemo hic doloremque qui cum ex veniam animi, amet numquam
            exercitationem esse necessitatibus.
          </p>
        </div>

        {/* Search bar */}
        <div className="max_padd_container mt-10 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Your Destination or Package Days"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="w-full card4 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:border-primary"
            />
            {/* Toggle between search and clear button */}
            {searchTerm.length > 0 ? (
              <div
                className="absolute inset-y-0 right-0 flex items-center cursor-pointer bg-secondary p-3 px-5 text-white"
                style={{
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
                onClick={clearSearch}
              >
                Clear
              </div>
            ) : (
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

        <div className="max_padd_container mt-10 relative">
          <div className="grid gap-8 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-col-4 py-12">
            {filteredPackages.length > 0 ? (
              // Render filtered packages
              filteredPackages.map((elem) => (
                <PackagesItem
                  key={elem.URL}
                  URL={elem.URL}
                  title={elem.title}
                  des={elem.des}
                  location={elem.location}
                  price={elem.price}
                  duration={elem.duration}
                />
              ))
            ) : (
              // Render "No results found" message
              <div className="text-center text-xl text-gray-500">
                No Packages Found.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const PackagesItem: React.FC<PackageItem> = ({
  title,
  URL,
  des,
  location,
  price,
  duration,
}) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-2xl  border border-slate-200 group">
      <Link href={"/Description"} className="overflow-hidden  relative ">
        <div className="overflow-hidden">
          <Image
            src={URL}
            alt="Image"
            width={640}
            height={366}
            className=" overflow-hidden group-hover:rotate-2  group-hover:scale-105 transition-all duration-500 "
          ></Image>
        </div>
        <span className="bold-16 text-white bg-tertiary absolute top-6 left-2  px-6 py-2 rounded-full group-hover:bg-secondary">
          ₹{price}
        </span>
      </Link>
      <div className="p-4 bg-white">
        <div className="capitalize medium-22">
          <div className="pb-2 flexBetween">
            <div className="group-hover:text-secondary ">{title}</div>
            <div className="bg-tertiary text-white px-4 py-1 rounded-2xl regular-18 hover:bg-secondary">
              <a href="/Contact">Book Now</a>
            </div>
          </div>
          <div className="flex items-center gap-x-2 my-1">
            <IoLocationOutline className="text-gray-50 group-hover:scale-105 transition-all duration-300" />
            <span className="regular-16  text-gray-50 group-hover:scale-105 transition-all duration-300">
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
          <div className="flexStart gap-2 text-gray-50 ">
            <PiClockCountdownFill className="text-lg" />{" "}
            <span className="medium-16 ">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
