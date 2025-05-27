import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Email: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects or gaming. `}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Contact me"} />
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects or gaming. `}
        />
        <link rel="canonical" href={"https://www.yunusemreonec.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.yunusemreonec.com"} />
        <meta property="og:site_name" content="Yunus Emre ÖNEÇ" />
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
        <div className="h-full w-full flex items-center justify-center">
          <div className="max-w-3xl mx-auto my-20 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="p-10">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold text-indigo-400 mb-6">Get in touch</h1>
                
                <div className="w-24 h-1 bg-indigo-500 rounded-full mb-6"></div>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                  You can contact me with any questions, suggestions or just
                  to say hi. I am always open to new ideas and
                  collaborations. It can be anything like collaborating on
                  good projects or startups or freelancing or gaming or
                  anything else.
                </p>
                
                <div className="flex items-center justify-center mt-8 bg-gray-700 bg-opacity-50 px-8 py-5 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-10 h-10 text-indigo-400"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a 
                    href="mailto:yunusemreonec81@icloud.com" 
                    className="ml-4 text-2xl font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-300"
                  >
                    yunusemreonec81@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center p-4">
          <div className="w-full mx-auto my-10 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-indigo-400 mb-4">Get in touch</h1>
                <p className="text-lg font-medium text-gray-300 mb-3">
                  Fill in the form to start a conversation
                </p>
                <div className="w-20 h-1 bg-indigo-500 rounded-full mb-4"></div>
                <p className="text-base text-gray-400 mb-6">
                  You can contact me with any questions, suggestions or just
                  to say hi. I am always open to new ideas and collaborations.
                  It can be anything like collaborating on good projects or
                  startups or freelancing or gaming or anything else.
                </p>
                
                <div className="flex flex-col items-center justify-center mt-4 bg-gray-700 bg-opacity-50 px-6 py-4 rounded-lg w-full">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8 text-indigo-400 mb-2"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a 
                    href="mailto:yunusemreonec81@icloud.com" 
                    className="text-lg font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-300 break-all text-center"
                  >
                    yunusemreonec81@icloud.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Scrollbars>
  );
};

export default Email;
