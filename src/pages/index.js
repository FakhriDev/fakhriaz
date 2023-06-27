import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
export default function Home() {
  return (
    <>
      <Head>
        <title>Muhamad Fakhri Aziz • UI/UX Designer & Developer </title>
        <meta name="description" content="Muhamad Fakhri Aziz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="abosolute z-20 min-h-screen bg-color1 w-full py-10 mb-5">
        <header className="max-w-full lg:max-w-[1440px] mx-auto px-4 mb-4">
          <div className="flex justify-between items-center font-sans">
            <div className="text-title1 w-30 text-[21px] font-light hover:text-title1/80">
              <Link href="/">Muhamad Fakhri Aziz</Link>
            </div>
            <ul className="flex  text-[21px] w-30 font-sans font-light">
              <li className="pr-8">
                <Link href="/" className="text-title1 hover:text-title1/80 ">
                  Project
                </Link>
              </li>
              <li className="pr-8">
                <Link href="/" className="text-title1 hover:text-title1/80">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="relative max-w-full lg:max-w-[1300px] mx-auto px-4">
          <section className="flex flex-col md:flex-row lg:flex-row md:gap-4 font-sans">
            <div className="w-12/12 md:w-6/12 lg:w-6/12">
              <div className="bg-black w-full lg:w-[515px] h-[355px] md:h-[840px] lg:h-[840px] rounded-t-[300px] rounded-b-[300px] mx-auto relative overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src="/banner.jpeg"
                  alt="Muhamad Fakhri Aziz"
                />
              </div>
            </div>
            <div className="w-12/12 md:w-6/12 lg:w-6/12 mt-6 lg:mt-16 z-10">
              <div className="w-[176px] lg:w-[240px] h-[80px] lg:h-[100px] bg-black rounded-r-[50px] mb-2 lg:mb-12">
                <div className="flex flex-row justify-between px-2 py-2">
                  <div className="text-title1 sm: text-[16px] lg:text-[22px] font-normal w-[94px] leading-tight pl-4">
                    Location in the Indonesia
                  </div>
                  <div className="text-title1 text-[20px] font-medium">
                    <div className="w-[62px] lg:w-[82px] h-[62px] lg:h-[82px] bg-color1 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-title1 text-[40px] lg:text-[64px] font-light leading-[95%] tracking-tight mb-2">
                Freelance Designer & Developer
              </div>

              <div className="hidden lg:block text-title1 text-[18px] font-light tracking-wide">
                Hello! I am Muhamad Fakhri Aziz. Thank you for visiting my
                website. I use Laravel to develop my website. I will make a
                responsive website, easy to use, and easy to reach both when
                accessed via a desktop or smartphone. If you have specific
                criteria for building your website, I am very open to building
                on your ideas and concepts for your website.
              </div>
            </div>
          </section>
        </div>
        <div className="absolute bottom-[10px] lg:-bottom-[140px] select-none font-sans">
          <Marquee
            className=" p-0 m-0 flextext-title1 font-normal bottom-[100px] text-[120px] lg:text-[300px] text-title1 select-none uppercase"
            direction="right"
            speed={90}
            loop={0}
          >
            <div className="px-10">Muhamad Fakhri Aziz</div>
            <div className="px-10">Muhamad Fakhri Aziz</div>
            <div className="px-10">Muhamad Fakhri Aziz</div>
          </Marquee>
        </div>
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 mb-8">
        <div className="flex justify-center text-center font-sans mb-8 text-[40px] font-medium">
          My Services
        </div>
        <div className="sm:block md:flex lg:flex justify-center content-center font-sans font-light md:gap-10 lg:gap-10">
          <div className="mb-4 lg:mb-0 md:w-6/12 lg:w-6/12 bg-color2 text-black rounded-[40px] px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[270px]">
            <div className="flex row">
              <div className="w-1/2 py-10">
                <div className="text-[33px] font-medium mb-[16px]">
                  UI/UX Designer
                </div>
                <div className="text-[16px] w-[300px]">
                  A full knowledge of HTML / CSS and Javascript. I make
                  responsive applications with Bootstrap and dynamic Web's with
                  Laravel Framework.
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative text-[33px] font-medium mb-[28px] content-center justify-center text-center">
                  <div className="absolute -right-10 top-0 lg:-top-1">
                    <Image
                      width={330}
                      height={330}
                      className="mx-auto justify-center content-center"
                      src="/brush.png"
                      alt="ilustration bursh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 lg:w-6/12 bg-color2 text-black rounded-[40px] px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[270px]">
            <div className="flex row">
              <div className="w-1/2 py-10">
                <div className="text-[33px] font-medium mb-[16px]">
                  Developer Skills
                </div>
                <div className="text-[16px] w-[300px]">
                  A full knowledge of HTML / CSS and Javascript. I make
                  responsive applications with Bootstrap and dynamic Web's with
                  Laravel Framework.
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative text-[33px] font-medium mb-[28px] content-center justify-center text-center">
                  <div className="absolute -right-10 top-0 lg:-top-1">
                    <Image
                      width={330}
                      height={330}
                      className="mx-auto justify-center content-center"
                      src="/pc.png"
                      alt="ilustration bursh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 mb-26">
        <div className="flex justify-center text-center font-sans mb-8 text-[40px] font-medium">
          A selection of my best projects.
        </div>
        <div className="sm:block md:flex lg:flex justify-center content-center font-sans font-light gap-10 mb-4">
          <div className="relative mb-6 md:w-6/12 lg:w-6/12 rounded-[40px] bg-color2 text-black  px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[377px] transition-all duration-300 group shadow-none hover:shadow-great">
            <div className="overflow-hidden">
              <Image
                fill
                className="object-cover rounded-[40px]"
                src="/intersect.jpg"
                alt="ilustration bursh"
              />
            </div>
            <div className="absolute right-10 bottom-4 text-[33px] font-medium transition-all duration-300 group-hover:opacity-100 z-30 group-hover:bottom-10 group-hover:right-10 transform">
              CHITCHAT
            </div>
            <div className="absolute right-10 bottom-4 text-[16px] font-normal transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 group-hover:bottom-8 group-hover:right-10 transform">
              20/21/2022
            </div>
          </div>
          <div className="relative md:w-6/12 lg:w-6/12 rounded-[40px] bg-color2 text-black  px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[377px] transition-all duration-300 group shadow-none hover:shadow-great">
            <div className="overflow-hidden">
              <Image
                fill
                className="object-cover rounded-[40px]"
                src="/rectangle1.jpg"
                alt="ilustration bursh"
              />
            </div>
            <div className="absolute right-10 bottom-4 text-[33px] font-medium transition-all duration-300 group-hover:opacity-100 z-30 group-hover:bottom-10 group-hover:right-10 transform">
              YUBA APPS
            </div>
            <div className="absolute right-10 bottom-4 text-[16px] font-normal transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 group-hover:bottom-8 group-hover:right-10 transform">
              20/21/2022
            </div>
          </div>
        </div>
        <div className="sm:block md:flex lg:flex justify-center content-center font-sans font-light gap-10 mb-4">
          <div className="relative mb-6 md:w-6/12 lg:w-6/12 rounded-[40px] bg-color2 text-black  px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[377px] transition-all duration-300 group shadow-none hover:shadow-great">
            <div className="overflow-hidden">
              <Image
                fill
                className="object-cover rounded-[40px]"
                src="/intersect.jpg"
                alt="ilustration bursh"
              />
            </div>
            <div className="absolute right-10 bottom-4 text-[33px] font-medium transition-all duration-300 group-hover:opacity-100 z-30 group-hover:bottom-10 group-hover:right-10 transform">
              CHITCHAT
            </div>
            <div className="absolute right-10 bottom-4 text-[16px] font-normal transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 group-hover:bottom-8 group-hover:right-10 transform">
              20/21/2022
            </div>
          </div>
          <div className="relative md:w-6/12 lg:w-6/12 rounded-[40px] bg-color2 text-black  px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[377px] transition-all duration-300 group shadow-none hover:shadow-great">
            <div className="overflow-hidden">
              <Image
                fill
                className="object-cover rounded-[40px]"
                src="/rectangle1.jpg"
                alt="ilustration bursh"
              />
            </div>
            <div className="absolute right-10 bottom-4 text-[33px] font-medium transition-all duration-300 group-hover:opacity-100 z-30 group-hover:bottom-10 group-hover:right-10 transform">
              YUBA APPS
            </div>
            <div className="absolute right-10 bottom-4 text-[16px] font-normal transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 group-hover:bottom-8 group-hover:right-10 transform">
              20/21/2022
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center mb-8">
          <Link
            className="p-8 font-sans text-[25px] font-light w-[273px] h-[104px] border-2 border-color2 rounded-[80px]"
            href="/"
          >
            More projects
          </Link>
        </div>
      </div>
      <footer className="absolute w-full bg-gray pb-10">
        <div className="max-w-[1440px] mx-auto flex justify-center text-center text-[60px] font-medium text-color2 my-10">
          <div className="">LETS WORK TOGHETER</div>
        </div>
        <div className="max-w-[1440px] mx-auto block md:flex lg:flex text-center text-[30px] font-light text-color2 gap-3 my-20">
          <div className="mb-10">
            <Link
              className="px-10 py-6 font-sans text-[18px] font-light w-[308px] h-[81px] border-2 border-color2 rounded-[80px]"
              href="/"
            >
              fakhriazdev@gmail.com
            </Link>
          </div>
          <div className="">
            <Link
              className="px-10 py-6 font-sans text-[18px] font-light w-[242px] h-[81px] border-2 border-color2 rounded-[80px]"
              href="https://wa.me/6285156114130"
            >
              +62 8515 6114 130
            </Link>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto flex justify-between text-center text-[30px] font-light text-color2 gap-3 px-5 lg:px-0">
          <div className="block font-sans text-[18px] tracing-[-4px] font-light text-color2/50">
            <div>VERSION </div>
            <div className="text-color2">2023 1.0.0</div>
          </div>
          <div className="block font-sans text-[18px] tracing-[-4px] font-light text-color2/50">
            <div>SOSICAL </div>
            <div className="text-color2">
              <Link
                className="pl-8 font-sans text-[18px] font-light border-color2"
                href="https://www.linkedin.com/in/muhamad-fakhri-aziz-199435141/"
              >
                LinkedIn
              </Link>
              <Link
                className="pl-8 font-sans text-[18px] font-light border-color2"
                href="https://www.instagram.com/fakhri_m.fa/"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
