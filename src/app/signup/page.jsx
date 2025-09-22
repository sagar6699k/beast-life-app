"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/** Yup schema for signup */
const signupSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .required("Name is required"),
  email: yup.string().trim().email("Enter a valid email address").required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Signup() {
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      // TODO: replace with API call (e.g., /api/auth/signup)
      console.log("Signup data:", data);

      // simulate network delay
      await new Promise((r) => setTimeout(r, 800));

      setStatus("Account created! Check your email to verify.");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("Signup failed. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-800 mb-4">Create an account</h1>
        <p className="text-center text-sm text-orange-600 mb-6">
          Join Beast Life — get personalized training plans and premium supplements.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-6 grid gap-4" noValidate>
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <Input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Full name"
              className={`border rounded-md ${errors.name ? "border-red-500" : "border-orange-300"}`}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-red-600 mt-1" role="alert">{errors.name.message}</p>}
          </div>

          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Email address"
              className={`border rounded-md ${errors.email ? "border-red-500" : "border-orange-300"}`}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1" role="alert">{errors.email.message}</p>}
          </div>

          <div>
            <label className="sr-only" htmlFor="password">Password</label>
            <div className="relative">
              <Input
                id="password"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className={`border rounded-md pr-10 ${errors.password ? "border-red-500" : "border-orange-300"}`}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-orange-600 hover:text-orange-800"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-sm text-red-600 mt-1" role="alert">{errors.password.message}</p>}
          </div>

          <div>
            <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
            <Input
              id="confirmPassword"
              {...register("confirmPassword")}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className={`border rounded-md ${errors.confirmPassword ? "border-red-500" : "border-orange-300"}`}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            {errors.confirmPassword && <p className="text-sm text-red-600 mt-1" role="alert">{errors.confirmPassword.message}</p>}
          </div>

          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white py-3 rounded-full px-6 hover:bg-orange-700 transition disabled:opacity-60"
            >
              {isSubmitting ? "Creating..." : "Create account"}
            </Button>
          </div>

          {status && <p className="text-center text-sm text-green-600 mt-2" role="status">{status}</p>}
        </form>

        <p className="text-center text-sm text-orange-700 mt-4">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-orange-800 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
