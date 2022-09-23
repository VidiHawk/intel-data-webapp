import React, { FC, ReactNode, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcModal from "components/NcModal/NcModal";
import { PlayIcon } from "@heroicons/react/outline";

export interface SectionHero2Props {
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  href: string;
  youtubeID: string;
}
const SectionHero2: FC<SectionHero2Props> = ({
  heading,
  subHeading,
  rightImg,
  href,
  youtubeID,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const renderOpenModalVideo = () => {
    return (
      <ButtonSecondary onClick={() => setShowVideo(!showVideo)}>
        Play video
        <PlayIcon className="w-5 h-5 ml-2" />
      </ButtonSecondary>
    );
  };

  const renderVideoModalContent = () => {
    return (
      <div className="aspect-w-16 aspect-h-9 ">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="ncblog hero video"
        ></iframe>
      </div>
    );
  };

  return (
    <div className="relative pb-20 md:py-32 lg:py-60 bg-black">
      <div className="flex w-full mb-10 md:w-1/2 xl:w-3/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:mb-0">
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-40 from-black bg-gradient-to-r"></div>
        <img className="w-full h-full object-cover" src={rightImg} alt="" />
      </div>
      <div className="container relative z-10 text-neutral-100">
        <div className="max-w-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 561.16 900.1">
            <path
              path="cls-1"
              fill="#fff"
              d="M273,430.74c10.7,0,17.39,7.75,15.22,17.33A13.88,13.88,0,0,1,275.5,459c-1.16.09-2.33,0-3.49,0H-256c-9.28,0-14.76-3.88-16.26-11.48a13.93,13.93,0,0,1,12.33-16.72,49,49,0,0,1,5-.12H-101V90.9c-2.62.74-4.93,1.5-7.28,2.06-30.26,7.22-58.45-15.22-58.52-46.86-.12-58.67,0-117.34,0-176q0-31.76,0-63.5c0-29.91,22.62-52.54,52.49-52.61,15.33,0,30.67.1,46-.06a17.62,17.62,0,0,1,13.69,5.92c19.46,20.36,39.05,40.59,58.58,60.89,1.25,1.3,2.33,2.76,3.38,4,4.89-4.7,9.31-8.7,13.45-13q25-25.85,49.92-51.88a18,18,0,0,1,14.17-6c15.33.18,30.67,0,46,.07,29.26.1,52,22.81,52.07,52q.06,119.76-.11,239.52c0,6.54-1.74,13.07-2.74,20,1.12,0,2.86.2,4.6.21,17.66,0,35.33,0,53,0,10.8,0,16.25,5.46,16.26,16.34q0,70.76,0,141.51c0,11.1-5.47,16.45-16.68,16.45H38.69c-11.23,0-16.6-5.3-16.6-16.44q0-70.76,0-141.51c0-10.93,5.33-16.33,16.18-16.35,15.83,0,31.67,0,47.5,0H91.7c-5.83-17.8-3.19-35.71-3.36-53.4-.37-37.67-.13-75.34-.12-113,0-9.6,5.11-15.91,13.17-16.43a14.1,14.1,0,0,1,15.29,12.65,50.05,50.05,0,0,1,.19,6.49q0,71.51,0,143c0,12.15,7.37,20.51,18.21,20.7,11.11.19,19.19-8.16,19.2-20.4q.11-119.76,0-239.52c0-13.22-9.07-22.86-22.39-23.38-13.64-.53-27.33-.27-41,0-1.79,0-3.87,1.65-5.26,3.08q-32.89,33.93-65.62,68c-7.87,8.17-16.21,8.12-24.15-.12q-32.62-33.82-65.18-67.73a10.12,10.12,0,0,0-8.26-3.45c-11.83.19-23.66,0-35.5.09-15.83.11-25.24,9.49-25.25,25.21q0,118.26,0,236.52c0,10.35,4.68,18,12.5,20.78,12.43,4.36,24.91-4.76,24.92-18.4q.08-71.5,0-143c0-2.34-.09-4.68.11-7,.7-8.11,6.69-13.62,14.52-13.51,7.51.1,13.31,5.7,14,13.6.19,2.32.06,4.67.06,7q0,260.27,0,520.54v6.3H-6.14v-6.18q0-79.24,0-158.51A23.25,23.25,0,0,1-5,257.86a13.81,13.81,0,0,1,15.24-8.69,14.07,14.07,0,0,1,11.87,13c.14,2,.05,4,.05,6V430.37H88c.09-1.94.26-3.86.26-5.77q0-75.51.05-151a30.15,30.15,0,0,1,.72-7.42A13.66,13.66,0,0,1,102.2,256c6.34-.11,12,3.6,13.69,9.59a32.52,32.52,0,0,1,1,8.88q.07,74.5,0,149v7.28H124Q198.46,430.71,273,430.74ZM225.12,112.16c.2-5.8.1-11.61.1-17.9H50.51c0,5.29.23,10.42-.07,15.51-.21,3.5,1.17,5,4.38,6,14.15,4.37,28.21,9,42.33,13.46a136,136,0,0,0,57.79,5c23.7-2.86,45.45-12.67,68.07-19.34A3.73,3.73,0,0,0,225.12,112.16Zm-.19,99.29V144.32c-11,3.56-21.63,6.93-32.19,10.42-25.89,8.57-52.45,12.15-79.3,7-17.74-3.39-35-9.37-52.43-14.22-3.3-.91-6.54-2-10.18-3.11v67Z"
              transform="translate(272.56 441.04)"
            />
            <path
              path="cls-1"
              fill="#fff"
              d="M92.51-356.7c.1,46.42-37.75,84.53-84,84.6-47.1.07-85.16-37.83-85-84.63A84.47,84.47,0,0,1,7.76-441,84.45,84.45,0,0,1,92.51-356.7ZM7.4-300.53c29.89.57,55.91-24.18,56.6-53.84.74-31.9-23.5-57.53-55.15-58.32-30-.75-56.23,24.25-56.85,54.12C-48.67-326.68-24.29-301.14,7.4-300.53Z"
              transform="translate(272.56 441.04)"
            />
          </svg>
          <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl mt-3 md:!leading-[110%] ">
            {heading}
          </h1>
          <p className="mt-7 text-base lg:text-xl text-neutral-300 ">
            {subHeading}
          </p>
          <div className="flex space-x-4 mt-11">
            <ButtonPrimary href={href}>Read more</ButtonPrimary>

            <NcModal
              isOpenProp={showVideo}
              onCloseModal={() => setShowVideo(false)}
              contentExtraClass="max-w-screen-lg 2xl:max-w-screen-xl"
              contentPaddingClass=""
              renderContent={renderVideoModalContent}
              renderTrigger={renderOpenModalVideo}
              modalTitle=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
