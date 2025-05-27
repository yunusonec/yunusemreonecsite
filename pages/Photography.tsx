import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Photography: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Photography</title>
        <meta
          name="description"
          content={`My photography hobby and gallery.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Photography"} />
        <meta
          name="description"
          content={`My photography hobby and gallery.`}
        />
        <link rel="canonical" href={"https://www.yunusemreonec.com"} />
        <meta property="og:locale" content="tr_TR" />
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

      <div className={isTabletOrMobile ? "p-3" : ""}>
        <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg m-4 lg:m-6">
          <div className="p-6 lg:p-12">
            <div>
              <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                Photography
              </h1>
              <div className="text-gray-400 dark:text-gray-400 mb-8">
                Capturing moments and exploring visual storytelling through photography.
              </div>

              <div className="mt-6">
                <h2 className="text-2xl text-white font-semibold mb-4">My Photography Journey</h2>
                <p className="text-gray-300 mb-6">
                  Photography allows me to see the world from different perspectives and capture moments that might otherwise go unnoticed. 
                  I enjoy exploring various photography styles including landscape, street photography, and portrait photography.
                </p>

                <h2 className="text-2xl text-white font-semibold mb-4">Equipment</h2>
                <ul className="list-disc pl-6 text-gray-300 mb-6">
                  <li className="mb-2">Canon EOS R5</li>
                  <li className="mb-2">Canon RF 24-70mm f/2.8L IS USM</li>
                  <li className="mb-2">Canon RF 70-200mm f/2.8L IS USM</li>
                  <li className="mb-2">Canon RF 50mm f/1.2L USM</li>
                  <li>DJI Air 2S (for aerial photography)</li>
                </ul>

                <h2 className="text-2xl text-white font-semibold mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Sunset at the beach</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Urban architecture</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Mountain landscapes</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Street photography</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Wildlife shots</p>
                  </div>
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-md mb-2"></div>
                    <p className="text-gray-300 text-sm">Aerial view</p>
                  </div>
                </div>

                <h2 className="text-2xl text-white font-semibold mb-4">Photography Skills</h2>
                <ul className="list-disc pl-6 text-gray-300">
                  <li className="mb-2">Composition and framing</li>
                  <li className="mb-2">Lighting techniques</li>
                  <li className="mb-2">Post-processing with Adobe Lightroom and Photoshop</li>
                  <li className="mb-2">Long exposure photography</li>
                  <li>Drone photography</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Scrollbars>
  );
};

export default Photography; 