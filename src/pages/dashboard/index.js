import DashboardLayout from '../../components/Layouts/DashboardLayout'
import Home from '../../components/Dashboard/Home'
import Head from "next/head";
import { protectPage } from "../../util/protectPage";
import { useContent } from '../../context/ContentContext'
import { useEffect } from 'react';


function Dashboard({ data }) {
  const {state, dispatch} = useContent();
  useEffect(()=>{
    dispatch({type: 'SET_CONTENT', payload: data.data})
  }, [])
  
  
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Home</title>
        {/* {console.log(state)} */}
      </Head>
      <Home/>
    </>
  );
}

export default Dashboard;
Dashboard.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const data = await protectPage(`${baseURL}/api/admin`, ctx);
  return {
    props: { data },
  };
};
