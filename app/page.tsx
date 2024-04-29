import Features from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonial";
// import VideoCarousel from "@/components/VideoCarousel";

export default function Home() {
  return (
   <div>
   <Hero/>
   <Features/>
   <Packages/>
   <Testimonial/>
   {/* <VideoCarousel/> */}
   </div>
  );
}
