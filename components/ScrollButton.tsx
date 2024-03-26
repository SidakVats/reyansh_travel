"use client"

import ScrollToTop from "react-scroll-up"
import { BsFillRocketFill } from "react-icons/bs";

const ScrollButton = () => {
  return (
    <div className="relative bottom-10 z-[300]">
      <ScrollToTop showUnder={150} >
        <p className="font-bold cursor-pointer text-secondary text-4xl hover:border-2 hover:border-secondary hover:rounded-full p-3">
            <BsFillRocketFill />
        </p>
      </ScrollToTop>
    </div>
  )
}

export default ScrollButton
