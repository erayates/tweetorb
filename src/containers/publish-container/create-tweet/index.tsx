import React, { useState } from "react";

export default function CreateTweet({
  tweet,
  setTweet,
}: {
  tweet: any;
  setTweet: any;
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTweet({ ...tweet, [name]: value });
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    setTweet({ ...tweet, media: files });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tweet submitted:", tweet);
  };

  return (
    <div className="mt-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h4 className="font-medium text-black dark:text-white">Tweet Form</h4>
        <p className="text-title-xxsm">Fill the all inputs correctly.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Tweet Text
            </label>
            <textarea
              name="text"
              value={tweet.text}
              onChange={handleInputChange}
              rows={4}
              placeholder="What's happening?"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Images
            </label>
            <input
              type="file"
              name="media"
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              multiple
              onChange={handleMediaChange}
            />
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Send Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
