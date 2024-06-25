"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { TSignInSchema, TSignUpSchema } from "@/types/auth-forms";

export async function login(formData: TSignInSchema) {
  const supabase = createClient();
  // type-casting here for convenience
  // in practive, you should validate your inputs

  const { email, password } = formData;
  const data = { email: email, password: password };

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: TSignUpSchema) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { email, password } = formData;

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
