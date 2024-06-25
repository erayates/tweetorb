import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/ui/breadcrumb";

import loginIllustration from "../../../../public/images/illustration/illustration-login.svg";
import SignupForm from "@/components/common/forms/signup-form";
import SignUpForm from "@/components/common/forms/signup-form";

const SignUpContainer: React.FC = () => {
  return (
    <div>
      <Breadcrumb pageName="Sign Up" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link
                className="mb-5.5 flex items-center justify-center gap-2"
                href="/"
              >
                <Image
                  className=""
                  src={"/images/logo/logo-icon.svg"}
                  alt="Logo"
                  width={48}
                  height={48}
                />
                <span className="text-2xl font-semibold dark:text-white">
                  Tweetorb
                </span>
              </Link>

              <p className="2xl:px-20">
                Your ultimate dashboard for effortless twitter account
                management!
              </p>

              <span className="mt-15 inline-block">
                <Image src={loginIllustration} alt="Login Illustration" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Tweetorb
              </h2>

              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
