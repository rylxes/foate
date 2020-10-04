import DashboardLayout from '../../../components/Layouts/DashboardLayout'
import Head from "next/head";
import InvestmentsItem from '../../../components/User/Investor/InvestmentsItem'
import { protectPage } from "../../../util/protectPage";
import { useEffect } from 'react';
import { useContent } from '../../../context/ContentContext'


function Dashboard({ data }) {
  const {state, dispatch} = useContent();
  useEffect(()=>{
    dispatch({type: 'SET_CONTENT', payload: data.data.user})
  }, [])
  const investmentsRes = data.data.investments;
  return (
    <>
      <Head>
        <title>FOATE | Investor Dashboard</title>
      </Head>
      
      <h2>Investments</h2>
      <div className="dashboard__investments">
        {investmentsRes.map((investment) => {
          return (
            <div key={investment._id}>
              <InvestmentsItem user={state.user !== undefined && state.user} investment={investment} />
            </div>
          );
        })}
      </div>

    </>
  );
}

export default Dashboard;
Dashboard.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
  const apiResponse = await protectPage(`${baseURL}/api/investor/auth_investor`, ctx);
  const dataResponse = JSON.parse(JSON.stringify(apiResponse));
  return {
    props: { data: dataResponse },
  };
};


