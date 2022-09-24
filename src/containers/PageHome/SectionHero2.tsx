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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="105.85"
            viewBox="0 0 66 105.85"
          >
            <path
              path="cls-1"
              fill="currentColor"
              d="M64.16,102.52a1.66,1.66,0,0,1,1.79,2,1.63,1.63,0,0,1-1.49,1.29c-.14,0-.28,0-.41,0H2c-1.09,0-1.74-.46-1.91-1.35a1.63,1.63,0,0,1,1.26-1.94l.19,0a5.61,5.61,0,0,1,.58,0H20.18v-40l-.86.24a5.56,5.56,0,0,1-6.88-5.51c0-6.9,0-13.8,0-20.7V29.12a6.06,6.06,0,0,1,6.17-6.19c1.8,0,3.61,0,5.41,0a2.06,2.06,0,0,1,1.61.69q3.44,3.6,6.89,7.16c.15.16.27.33.4.47.57-.55,1.09-1,1.58-1.53,2-2,3.92-4.06,5.87-6.1a2.1,2.1,0,0,1,1.67-.7c1.8,0,3.6,0,5.41,0A6.05,6.05,0,0,1,53.57,29q0,14.09,0,28.17a18.11,18.11,0,0,1-.32,2.35c.13,0,.33,0,.54,0H60a1.69,1.69,0,0,1,1.91,1.92V78.15a1.71,1.71,0,0,1-2,1.94H36.61a1.71,1.71,0,0,1-2-1.94V61.51a1.69,1.69,0,0,1,1.91-1.92h6.28c-.69-2.1-.38-4.2-.4-6.28,0-4.43,0-8.86,0-13.29A1.71,1.71,0,0,1,44,38.09a1.65,1.65,0,0,1,1.8,1.48,6.6,6.6,0,0,1,0,.77V57.15a2.21,2.21,0,1,0,4.4,0q0-14.08,0-28.17a2.64,2.64,0,0,0-2.63-2.75c-1.61-.06-3.22,0-4.83,0a1,1,0,0,0-.61.36q-3.87,4-7.72,8a1.76,1.76,0,0,1-2.84,0l-7.67-8a1.19,1.19,0,0,0-1-.41c-1.39,0-2.78,0-4.17,0a2.74,2.74,0,0,0-3,3V57a2.4,2.4,0,0,0,1.47,2.44,2.2,2.2,0,0,0,2.93-2.16V40.5c0-.28,0-.55,0-.82a1.68,1.68,0,0,1,3.35,0,7.45,7.45,0,0,1,0,.82v62h7.77V83.1a2.79,2.79,0,0,1,.14-.91,1.62,1.62,0,0,1,1.79-1,1.65,1.65,0,0,1,1.4,1.53c0,.23,0,.47,0,.7v19.08H42.4c0-.23,0-.45,0-.68V84a3.22,3.22,0,0,1,.09-.87A1.61,1.61,0,0,1,44.07,82a1.6,1.6,0,0,1,1.61,1.13,3.68,3.68,0,0,1,.12,1.05q0,8.76,0,17.52v.85H64.16ZM58.53,65.06c0-.69,0-1.37,0-2.11H38c0,.62,0,1.23,0,1.83,0,.41.13.58.51.7,1.67.51,3.32,1.06,5,1.58a15.82,15.82,0,0,0,6.8.59c2.78-.33,5.34-1.49,8-2.27A.43.43,0,0,0,58.53,65.06Zm0,11.67V68.84c-1.3.42-2.55.81-3.79,1.22a18.39,18.39,0,0,1-9.32.83c-2.09-.4-4.12-1.1-6.17-1.68-.39-.1-.77-.23-1.2-.36v7.88Z"
            />
            <path
              path="cls-1"
              fill="currentColor"
              d="M42.93,9.91A9.94,9.94,0,1,1,33,0a9.93,9.93,0,0,1,10,9.91Zm-10,6.61a6.6,6.6,0,1,0-6.52-6.83A6.61,6.61,0,0,0,32.93,16.52Z"
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
