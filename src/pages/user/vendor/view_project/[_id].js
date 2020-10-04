import Head from "next/head";
import Moment from "moment";
import { useState, useEffect } from "react";
import { useContent } from "../../../../context/ContentContext";
import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import QuoteForm from "../../../../components/User/Vendor/QuoteForm";

export default function view_project({ projectRes, vendorRes }) {
  const { state, dispatch } = useContent();
  useEffect(() => {
    dispatch({ type: "SET_CONTENT", payload: vendorRes[0] });
  }, []);

  const [project, setProjects] = useState(projectRes[0]);
  const [loading, setLoading] = useState(false);
  const { photos, title, description, status, createdAt } = project;

  return (
    <>
      <Head>
        <title>FOATE | View Project</title>
      </Head>

      <div className="dashboard__project">
        <h2> {title} </h2>
        <span className="dashboard__project-meta">
          <p>Created on {Moment(createdAt).format("LL")} | By: Admin</p>
        </span>

        <h4>
          Assigned Vendor: {vendorRes[0].firstName} {vendorRes[0].lastName}
        </h4>
        <h4>
          Status:{" "}
          <span className="dashboard__project-status">
            {status.toUpperCase()}
          </span>
        </h4>

        <h4>Description</h4>
        <p>{description}</p>
        
        {
          photos.length > 0 ?
          (
            <div>
              <h4>Project photos</h4>
              <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap'}}>
                {
                  photos.map((path, i) => {
                    return (
                      <div style={{marginRight: '2rem',}} key={i}>
                        <img src={path} width="250px"/>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
          : 
          null
        }

        <h4>Project Quote</h4>
        <QuoteForm project={project} />

        
      </div>
    </>
  );
}

view_project.Layout = DashboardLayout;

export const getStaticProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await fetch(
    `${baseURL}/api/project/get_projects_and_vendors`
  );
  const jsonData = await responseData.json();
  const dataResponse = JSON.parse(JSON.stringify(jsonData));

  // Get current project and vendor using param: _id
  const currentProject = dataResponse.data.projects.filter(
    (project) => project._id === ctx.params._id
  );
  const currentVendor = dataResponse.data.vendors.filter(
    (vendor) => vendor._id === currentProject[0].vendor
  );

  return {
    props: {
      projectRes: currentProject,
      vendorRes: currentVendor,
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await fetch(`${baseURL}/api/project`);
  const jsonData = await responseData.json();
  const dataResponse = JSON.parse(JSON.stringify(jsonData));

  // Get the paths we want to pre-render based on posts
  const paths = dataResponse.data.map((project) => ({
    params: { _id: project._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
