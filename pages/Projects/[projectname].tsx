import { useRouter } from "next/router";
import { projectsdata } from "../../Components/JSON/projectsdata";
import ProjectDetails from "../../Components/ProjectDetails";
import Head from "next/head";

const Projectdetails = (props: any) => {
  const router: any = useRouter();
  const projectDetails = props.projectDetails;
  const altt = projectDetails?.name + " - " + projectDetails?.title;
  return (
    <>
      <Head>
        <title>{projectDetails?.name} - {projectDetails?.title}</title>
        <meta name="description" content={`${projectDetails?.description.substring(0, 160)}...`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${projectDetails?.name} - ${projectDetails?.title}`} />
        <meta name="description" content={`${projectDetails?.description.substring(0, 160)}...`} />
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
      <ProjectDetails projectDetails={projectDetails} altt={altt} />
    </>
  );
};

export async function getStaticProps(context: any) {
  const { params } = context;
  // Get project details from context params and projectsdata
  const projects = projectsdata();
  
  // If projectname is 1, get first project from projectsdata
  // If projectname is 2, get second project from projectsdata
  // If projectname is 3, get third project from projectsdata
  let project = null;
  
  if (params.projectname === "1") {
    project = projects[0];
  } else if (params.projectname === "2") {
    project = projects[1];
  } else if (params.projectname === "3") {
    project = projects[2];
  }

  // Return as props
  return {
    props: {
      projectDetails: project
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectname: "1" } },
      { params: { projectname: "2" } },
      { params: { projectname: "3" } }
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export default Projectdetails;
