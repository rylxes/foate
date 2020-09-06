import DashboardLayout from '../../components/Layouts/DashboardLayout'
import Home from '../../components/Dashboard/Home'
import Head from "next/head";
import { protectPage } from "../../util/protectPage";
import { useContent } from '../../context/ContentContext'
import { useEffect } from 'react';


function Dashboard({ users }) {
  const {state, dispatch} = useContent();
  useEffect(()=>{
    dispatch({type: 'SET_CONTENT', payload: users})
  }, [])
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Home</title>
        {console.log(state)}
      </Head>
      <Home/>
    </>
  );
}

export default Dashboard;
Dashboard.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const users = await protectPage(`${baseURL}/api/users`, ctx);
  return {
    props: { users },
  };
};
