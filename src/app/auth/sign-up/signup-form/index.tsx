"use client";

import { LuUser } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { SlLock } from "react-icons/sl";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/types/auth-forms";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/input";
import { signup } from "../../actions";

export default function SignupForm() {
  const methods = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: TSignUpSchema) => {
    signup
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <FormInput label="Fullname" name="fullname" icon={<LuUser />} />
        <FormInput
          label="Email"
          name="email"
          icon={<FaRegEnvelope />}
          type="email"
        />
        <FormInput
          label="Password"
          name="password"
          icon={<SlLock />}
          type="password"
        />
        <FormInput
          label="Re-type Password"
          name="confirmPassword"
          type="password"
          icon={<SlLock />}
        />

        <div className="mb-5">
          <input
            type="submit"
            value="Create account"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>

        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </FormProvider>
    </form>
  );
}
