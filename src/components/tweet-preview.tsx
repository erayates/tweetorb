import Image from "next/image";
import React from "react";
import { Tweet } from "react-tweet";

import { FaRegComment } from "react-icons/fa6";
import { PiArrowsClockwiseFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";

export default function TwitterCard({ tweet }: { tweet: any }) {
  return (
    <>
      <div className="dark:bg-gray-800 mt-4 flex rounded-lg bg-white px-[1rem] py-[0.75rem] shadow-md">
        <div className="mb-4 flex h-full w-[48px]">
          <Image
            src="/images/logo/logo-icon.svg"
            alt="Tweetorb Avatar"
            width={48}
            height={48}
            className="mr-2 rounded-full"
          />
        </div>
        <div className="ml-2 w-full">
          <p>
            <span className="text-title-xxsm font-semibold  text-black dark:text-white">
              TweetOrb
            </span>
            <span className="text-gray-600 dark:text-gray-400 text-xsm ml-2">
              @tweetorb
            </span>
          </p>
          <p className="mb-4 text-title-sm text-black dark:text-white">
            {tweet.text}
          </p>
          {tweet.media.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {tweet.media.map((file: any, index: number) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt="Tweet media"
                  className="h-auto w-full rounded-lg"
                />
              ))}
            </div>
          )}

          <div className="mt-4 h-[1px] w-full rounded-lg bg-black/20"></div>
          <div className="mt-2 flex justify-between">
            <div className="flex items-center gap-1">
              <FaRegComment />
              <p className="text-title-xxsm">169</p>
            </div>
            <div className="flex items-center gap-1">
              <PiArrowsClockwiseFill />
              <p className="text-title-xxsm">36</p>
            </div>
            <div className="flex items-center gap-1">
              <CiHeart />
              <p className="text-title-xxsm">359</p>
            </div>
            <div className="flex items-center gap-1">
              <IoStatsChart />
              <p className="text-title-xxsm">565k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
