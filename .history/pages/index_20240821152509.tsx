import React from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { HeroSection } from "@/components/Hero";
import AnimatedCarousel from "@/components/carousel_images";
import CustomAccordion from "@/components/faq_accordion";

const images = [
  "/assets/artist_1.jpg",
  "/assets/artist_2.jpg",
  "/assets/artist_3.jpg",
  "/assets/artist_4.jpg",
  "/assets/artist_5.jpg",
  // Add more image paths as needed
];

const faqItems = [
  { title: "How do I create an account?", content: "To create an account, click on the Sign Up button at the top of the page. You can sign up using your email address or log in with with a social media account" },
  { title: "How do I create and manage playlists?", content: "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library." },
  { title: "What should I do if I forget my password?", content: "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library." },
  { title: "How can I get help if I encounter a problem?", content: "You can create a playlist by selecting “Playlist” from your stream dashboard. Add songs by clicking the button on any track. You can rename, reorder or delete playlists from your library." },
];
export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <AnimatedCarousel images={images} />
   
      <div className="mx-auto max-w-full p-6 xl:p-12 overflow-hidden">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-roboto capitalize mb-8">Trending Artistes</h1>
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap gap-8 py-8">
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>

            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>
            <div className="flex-none w-48">
              <img className="w-48 h-48 rounded-full" src="https://via.placeholder.com/300x300" alt="7ucky 7vn" />
              <p className="mt-4 text-white text-xl font-semibold font-roboto text-center">7ucky 7vn</p>
            </div>

          </div>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 p-4 lg:p-8">
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-start gap-4">
          <h1 className="text-[#2dcece] text-4xl lg:text-6xl xl:text-7xl font-extrabold font-roboto capitalize">Gilly Mu</h1>
          <p className="text-white/70 text-base lg:text-xl font-normal font-roboto">Music Artist from South London with roots in Uganda, looking to bridge the gap between the UK & East Africa through music. Gilly Muwanga who is known by his stage name as Gilly Mu is a Ugandan Dancer, music artist, singer and songwriter who is one of the fast rising music artists in diaspora representing Uganda.</p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <img className="w-full max-w-[354px] h-auto" src="https://via.placeholder.com/354x384" alt="Gilly Mu" />
        </div>

        <div className="w-full lg:w-1/3 p-4 lg:p-8 bg-transparent rounded-[13.59px] backdrop-blur-[13.59px] flex flex-col justify-start items-center gap-6">
          <div className="w-full">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold font-roboto leading-9">Album: GILLY</h2>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* Repeat this block for each song */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-[9.06px]" src="https://via.placeholder.com/48x48" alt="Album cover" />
                <div>
                  <p className="text-white text-base font-medium font-roboto">Sweet & Sour</p>
                  <p className="text-[#99938f] text-sm font-medium font-roboto">Gilly Mu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#99938f] text-xs">120k</span>
                <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                  <span className="text-[#2dcece]">▶</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-[9.06px]" src="https://via.placeholder.com/48x48" alt="Album cover" />
                <div>
                  <p className="text-white text-base font-medium font-roboto">Sweet & Sour</p>
                  <p className="text-[#99938f] text-sm font-medium font-roboto">Gilly Mu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#99938f] text-xs">120k</span>
                <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                  <span className="text-[#2dcece]">▶</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-[9.06px]" src="https://via.placeholder.com/48x48" alt="Album cover" />
                <div>
                  <p className="text-white text-base font-medium font-roboto">Sweet & Sour</p>
                  <p className="text-[#99938f] text-sm font-medium font-roboto">Gilly Mu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#99938f] text-xs">120k</span>
                <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                  <span className="text-[#2dcece]">▶</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-[9.06px]" src="https://via.placeholder.com/48x48" alt="Album cover" />
                <div>
                  <p className="text-white text-base font-medium font-roboto">Sweet & Sour</p>
                  <p className="text-[#99938f] text-sm font-medium font-roboto">Gilly Mu</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#99938f] text-xs">120k</span>
                <button className="w-6 h-6 rounded border border-[#2dcece] flex items-center justify-center">
                  <span className="text-[#2dcece]">▶</span>
                </button>
              </div>
            </div>
            {/* End of song block */}
          </div>

          <button className="w-full max-w-[169px] h-[30px] bg-gradient-to-r from-[#61c1c8] to-[#11a8fd] rounded-full text-[#121212] text-xl font-extrabold font-roboto capitalize">
            Buy Now (£9.99)
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 p-6 lg:p-12 bg-[#161616]/70 rounded-3xl">
        <div className="relative w-full max-w-[302px] h-[462px]">
          <div className="absolute left-0 top-0 w-[177px] h-[366px]">
            <img className="absolute left-3 top-0 w-[154px] h-[366px]" src="https://via.placeholder.com/155x366" alt="Phone 1" />
          </div>
          <div className="absolute left-[120px] top-[84px] w-[182px] h-[378px]">
            <img className="absolute left-1 top-1 w-[175px] h-[372px]" src="https://via.placeholder.com/175x372" alt="Phone 2" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:gap-16 w-full max-w-[736px]">
          <div className="text-center">
            <h2 className="text-[#2dcece] text-4xl lg:text-6xl xl:text-7xl font-extrabold font-roboto capitalize leading-tight">
              Download MySound Mobile
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            <div className="w-[180px] h-[52px]">
              <div className="flex mt-3 w-48 h-14 bg-white text-black border border-white rounded-xl items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30" >
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">App Store</div>
                </div>
              </div>
            </div>
            <div className="w-36 h-[41.60px]">
              <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomAccordion items={faqItems} />
    </DefaultLayout>
  );
}
