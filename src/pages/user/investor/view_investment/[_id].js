import Moment from "moment";
import DashboardLayout from "../../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useContent } from '../../../../context/ContentContext'


export default function view_investment({ investors, currentInvestment }) {
  const router = useRouter();
  const {state, dispatch} = useContent();


  // useEffect(() => {
  //   if (router && router.query) {
  //     const currentInvestor = investors.filter((investor) => investor._id === router.query.asxg);
  //     dispatch({type: 'SET_CONTENT', payload: currentInvestor[0]})
  //   }
  // }, [router])

    const {
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
      </div>
    </>
  );
}

view_investment.Layout = DashboardLayout;

export const getStaticProps = async (ctx) => {
  
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const responseData = await fetch(`${baseURL}/api/investor/get_investors_investments`);
  const jsonData = await responseData.json();
  const dataResponse = JSON.parse(JSON.stringify(jsonData));

  const currentInvestment = dataResponse.data.investments.filter(
    (investment) => investment._id === ctx.params._id
  );

  return {
    props: { investors: dataResponse.data.investors, currentInvestment},
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
