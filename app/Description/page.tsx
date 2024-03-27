"use client";
import { FEATURE1 } from "@/CONSTANT";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import { LuArrowBigRightDash, LuArrowBigLeftDash  } from "react-icons/lu";

const page = () => {

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
    ]
  };



  return (
    <div>
      <section className=" w-full relative flexCenter shadow-2xl mt-10">
        {/* <div className="absolute h-full w-full bg-[#2f6a7f2f] top-0 bottom-0 z-10"></div> */}
        <video
          src={"./italy_video.mp4"}
          muted
          autoPlay
          loop
          className="absolute h-full w-full top-0 bottom-0 object-cover"
        ></video>
        {/* content  */}
        <div className="w-full h-max pt-28 pb-12 flex gap-y-3 flex-col justify-center m-auto z-20 lg:pt-64 lg:pb-24">
          <div className="px-0 py-8 text-white  lg:ms-20">
            <span className="uppercase regular-18 px-5">
              TRAVEL TO ANY CORNER OF WORLD
            </span>
            <h2 className="h2 max-w-[777px] px-5">
              Ancient Italy
            </h2>
          </div>
        </div>
      </section>



      <section className=" shadow-2xl py-20 xl:py-32 bg-white">
        <div className="w-[90%] m-auto">
          <div className="mx-4">
            <h4 className="bold-18 text-secondary ">WHAT WE SERVE</h4>
            <h3 className="h2 max-w-xl font2">Top Destinations In Italy</h3>
            <p className="max-w-4xl">
            Italy has something to offer to every kind of tourist, whether their interests lie in the romantic canals of Venice, the Renaissance masterpieces of Florence, or the ancient ruins of Rome. So grab your gears and set out on an incredible adventure into the heart of Italy, where each encounter leaves a lasting imprint and every turn unveils a new joy.
            </p>
          </div>
          {/* container  */}
          <div className="pt-12">
            <Slider {...settings} >
              {FEATURE1.map((feature) => (
                <FeatureItem            
                  key={feature.URL}
                  URL={feature.URL}
                  title={feature.title}
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
};

const FeatureItem = ({  URL, title }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group relative rounded-2xl " >
    <Link href={"#"} className="overflow-hidden ">
      <div className="shadow-2xl">
        <Image
          src={URL}
          alt="img"
          height={600}
          width={510}
          className="group-hover:rotate-3 hover:scale-105 transition-all duration-700 overflow-hidden "
          style={{height:"350px"}}
        />
      </div>
      <h4 className="regular-18 absolute top-8 left-0 bg-tertiary text-white px-4 py-2 rounded-r-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">{title}</h4>
       {/* <p className="regular-18 absolute bottom-6 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">{des}</p> */}
    </Link>
    </div>
  );
};

export default page;
