"use client";

import { FaRegEnvelope } from "react-icons/fa";
import { SlLock } from "react-icons/sl";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { TSignInSchema, signInSchema } from "@/types/auth-forms";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/input";
import { login } from "@/lib/actions/auth";

export default function SignInForm() {
  const methods = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: TSignInSchema) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
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

        <div className="mb-5">
          {isSubmitting && (
            <div className="flex items-center justify-center">
              <div className="border-gray-200 h-5 w-5 animate-spin rounded-full border-b-2 border-t-2"></div>
            </div>
          )}

          {!isSubmitting && (
            <input
              type="submit"
              value="Login"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          )}
        </div>

        <div className="mt-6 text-center">
          <p>
            Do you have not an account?{" "}
            <Link href="/auth/signin" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </FormProvider>
    </form>
  );
}
