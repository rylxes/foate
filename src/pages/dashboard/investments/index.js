import Head from "next/head";
import NextLink from "next/link";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { protectPage } from "../../../util/protectPage";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";


export default function index({ investments }) {
  console.log(investments);
  return (
    <>
      <Head>
        <title>FOATE | Add Investment</title>
      </Head>
      <InvestMenu />
      <h2>Investments</h2> 
      <div className="dashboard__main-listing">
        <h4>Title: Lorem ipsum dolor sit.</h4>
        <div className="desc">
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur, laudantium.
        </div>
        <div className="desc">
          <strong>Tier:</strong> Starter
        </div>
        <div className="navs">
          <NextLink href="/dashboard/investments" href="">
            <a className="btn_dashboard">View</a>
          </NextLink>
          <NextLink href="/dashboard/investments">
            <a className="btn_dashboard">Download</a>
          </NextLink>
        </div>
      </div>

      <div className="dashboard__main-listing">
        <h4>Title: Lorem ipsum dolor sit.</h4>
        <div className="desc">
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur, laudantium.
        </div>
        <div className="desc">
          <strong>Tier:</strong> Starter
        </div>
        <div className="navs">
          <NextLink href="/dashboard/investments" href="">
            <a className="btn_dashboard">View</a>
          </NextLink>
          <NextLink href="/dashboard/investments">
            <a className="btn_dashboard">Download</a>
          </NextLink>
        </div>
      </div>

      <div className="dashboard__main-listing">
        <h4>Title: Lorem ipsum dolor sit.</h4>
        <div className="desc">
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, laudantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur, laudantium.
        </div>
        <div className="desc">
          <strong>Tier:</strong> Starter
        </div>
        <div className="navs">
          <NextLink href="/dashboard/investments">
            <a className="btn_dashboard">View</a>
          </NextLink>
          <NextLink href="/dashboard/investments">
            <a className="btn_dashboard">Download</a>
          </NextLink>
        </div>
      </div>
    </>
  );
}

index.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const investments = await protectPage(`${baseURL}/api/investor/get_investments`, ctx);
  return {
    props: { investments },
  };
};
