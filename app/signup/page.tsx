
"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signupUser } from "../services/auth";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  newsletter?: boolean;
};

export default function SignupPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await signupUser(
        `${data.firstName} ${data.lastName}`,
        data.email,
        data.password
      );
      router.push("/dashboard");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed");
    }
  };

  const passwordRules: string[] = [
    "At least 8 characters",
    "1 uppercase letter",
    "1 lowercase letter",
    "1 number",
    "1 special character (@$!%*?&)",
  ];

  return (
    <div className="min-h-screen flex font-sans">
      {/* LEFT PANEL */}
      <div className="hidden md:flex w-[30%] min-h-screen flex-col justify-center px-12 py-12 text-white bg-[#6f898b]">
  <div className="space-y-8">
    <div className="w-36">
      <Image src="/logo.avif" alt="PravRaha Logo" width={180} height={60} />
    </div>

    <div className="space-y-4">
      <h1 className="text-4xl font-bold leading-tight">
        Welcome to PravRaha
      </h1>
      <p className="text-sm text-slate-100/80">
        A modern GTM platform designed to help you manage your marketing, sales, and customer success in one place. Sign up now to get started!
      </p>
    </div>
  </div>
</div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-10">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-black mb-1 text-center">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Register to access PravRaha Dashboard
          </p>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black"
          >
            {/* First Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                First Name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName.message as string}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName.message as string}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message as string}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone number required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Must be 10 digits",
                  },
                })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">{errors.phoneNumber.message as string}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message: "Password does not meet requirements",
                  },
                })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message as string}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-xs font-semibold text-gray-500">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">{errors.confirmPassword.message as string}</p>
              )}
            </div>

            {/* Password rules */}
            <div className="col-span-2 text-xs text-gray-500">
              <p className="font-semibold">Password must contain:</p>
              <ul className="list-disc ml-5">
                {passwordRules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Checkboxes */}
            <div className="col-span-2 text-xs flex items-center gap-2">
              <input type="checkbox" {...register("newsletter")} />
              <span>I want to receive PravRaha newsletters</span>
            </div>

            <div className="col-span-2 text-xs flex items-center gap-2">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must agree to the terms and privacy policy",
                })}
              />
              <span>I agree to the Terms and Privacy Policy</span>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs col-span-2 -mt-3">
                {errors.terms.message as string}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="col-span-2 bg-black hover:bg-gray-800 text-white py-2 rounded-md font-semibold mt-2 transition"
            >
              Sign Up
            </button>

            {/* Login link */}
            <p className="col-span-2 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-black font-semibold underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
