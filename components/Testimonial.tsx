"use client"

import { TESTIMONIAL } from '@/CONSTANT'
import React from 'react'
import Slider from 'react-slick'
import Image from "next/image";

import { FaQuoteLeft } from "react-icons/fa";

import Accordion from "./Accordion";

import Link from "next/link";

const Testimonial = () => {

    var settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };
    

  return (
    <section className='max_padd_container py-16 shadow-2xl bg-white relative'>
        <div className='flex flex-col lg:flex-row gap-y-8 '>
            {/* left  */}
            <div className='px-5'>
                <h4 className='bold-18 px-5 text-secondary'>HAPPY CUSTOMERS</h4>
                <h3 className='h3 px-4 max-w-lg'>Testimonials</h3>
                <div className='max-w-[666px] pt-5'>
                    <Slider {...settings} className='bg-[#e5e5e5] rounded-2xl'>
                        {TESTIMONIAL.map((test) => (
                            <TestimonialItem
                            key={test.URL}
                            URL={test.URL}
                            title={test.title}
                            des={test.des}
                            profession={test.profession}
                        
                            />
                        ))}
                    </Slider>
                </div>
            </div>
             {/* right  */}
        <div>
          <Accordion/>
        </div>
        </div>
    </section>
  )
}

type TestimonialItem = {
    URL: string;
    title: string;
    des: string;
    profession: string;
  };
  
  const TestimonialItem = ({ title, URL, des, profession }: TestimonialItem) => {
    return (
      <div className='my-8 rounded-md z-10 mx-10'>
        <div className='pb-6'>
            <Image src={URL} alt={title} height={77} width={77} className='rounded-full mb-4'/>
            <div className=''>
                <div className='medium-20 text-secondary'>{title}</div>
                <div className='text-gray-20 regular-14'>{profession}</div>
            </div>
        </div>
        <span className='text-3xl -z-10'><FaQuoteLeft /></span>
        <p className='max-w-lg pt-3 text-gray-50'>{des}</p>
      </div>
    );
  };

export default Testimonial
