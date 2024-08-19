import AuthLayout from "@/layouts/auth";
import { useState } from "react";
export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with email:", email);
  }

  return (
    <AuthLayout>
     <section className="flex flex-col md:flex-row items-start justify-start py-20 md:px-20 lg:px-20 overflow-hidden">
        <div
          className="w-full max-w-[800px] lg:w-1/2 h-auto  px-20 py-80 bg-[#0c0c0c]/25 rounded-3xl backdrop-blur-xl flex-col justify-center items-start inline-flex"
        >
          <div className="self-stretch flex-col justify-start items-start gap-12">
            <div className="flex-col justify-start items-start gap-4">
              <div className="text-white text-3xl md:text-5xl mb-7 font-semibold font-['Roboto'] leading-10">
                Find your sounds<br />
                Uninterrupted streaming
              </div>
              <div className="w-full text-[#333333] mb-7 text-base md:text-2xl font-normal font-['Poppins']">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
                orci, eu porttitor lacus.
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row justify-center items-center gap-6">
                <div className="w-full flex-col justify-start items-start gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-6 pr-4 pt-3.5 pb-4 bg-transparent rounded-xl border border-[#2dcece] text-white focus:outline-none focus:ring-2 focus:ring-[#2dcece] text-base font-normal font-['Poppins']"
                    placeholder="Enter your email address"
                    style={{ color: "white"}}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full max-w-max h-14 px-11 pt-2.5 pb-3 bg-[#2dcece] rounded-2xl shadow border-[#74c9cf] justify-center items-center flex"
                >
                  <div className="justify-center items-center gap-2">
                    <div className="text-center text-[#0d0d0d] text-xl font-medium font-['Poppins']">
                      Sign up
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
