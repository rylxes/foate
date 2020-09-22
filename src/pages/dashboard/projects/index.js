import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import Head from 'next/head';
import ProjectMenu from '../../../components/Dashboard/Projects/ProjectsMenu'
import ProjectsTable from '../../../components/Dashboard/Projects/ProjectsTable'
import {protectPage} from '../../../util/protectPage'
import { useState } from 'react';


export default function index({projectRes, vendorRes}) {
  const [projects, setProjects] = useState(projectRes);

  
  //Delete investor tier locally and in db
  const deleteProject = async (currentProject) => {
    let status = confirm(`Confirm delete of ${currentProject.title}?`)
    if(status){
      const res = await fetch(
        "/api/project",
        {
          method: "DELETE",
          body: JSON.stringify(currentProject),
        }
      );
      const projectResponse = await res.json();

      if(projectResponse.success){
        const deleteIndex = projects.indexOf(currentProject);
        const projectsCopy = [...projects];
        projectsCopy.splice(deleteIndex, 1);
        setProjects(projectsCopy);
      }else{
        alert("Something went wrong. Unable to delete")
      }
    }
  };


  return (
    <>
      <Head>
        <title>FOATE | Dashboard Projects</title>
      </Head>
      <ProjectMenu/>
      <div>
        <h1>Projects</h1>
        <ProjectsTable projectRes={projects} vendorRes={vendorRes} deleteHandler={deleteProject}/>
      </div>
    </>
  )
}

index.Layout = DashboardLayout;


export const getServerSideProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await protectPage(`${baseURL}/api/project/get_projects_and_vendors`, ctx);
  const jsonData = JSON.parse(JSON.stringify(responseData.data));
  
  if(!responseData.success){
    return {
      props: null,
    };  
  }
  return {
    props: { 
      projectRes: jsonData.projects,
      vendorRes: jsonData.vendors, 
    }
  };
};