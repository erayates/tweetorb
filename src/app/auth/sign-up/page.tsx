import React from "react";

import { Metadata } from "next";
import SignUpContainer from "@/containers/auth-container/signup-container";

export const metadata: Metadata = {
  title: "Tweetorb SignUp Page | Tweetorb - Your twitter account manager!",
  description:
    "Tweetorb is a twitter account management application that provide many benefits to customers.",
  // other metadata
};

const SignUp: React.FC = () => {
  return <SignUpContainer />;
};

export default SignUp;
