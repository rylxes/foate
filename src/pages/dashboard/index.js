import DashboardLayout from '../../components/Layouts/DashboardLayout'
import Home from '../../components/Dashboard/Home'
import Head from "next/head";
import { protectPage } from "../../util/protectPage";

function Dashboard({ users }) {
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Home</title>
      </Head>
      <Home/>
    </>
  );
}

export default Dashboard;
Dashboard.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  // const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://foate.herokuapp.com';
  const users = await protectPage(`${baseURL}/api/users`, ctx);
  return {
    props: { users },
  };
};
