"use client";

import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { loginUser } from "../services/auth";
import Image from "next/image";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

// Helper for safe error handling
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Something went wrong";
}

export default function LoginPage() {
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setApiError("");

      const res = await loginUser(data.email, data.password);

      console.log("Login Success:", res);

      //  Redirect only after success
      // router.push("/dashboard");

    } catch (error: unknown) {
      setApiError(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      <div className="backdrop-blur-lg bg-white/90 w-full max-w-4xl rounded-2xl shadow-2xl grid grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="/signlogo.png"
            alt="Login Visual"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 flex flex-col justify-center">

          <div className="flex justify-center mb-4">
            <Image
              src="/logo.avif"
              alt="Pravraha Logo"
              width={140}
              height={40}
              priority
            />
          </div>

          <h1 className="text-3xl font-bold text-center text-black">
            Pravraha-GTM
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Welcome back! Please login to continue
          </p>

          {/* ERROR MESSAGE */}
          {apiError && (
            <p className="text-red-500 text-sm text-center mb-3">
              {apiError}
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">

            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              error={errors.email?.message}
            />

            <InputField
              label="Password"
              type="password"
              register={register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={errors.password?.message}
            />

            <button
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-4 text-sm text-black">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold underline text-orange-500"
            >
              Sign up
            </Link>
          </p>

          <footer className="text-xs text-gray-600 mt-6 text-center">
            Powered by{" "}
            <span className="text-orange-500 font-semibold">PravRaha</span>
          </footer>

        </div>
      </div>
    </div>
  );
}