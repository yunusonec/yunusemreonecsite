import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import Head from "next/head";

const Skills: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Skills</title>
        <meta name="description" content={`Skills`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Skills"} />
        <meta name="description" content={`Skills`} />
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
      <div className=" mt-2 w-full p-5 pb-40 ml-3 text-left">
        <h2 className="lg:text-5xl  font-bold leading-tight text-indigo-500 text-3xl ">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-300">
          Data Structures and Algorithms, Frontend Development, Backend
          Development, Database Management, System Design.
        </p>

        <div className="w-full  mb-5 pb-5 ">
          <div className="mt-5">
            <p className="mt-2  tracking-tight text-gray-400 text-xl">
              Programming
            </p>
            <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/c-sharp-logo.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    C#
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    JavaScript
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/96/000000/typescript.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    TypeScript
                  </p>
                </dt>
              </div>
              {/* <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/48/null/python--v1.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Python
                  </p>
                </dt>
              </div> */}
              
            </dl>
          </div>

          <div className="mt-5 pt-5">
            <p className="mt-2  tracking-tight text-gray-400 text-xl">
              Full-Stack Development
            </p>
            <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/angularjs.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Angular
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Tailwind
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Bootstrap
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/sass.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    SASS
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg" width="90%" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    .NET Core
                  </p>
                </dt>
              </div>
            </dl>
          </div>

          <div className="mt-5 pt-5">
            <p className="mt-2  tracking-tight text-gray-400 text-xl">
              Database
            </p>
            <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/ios-filled/100/000000/sql.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    SQL
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/48/null/redis.png" />{" "}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Redis
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/48/null/postgreesql.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    PostgresSQL
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    MongoDB
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    SQL Server
                  </p>
                </dt>
              </div>
            </dl>
          </div>

          <div className="mt-5 pt-5">
            <p className="  tracking-tight text-gray-400 text-xl">DevOps</p>
            <dl className="space-y-10 mt-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img src="https://img.icons8.com/color/144/000000/git.png" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Git
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img
                      src="https://img.icons8.com/fluency/144/000000/github.png"
                      width="80%"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    GitHub
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-white">
                    <img
                      src="https://img.icons8.com/color/144/000000/docker.png"
                      width="80%"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium pt-3 text-gray-100">
                    Docker
                  </p>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Skills;
