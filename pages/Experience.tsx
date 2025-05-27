import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const MyWork: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <div>
        <Head>
          <title>Yunus Emre ÖNEÇ | Experience</title>
          <meta name="description" content={`Professional Experience`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content={"Yunus Emre ÖNEÇ | Experience"} />
          <meta name="description" content={`Professional Experience`} />
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:widgets:csp" content="on" />
        </Head>
        {!isTabletOrMobile ? (
          <div className="p-3 pl-5 pb-60 text-center" style={{ backgroundColor: "#1a1a1a" }}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Work Experience
              </span>
              <span className="block pt-3 text-indigo-500 text-2xl">
                Industry Experience
              </span>
            </h2>
            <div className="pt-3 w-full timeline">
              <VerticalTimeline>
                {/* ASD Laminat */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="December 2024 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/206.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="ASD Laminat"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Junior Software Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    ASD Laminat, Düzce/TR
                  </h4>
                  <div className="text-left">
                    <p>• Development and maintenance of company software systems</p>
                    <p>• Web application development for laminate product management</p>
                    <p>• Technologies: .NET Core, SQL Server, JavaScript, React</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* Teori Bilgisayar */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="December 2024 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/teori-logo.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="Teori Bilgisayar"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Junior Software Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Teori Bilgisayar, İstanbul/TR
                  </h4>
                  <div className="text-left">
                    <p>• Participated in development of enterprise software solutions</p>
                    <p>• Worked on web application development projects</p>
                    <p>• Technologies: .NET Core, JavaScript, SQL Server</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* BeeKod Internship */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="July 2023 - September 2023"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/beekodlogo.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full beekod-logo"
                      alt="BeeKod"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    BeeKod Software, Düzce/TR
                  </h4>
                  <div className="text-left">
                    <p>• Developed a basic e-commerce website using .NET Core</p>
                    <p>• Created a Trendyol clone for the frontend interface</p>
                    <p>• Implemented database design and relationships</p>
                    <p>• Technologies: C#, .NET Core, ASP.NET MVC, SQL Server, Entity Framework, HTML, CSS, JavaScript</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* Düzce University Internship */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="July 2022 - August 2022"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/düzce.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="Düzce University"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Düzce University IT Department, Düzce/TR
                  </h4>
                  <div className="text-left">
                    <p>• Developed web applications using ASP.NET Core MVC</p>
                    <p>• Created database queries and relationships in MS SQL Server</p>
                    <p>• Built a Super League web application displaying teams, players, and referee statistics</p>
                    <p>• Technologies: C#, ASP.NET Core, MVC, SQL Server, HTML5, CSS3, JavaScript</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        ) : (
          <div className=" pt-5 text-center " style={{ backgroundColor: "#1a1a1a" }}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl  font-bold leading-tight text-3xl text-white">
                Work Experience
              </span>
              <span className="block pt-3 text-indigo-500 text-2xl">
                Industry Experience
              </span>
            </h2>
            <div className="pt-3 h-full pb-60 w-full">
              <VerticalTimeline>
                {/* ASD Laminat */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="December 2024 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/206.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="ASD Laminat"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    ASD Laminat, TR
                  </h4>
                  <div className="text-left">
                    <p>• Development and maintenance of company software systems</p>
                    <p>• Web application development for laminate product management</p>
                    <p>• Technologies: .NET Core, SQL Server, JavaScript, React</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* Teori Bilgisayar */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="December 2024 - Present"
                  iconStyle={{ background: "rgb(53, 57, 61)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/beekodlogo.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="Teori Bilgisayar"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Junior Software Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Teori Bilgisayar, TR
                  </h4>
                  <div className="text-left">
                    <p>• Participated in development of enterprise software solutions</p>
                    <p>• Worked on web application development projects</p>
                    <p>• Technologies: .NET Core, JavaScript, SQL Server</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* BeeKod Internship */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="July 2023 - September 2023"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/beekodlogo.jpg"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="BeeKod"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    BeeKod Software, TR
                  </h4>
                  <div className="text-left">
                    <p>• Developed a basic e-commerce website using .NET Core</p>
                    <p>• Created a Trendyol clone for the frontend interface</p>
                    <p>• Implemented database design and relationships</p>
                    <p>• Technologies: C#, .NET Core, ASP.NET MVC, SQL Server, Entity Framework, HTML, CSS, JavaScript</p>
                  </div>
                </VerticalTimelineElement>
                
                {/* Düzce University Internship */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#3c3c3c",
                    color: "#fff",
                    boxShadow: "0 3px 0 #2c2c2c"
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #3c3c3c",
                  }}
                  date="July 2022 - August 2022"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <Image
                      src={"/düzce.png"}
                      width="500"
                      height="500"
                      className="rounded-full"
                      style={{ objectFit: "contain", backgroundColor: "white", padding: "5px" }}
                      alt="Düzce University"
                    />
                  }
                >
                  <h3 className="vertical-timeline-element-title font-bold">
                    Software Development Intern
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Düzce University IT Department, TR
                  </h4>
                  <div className="text-left">
                    <p>• Developed web applications using ASP.NET Core MVC</p>
                    <p>• Created database queries and relationships in MS SQL Server</p>
                    <p>• Built a Super League web application displaying teams, players, and referee statistics</p>
                    <p>• Technologies: C#, ASP.NET Core, MVC, SQL Server, HTML5, CSS3, JavaScript</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export default MyWork;
