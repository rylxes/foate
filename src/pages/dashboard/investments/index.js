import Head from "next/head";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { protectPage } from "../../../util/protectPage";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";
import InvestmentsItem from "../../../components/Dashboard/Investments/InvestmentsItem";

export default function index({ investmentsRes }) {
  return (
    <>
      <Head>
        <title>FOATE | Add Investment</title>
      </Head>
      <InvestMenu />
      <h2>Investments</h2>
      <div className="dashboard__investments">
        {investmentsRes.map((investment) => {
          return (
            <div key={investment._id}>
              <InvestmentsItem investment={investment} />
            </div>
          );
        })}
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

  const responseData = await protectPage(
    `${baseURL}/api/investor/get_investments`,
    ctx
  );
  const jsonData = JSON.parse(JSON.stringify(responseData));
  const investmentsRes = jsonData.data.investments;
  return {
    props: { investmentsRes },
  };
};
