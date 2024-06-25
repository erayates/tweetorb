import SignInContainer from "@/containers/auth-container/signin-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tweetorb SignIn Page | Tweetorb - Your twitter account manager!",
  description:
    "Tweetorb is a twitter account management application that provide many benefits to customers.",
};

const SignIn: React.FC = () => {
  return <SignInContainer />;
};

export default SignIn;
