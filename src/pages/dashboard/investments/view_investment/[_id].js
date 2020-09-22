import Moment from "moment";
import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import InvestMenu from "../../../../components/Dashboard/Investments/InvestMenu";
import { useRouter } from "next/router";
// import { protectPage } from "../../../../util/protectPage";

export default function view_investment({ investments }) {
  const router = useRouter();
  const currentInvestment = investments.filter(
    (investment) => investment._id === router.query._id
  );
  const {
    _id,
    filePaths,
    title,
    description,
    tier,
    createdAt,
  } = currentInvestment[0];

  return (
    <>
      <Head>
        <title>FOATE | View Investment</title>
      </Head>
      <InvestMenu />
      <div>
        <h2> {title} </h2>
        <p>Created on {Moment(createdAt).format("LL")} | By: Admin</p>
        <h4>Description</h4>
        <p>{description}</p>
        <h4>Tier: {tier.toUpperCase()}</h4>

        {filePaths.map((path, i) => {
          return (
            <div>
              <p key={i}>{JSON.stringify(path)}</p>
            </div>
          );
        })}

        <button className="btnSmall btn-blue">Download</button>
        <button className="btnSmall btn-red">Delete</button>
      </div>
    </>
  );
}

view_investment.Layout = DashboardLayout;

export const getStaticProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  //   const responseData = await protectPage(`${baseURL}/api/investor`, ctx);

  const responseData = await fetch(`${baseURL}/api/investor`);
  const jsonData = await responseData.json();
  const investmentsRes = jsonData.data.investments;
  const investments = JSON.parse(JSON.stringify(investmentsRes));

  return {
    props: { investments },
  };
};

export const getStaticPaths = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  // const responseData = await protectPage(`${baseURL}/api/investor`, ctx);

  const responseData = await fetch(`${baseURL}/api/investor`);

  const jsonData = await responseData.json();
  const investmentsRes = jsonData.data.investments;
  const investments = JSON.parse(JSON.stringify(investmentsRes));

  // Get the paths we want to pre-render based on posts
  const paths = investments.map((investment) => ({
    params: { _id: investment._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
