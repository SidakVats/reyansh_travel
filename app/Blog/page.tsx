import React from 'react'

const page = () => {
  return (
    <div>
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
        
      </div>
    </section>
    </div>
  )
}

export default page
