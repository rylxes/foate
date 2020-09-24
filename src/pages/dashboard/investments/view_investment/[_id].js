import Moment from "moment";
import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import InvestMenu from "../../../../components/Dashboard/Investments/InvestMenu";
import { useRouter } from "next/router";





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


  //Delete investor tier locally and in db
  const deleteInvestment = async (investment) => {
    let status = confirm(`Confirm delete of ${investment.title}?`)
    if(status){
      const res = await fetch(
        "/api/investor/update_investments",
        {
          method: "DELETE",
          body: JSON.stringify(investment),
        }
      );
      const investmentResponse = await res.json();

      if(investmentResponse.success){
        router.push('/dashboard/investments')
      }else{
        alert("Something went wrong. Unable to delete")
      }
    }
  };

  return (
    <>
      <Head>
        <title>FOATE | View Investment</title>
      </Head>
      <InvestMenu />
      <div className="dashboard__investItem">
        <h2> {title} </h2>
        <span className="dashboard__project-meta">
          <p>Created on {Moment(createdAt).format("LL")} | By: Admin</p>
        </span>
        <h4>Description:</h4>
        <p>{description}</p>
        <h4>Investment Tier: {tier.toUpperCase()}</h4>
          
        <h4>Download Investment Documents</h4>
        <div className="dashboard__investItem-docs">
          {filePaths.map((path, i) => {
            return (
              <div key={i}>
                <a href={path} download className="btnSmall btn-blue">
                  Document {i + 1}
                </a>
              </div>
            );
          })}
        </div>

        <button onClick={() => deleteInvestment(currentInvestment[0])} className="btnSmall btn-red">Delete Investment</button>
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
