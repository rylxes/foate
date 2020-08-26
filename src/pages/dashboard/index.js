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
  const users = await protectPage("http://localhost:3000/api/users", ctx);
  return {
    props: { users },
  };
};
