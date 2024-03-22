import { PACKAGE } from "@/CONSTANT";
import Image from "next/image";
import Link from "next/link";

import { PiClockCountdownFill } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Packages = () => {
  return (
    <section className="max_padd_container py-16 xl:py-28 bg-slate-10">
      <div className="mx-4">
        <h4 className="bold-18 text-secondary">TAKE A LOOK AT THESE OFFERS</h4>
        <h3 className="h3 max-w-lg">We Provide Top Destinations</h3>
        <p className="max-w-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          adipisci quasi, corporis praesentium natus ea assumenda similique nemo
          hic doloremque qui cum ex veniam animi, amet numquam exercitationem
          esse necessitatibus.
        </p>
      </div>
      <div className="grid gap-8 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-col-4 py-12">
        {PACKAGE.map((elem) => (
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
    </section>
  );
};

type PackagesItem = {
  URL: string;
  title: string;
  des: string;
  location: string;
  price: string;
  duration: string;
};

const PackagesItem = ({
  title,
  URL,
  des,
  location,
  price,
  duration,
}: PackagesItem) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-2xl  border border-slate-200 group">
      <Link href={"/"} className="overflow-hidden  relative ">
        <div className="overflow-hidden">
        <Image
          src={URL}
          alt="Image"
          width={640}
          height={366}
          className=" overflow-hidden group-hover:rotate-2  group-hover:scale-105 transition-all duration-500 "
        ></Image></div>
        <span className="bold-16 text-white bg-tertiary absolute top-6 left-2  px-8 py-2 rounded-full group-hover:bg-secondary">
          ₹{price}
        </span>
      </Link>
      <div className="p-4 bg-white">
        <div className="capitalize medium-22">
          <span className="group-hover:text-secondary">{title}</span>
          <div className="flex items-center gap-x-2 my-1">
            <IoLocationOutline className="text-gray-50" />
            <span className="regular-16 text-gray-50">{location}</span>
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
            <PiClockCountdownFill className="text-lg" />{" "}
            <span className="medium-16">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
