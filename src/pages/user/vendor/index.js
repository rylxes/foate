import DashboardLayout from '../../../components/Layouts/DashboardLayout'
import Head from "next/head";
// import ProjectsItem from '../../../components/User/Vendor/ProjectsItem';
import ProjectsTable from '../../../components/User/Vendor/ProjectsTable'
import { protectPage } from "../../../util/protectPage";
import {useContent} from '../../../context/ContentContext'
import {useEffect} from 'react'

function Dashboard({ data }) {

  const {state, dispatch} = useContent();
  useEffect(()=>{
    dispatch({type: 'SET_CONTENT', payload: data.data.user})
  }, [])
  
  return (
    <>
      <Head>
        <title>FOATE | Vendor Dashboard</title>
      </Head>
      
      <h2>Projects</h2><br/>
      <div className="dashboard__investments">
        <ProjectsTable projects={data.data.projects} user={data.data.user}/>
      </div>
    </>
  );
}

export default Dashboard;
Dashboard.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const apiResponse = await protectPage(`${baseURL}/api/vendor/auth_vendor`, ctx);
  const dataResponse = JSON.parse(JSON.stringify(apiResponse));
  
  return {
    props: { data: dataResponse },
  };
};
