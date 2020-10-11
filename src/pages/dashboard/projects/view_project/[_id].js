import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import ProjectMenu from '../../../../components/Dashboard/Projects/ProjectsMenu'
import { useState } from 'react'
import Head from "next/head";
import Moment from "moment";




export default function view_project({ projectRes, vendorRes }) {
  const [project, setProjects] = useState(projectRes[0]);
  const [loading, setLoading] = useState(false);

  const {photos, title, description, quote, status, createdAt} = project;

  const toggleProjectStatus = async () => {
    setLoading(true);
    const responseData = await fetch(`/api/project/update_project`, {
      method: "PUT",
      body: JSON.stringify(project),
    });
    const jsonData = await responseData.json();
    const updatedStatus = JSON.parse(JSON.stringify(jsonData.data));
    setProjects({...project, status: updatedStatus});
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>FOATE | View Project</title>
      </Head>
      <ProjectMenu/>
      <div className="dashboard__project">
        <h2> {title} </h2>
        <span className="dashboard__project-meta">
          <p>
            Created on {Moment(createdAt).format("LL")} | By: Admin
          </p>
        </span>
        <h4>Description</h4>
        <p>{description}</p>
        <h4>Assigned Vendor: {vendorRes[0].firstName} {vendorRes[0].lastName}</h4>
        <h4>Quoted Amount: £{quote}</h4>
        
        {photos.length > 0 && photos.map((path, i) => {
          return (
            <div>
              <p key={i}>{JSON.stringify(path)}</p>
            </div>
          );
        })}
        <h4>Status: <span className="dashboard__project-status">{status.toUpperCase()}</span></h4>
          
          
        <button onClick={toggleProjectStatus} className="btnSmall btn-blue">
          {loading ? (<span>Toggle Status <i className="fa fa-spinner fa-spin"></i></span>) : "Toggle Status"}
        </button>
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

  const responseData = await fetch(`${baseURL}/api/project/get_projects_and_vendors`);
  const jsonData = await responseData.json();
  
  // Get current project and vendor using param: _id
  const currentProject = jsonData.data.projects.filter(project => project._id === ctx.params._id);
  const currentVendor = jsonData.data.vendors.filter(vendor => vendor._id === currentProject[0].vendor);
  
  return {
    props: { 
      projectRes: currentProject,
      vendorRes: currentVendor 
    }
  };
};

export const getStaticPaths = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await fetch(`${baseURL}/api/project`);

  const jsonData = await responseData.json();
  const projects = JSON.parse(JSON.stringify(jsonData.data));

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { _id: project._id }
  }));

  return {
    paths,
    fallback: false,
  };
};
