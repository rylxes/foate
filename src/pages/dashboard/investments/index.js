import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import NexLink from "next/link";
import { protectPage } from "../../../util/protectPage";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";

export default function index({investments}) {
  console.log(investments);
  return (
    <>
      <Head>
        <title>FOATE | Add Investment</title>
      </Head>
      <InvestMenu/>
      <div></div>
    </>
  );
}

index.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  
  const investments = await protectPage(`${baseURL}/api/investor`, ctx);
  return {
    props: { investments },
  };
};
