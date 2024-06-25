"use client";

import { LuUser } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { SlLock } from "react-icons/sl";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/types/auth-forms";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/input";

export default function SignUpForm() {
  const methods = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: TSignUpSchema) => {};

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

        {isSubmitting && (
          <div className="flex items-center justify-center">
            <div className="border-gray-200 h-5 w-5 animate-spin rounded-full border-b-2 border-t-2"></div>
          </div>
        )}

        {!isSubmitting && (
          <div className="mb-5">
            <input
              type="submit"
              value="Create account"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        )}

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
