"use client"; // Added "use client" at the top

// Import necessary modules and types from Next.js
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import pauseImg from "../public/pause.svg";
import playImg from "../public/play.svg";
import replayImg from "../public/replay.svg";

const styles = `
/* CSS for hiding on small screens */
@media only screen and (max-width: 767px) {
  #hidetext {
    display: none;
  }
}

/* CSS for displaying on medium and large screens */
@media only screen and (min-width: 768px) {
  #hidetext {
    display: block;
  }
}
`;

// Define the VideoCarousel component
const VideoCarousel = () => {
  const highlightsSlides = [
    {
      id: 1,
      textLists: [
        "Discover Italy",
        // "Where Every Moment Echoes Romance",
      ],
      des: "Where Passion Meets History",
      video: "/carousel1.mp4",
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: [
        "Experience Russia ",
        // "Explore a Land of Endless Wonders"
      ],
      des: "Where History Beckons at Every Turn",
      video: "/carousel2.mp4",
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        // "U.S.A",
        "Statue of Liberty ",
      ],
      des: "Beacon of Hope, Symbol of Freedom",
      video: "/carousel3.mp4",
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: [
        "Discover Africa ",
        // "Where Nature, Culture, and Adventure Converge","From Savannas to Cities, a World of Discovery"
      ],
      des: "Where Nature, Culture, and Adventure Converge",
      video: "/carousel4.mp4",
      videoDuration: 3.63,
    },
  ];

  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);
  const [loadedData, setLoadedData] = useState<boolean[]>([]); // Added loadedData state

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      x: -100 * videoId + "%",
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            highlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  useEffect(() => {
    if (startPlay && loadedData.every(Boolean)) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type: string, i?: number) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i! + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i: number) => {
    setLoadedData((prev) => {
      const newData = [...prev];
      newData[i] = true;
      return newData;
    });
  };

  return (
    <>
      <div className="flex items-center mt-12 mx-10 ">
        {highlightsSlides.map((list, i) => (
          <div
            key={list.id}
            id="slider"
            className="sm:pr-20 pr-10 group cursor-pointer "
          >
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh] shadow-2xl rounded-3xl">
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline
                  className={` pointer-events-none w-full `}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el!)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={() => handleLoadedMetaData(i)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div
                id="hidetext"
                className=" absolute top-12 left-0 bg-tertiary text-white px-4 py-2 rounded-r-full group-hover:bg-secondary  group-hover:!pr-8 transition-all duration-300"
              >
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="text-lg group-hover:text-white  ">
                    {text}
                  </p>
                ))}
              </div>
              <div
                id="hidetext"
                className=" absolute bottom-10 right-0 bg-tertiary text-white px-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300"
              >
                <p className="text-lg group-hover:text-white ">{list.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-center mt-10">
        <div className="flex items-center justify-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el!)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el!)}
              />
            </span>
          ))}
        </div>
        <button className="ml-4 p-4 rounded-full bg-gray-300 backdrop-blur flex-center">
          <Image
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            width={24}
            height={24}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
      <style>{styles}</style>
    </>
  );
};

export default VideoCarousel;
