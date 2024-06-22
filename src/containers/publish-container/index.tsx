"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import TweetPreview from "@/components/tweet-preview";
import CreateTweet from "./create-tweet";
import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const initialTweetState = {
  text: "What's happening?", // The main content of the tweet
  media: [], // Array to hold media files (images, videos)
  isDraft: false, // Boolean to indicate if the tweet is a draft
};

export default function PublishContainer() {
  const [tweet, setTweet] = useState(initialTweetState);

  return (
    <div>
      <Breadcrumb pageName="Publish" />
      <div className="flex flex-col md:grid grid-cols-3 gap-8">
        <div className=" md:col-span-2">
          <h3 className=" font-semibold text-black dark:text-white">
            Create A Tweet
          </h3>
          <CreateTweet tweet={tweet} setTweet={setTweet} />
        </div>
        <div className="">
          <h3 className="text-title-sm2 font-semibold text-black dark:text-white">
            Preview
          </h3>
          <TweetPreview tweet={tweet} />
        </div>
      </div>
    </div>
  );
}
