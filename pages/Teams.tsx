import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Teams: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Yunus Emre ÖNEÇ | Teams</title>
        <meta name="description" content={`Team Members`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Yunus Emre ÖNEÇ | Teams"} />
        <meta name="description" content={`Team Members`} />
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
      <div className="mt-2 w-full p-5 ml-3 text-left">
        <h2 className="lg:text-5xl font-bold leading-tight text-indigo-500 text-3xl">
          Teams
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
          Meet our talented team members.
        </p>

        <div className="w-full mb-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-6xl">
            {/* Muhammet Kaya */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4 border border-gray-700">
              <div className="flex flex-col items-center text-center mb-3">
                <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center mb-3 text-white text-2xl font-bold">
                  MK
                </div>
                <h3 className="text-xl font-bold text-white">Muhammet Kaya</h3>
                <p className="text-indigo-400 mt-1">Full Stack Developer</p>
                <p className="text-gray-400 mt-1">ASD Laminat</p>
                <p className="text-gray-300 mt-3 text-sm">
                  Software Development Specialist with 4 years of experience. Passionate about learning new technologies and constantly improving.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-400 text-sm mb-2 border-b border-gray-700 pb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">C#</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">ASP.NET</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">JavaScript</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">MSSQL</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Angular</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Docker</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <a href="https://muhammetkaya.net/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-colors text-sm">
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>

            {/* Talha Önder */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-4 border border-gray-700">
              <div className="flex flex-col items-center text-center mb-3">
                <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center mb-3 text-white text-2xl font-bold">
                  TO
                </div>
                <h3 className="text-xl font-bold text-white">Talha Önder</h3>
                <p className="text-indigo-400 mt-1">Software Developer & UI Designer</p>
                <p className="text-gray-400 mt-1">ASD Laminat</p>
                <p className="text-gray-300 mt-3 text-sm">
                  Software Developer passionate about building mobile and web applications from scratch—designing and developing every detail.
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-400 text-sm mb-2 border-b border-gray-700 pb-1">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">React Native</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Expo</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Next.js</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Firebase</span>
                  <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs">Figma</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <a href="https://talhaonder.com/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md transition-colors text-sm">
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams; 