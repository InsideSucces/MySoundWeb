import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { Input } from "@nextui-org/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with email:", email, "and password:", password);
  };
  return (
    <AuthLayout>
      <section className="flex flex-col md:flex-row items-start justify-start py-20 md:px-20 lg:px-20 overflow-hidden">
        <div className="w-full max-w-[800px] lg:w-1/2 h-auto  px-20 py-20 bg-[#0c0c0c]/25 rounded-3xl backdrop-blur-xl flex-col justify-center items-center gap-8 inline-flex">
          <div className="flex-col justify-center items-center flex">
            <div className="text-center text-[#f9f9f9] text-3xl md:text-5xl font-medium font-['Roboto']">
              Welcome Back
            </div>
            <div className="p-0.5 justify-start items-start gap-2.5 inline-flex">
              <div>
                <span className="text-[#f9f9f9] text-base font-normal font-['Poppins']">
                  Don’t have an acount?{" "}
                </span>
                <Link
                  href="/auth/signUp"
                  className="text-[#2dcece] text-base font-normal font-['Poppins'] underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <button className="w-full h-12 px-40 pt-2.5 pb-2 bg-[#f9f9f9] rounded-3xl border border-[#333333] justify-center items-center inline-flex">
              <div className="flex items-center gap-4">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5"
                  alt="google logo"
                />
                <div className="text-[#333333] text-lg font-normal font-['Avenir']">
                  Continue with Google
                </div>
              </div>
            </button>
            <button className="w-full h-12 px-40 pt-2.5 pb-2 bg-[#f9f9f9] rounded-3xl border border-[#333333] justify-center items-center inline-flex">
              <div className="flex items-center gap-4">
                {/* <Image
                  src="https://www.svgrepo.com/show/475656/facebook-color.svg"
                  className="w-5"
                  alt="google logo"
                /> */}
                <div className="text-[#333333] text-lg font-normal font-['Avenir']">
                  Continue with Facebook
                </div>
              </div>
            </button>
            <button className="w-full h-12 px-40 pt-2.5 pb-2 bg-[#f9f9f9] rounded-3xl border border-[#333333] justify-center items-center inline-flex">
              <div className="flex items-center gap-4">
                <img
                  src="https://www.svgrepo.com/show/475656/facebook-color.svg"
                  className="w-5"
                  alt="google logo"
                />
                <div className="text-[#333333] text-lg font-normal font-['Avenir']">
                  Continue with Apple
                </div>
              </div>
            </button>
          </div>
          <div className="w-full justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 h-0.5 bg-neutral-50/25" />
            <div className="text-white text-xl font-normal font-['Avenir']">
              Or continue with email
            </div>
            <div className="grow shrink basis-0 h-0.5 bg-neutral-50/25" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex-col justify-start items-start gap-6 flex">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "white" }}
                required
              />
              <div className="flex-col justify-start items-end gap-2 flex">
                <Input
                  key="outside-left"
                  type="password"
                  value={password}
                  // labelPlacement="outside"
                  placeholder="Enter your email"
                  // variant="flat"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ color: "white" }}
                />
                <Link
                  href="#"
                  className="text-right text-white text-base font-normal font-['Poppins'] underline"
                >
                  Forget your password
                </Link>
                <div className="flex-col justify-start items-start flex"></div>
                <div className="pr-2 py-2 justify-start items-start gap-2 inline-flex">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-6 h-6 relative"
                  />
                  <div className="text-[#f9f9f9] text-base font-normal font-['Poppins']">
                    Remember me
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-14 pt-2.5 pb-3 bg-[#2dcece] rounded-2xl shadow border-[#74c9cf] justify-center items-center inline-flex"
              >
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-[#0d0d0d] text-xl font-medium font-['Poppins']">
                    Log in
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </AuthLayout>
  );
}
