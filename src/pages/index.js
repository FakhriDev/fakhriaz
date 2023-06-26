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
      <div className="relative max-w-[1440px] mx-auto px-4">
        <div className="flex justify-center text-center font-sans mb-8 text-[40px] font-medium">
          A selection of my best projects.
        </div>
        <div className="flex justify-center content-center font-sans font-light gap-10">
          <div className="mb-4 lg:mb-0 md:w-6/12 lg:w-6/12 bg-color2 text-black rounded-[40px] px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[300px]">
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
                  <div className="absolute -right-10 top-0 lg:-top-4">
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
          <div className="relative md:w-6/12 lg:w-6/12 bg-color2 text-black rounded-[40px] px-14 sm:w-auto md:max-w-auto lg:max-w-[566px] h-[300px]">
            <div className="overflow-hidden">
              <Image
                fill
                className="object-cover"
                src="/intersect.jpg"
                alt="ilustration bursh"
              />
            </div>
            <div className="absolute right-10 bottom-4 text-[33px] font-medium">
              YUBA APPS
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
