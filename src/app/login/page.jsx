"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // Importing icons for a better password toggle
import axiosInstance from "@/services/axiosInstance";
import { setToken } from "@/utils/auth";

/** Yup schema for login */
const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup.string().trim().required("Password is required"),
});

export default function Login() {
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const loginUser = async (data) => {
    const response = await axiosInstance.post("/api/auth/login", data);
    return response.data; // { token, user }
  };

  const onSubmit = async (data) => {
    try {
      const { token, user } = await loginUser(data);
      setToken(token);

      setStatus(`Welcome back, ${user.name}!`);
      window.location.href = "/";

      reset();
    } catch (err) {
      console.error(err);
      setStatus("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side with image and text - Hidden on small screens */}
      <div
        className="relative hidden w-1/2 flex-col items-center justify-center bg-cover bg-center text-white md:flex"
        style={{
          backgroundImage: "url('/assets/loginBg1.jpg')",
          opacity: 0.7,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900 to-transparent opacity-80" />
        <div className="z-10 text-center p-8">
          <h2 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Welcome to Beast Life
          </h2>
          <p className="mt-4 text-xl font-medium drop-shadow-md">
            Your journey to greatness starts here.
            <br />
            Sign in to unleash your full potential.
          </p>
        </div>
      </div>
      {/* Right side with the login form */}
      <div className="flex w-full items-center justify-center p-6 md:w-1/2 md:bg-orange-50">
        <div className="w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-orange-800 md:text-4xl">
            Welcome Back
          </h1>
          <p className="mb-6 text-center text-sm text-orange-600 md:text-base">
            Sign in to your account
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 rounded-xl bg-white p-6 shadow-md"
            noValidate
          >
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Email address"
                className={`rounded-md border ${
                  errors.email ? "border-red-500" : "border-orange-300"
                }`}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`rounded-md border pr-10 ${
                    errors.password ? "border-red-500" : "border-orange-300"
                  }`}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-600 hover:text-orange-800"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-orange-700">
                <input type="checkbox" className="form-checkbox" />
                <span>Remember me</span>
              </div>
              <Link
                href="/forgot-password"
                className="font-semibold text-orange-800 hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-orange-600 px-6 py-3 text-white transition hover:bg-orange-700 disabled:opacity-60"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
            {status && (
              <p
                className="mt-2 text-center text-sm text-green-600"
                role="status"
              >
                {status}
              </p>
            )}
          </form>
          <p className="mt-4 text-center text-sm text-orange-700">
            New to Beast Life?{" "}
            <Link
              href="/signup"
              className="font-semibold text-orange-800 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
