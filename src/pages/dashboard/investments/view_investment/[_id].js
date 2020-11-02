import Moment from "moment";
import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import InvestMenu from "../../../../components/Dashboard/Investments/InvestMenu";
import DbConnect from "../../../../util/database";
import Investment from "../../../../models/Investment";




export default function view_investment({ currentInvestment }) {
 
  const {
    title,
    filePaths,
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
  await DbConnect();  
    const investmentsRes = await Investment.find({});  
    const investments = JSON.parse(JSON.stringify(investmentsRes));
    const currentInvestment = investments.filter(
      (investment) => investment._id === ctx.params._id
    );
    return {
      props: { currentInvestment }
    }; 
};




export const getStaticPaths = async () => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const responseData = await fetch(`${baseURL}/api/investor/get_investments`);
  const jsonData = await responseData.json();
  const dataResponse = JSON.parse(JSON.stringify(jsonData));


  // Get the paths we want to pre-render based on posts
  const paths = dataResponse.data.investments.map((investment) => ({
    params: { _id: investment._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
