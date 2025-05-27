import { NextPage } from "next";
import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Hobbies: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Hobbies</title>
        <meta
          name="description"
          content={`What i like to do the most in my spare time.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Contact me"} />
        <meta
          name="description"
          content={`What i like to do the most in my spare time.`}
        />
        <link rel="canonical" href={"https://www.rajsavaliya.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.rajsavaliya.com"} />
        <meta property="og:site_name" content="Your Name" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      {!isTabletOrMobile ? (
        <div className="p-12 max-w-5xl mx-auto">
          <div className="">
            <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
              Hobbies
            </h1>
            <div className="text-gray-400 dark:text-gray-400">
              {" "}
              List of stuff i like to do in my Spare Time.
            </div>
            <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Gaming">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        className="h-20 p-3 rounded-md"
                        src="https://img.icons8.com/ios/50/000000/controller.png"
                        width="80"
                        height="50"
                        alt="Gaming icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Gaming
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Learning">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        src="https://img.icons8.com/ios/50/000000/learning.png"
                        alt="Learning icon"
                        className="h-20 rounded-md p-2"
                      />{" "}
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Learning
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Startup">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
                        className="h-20 p-4 rounded-md"
                        alt="Startup icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      StartUp
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3">
          <div className="">
            <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
              Hobbies
            </h1>
            <div className="text-gray-400 dark:text-gray-400">
              {" "}
              List of stuff i like to do in my Spare Time.
            </div>
            <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Gaming">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        className="p-3 rounded-md"
                        src="https://img.icons8.com/ios/50/000000/controller.png"
                        width="80"
                        height="auto"
                        alt="Gaming icon"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Gaming
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Learning">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        src="https://img.icons8.com/ios/50/000000/learning.png"
                        alt="Learning icon"
                        className="rounded-md p-2"
                        width="80"
                        height="auto"
                      />{" "}
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      Learning
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                <Link href="/Startup">
                  <div>
                    <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                      <img
                        src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
                        className="p-4 rounded-md"
                        alt="Startup icon"
                        width="80"
                        height="auto"
                      />
                    </div>
                    <h2 className="text-white text-center font-semibold">
                      StartUp
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Scrollbars>
  );
};

export default Hobbies;
