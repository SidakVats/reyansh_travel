"use client";
import { FEATURE } from "@/CONSTANT";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import { LuArrowBigRightDash, LuArrowBigLeftDash  } from "react-icons/lu";

const Features = () => {

  const NextArrow = (props:any) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className="bg-white hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5">
        <LuArrowBigRightDash className="" />
      </div>
    )
  }

  const PrevArrow = (props:any) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className="bg-white hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5">
       <LuArrowBigLeftDash />
      </div>
    )
  }

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
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
    ]
  };

  return (
    <div>
      <section className="max_padd_container py-20 xl:py-32 bg-white">
        <div className="w-[90%] m-auto">
          <div className="mx-4">
            <h4 className="bold-18 text-secondary">WHAT WE SERVE</h4>
            <h3 className="h3 max-w-lg">We Provide Top Destinations</h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              adipisci quasi, corporis praesentium natus ea assumenda similique
              nemo hic doloremque qui cum ex veniam animi, amet numquam
              exercitationem esse necessitatibus.
            </p>
          </div>
          {/* container  */}
          <div className="pt-12">
            <Slider {...settings} >
              {FEATURE.map((feature) => (
                <FeatureItem
                
                  key={feature.URL}
                  URL={feature.URL}
                  title={feature.title}
                  des={feature.des}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

type FeatureItem = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group relative rounded-2xl " >
    <Link href={"/"} className="overflow-hidden ">
      <div className="shadow-2xl">
        <Image
          src={URL}
          alt="img"
          height={600}
          width={510}
          className="group-hover:rotate-3 hover:scale-105 transition-all duration-700 overflow-hidden "
        />
      </div>
      <h4 className="regular-18 absolute top-8 left-0 bg-tertiary text-white px-4 py-2 rounded-r-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">{title}</h4>
      <p className="regular-18 absolute bottom-6 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">{des}</p>
    </Link>
    </div>
  );
};

export default Features;
