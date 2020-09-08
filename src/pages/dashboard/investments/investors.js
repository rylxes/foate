import { useState } from "react";
import Head from "next/head";

import {protectPage} from '../../../util/protectPage'
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";
import InvestorItem from "../../../components/Dashboard/Investments/InvestorItem";
import Modal from "../../../components/Dashboard/Investments/Modal";



export default function investors({investorsRes}) {
  // console.log(investorsRes);

  const investorsArr = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 5,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 6,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 7,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
    {
      id: 8,
      firstName: "John",
      lastName: "Doe",
      address: "10 Victoria Street UK",
      tier: "starter",
      email: "jdoe@email.com",
    },
  ];


  const [investors, setInvestors] = useState(investorsRes);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  // State mgt for modal
  const modalState = (_id) => {
    const currentItem = investors.filter((investor) => investor._id === _id);
    setModalContent(currentItem);
    setShowModal(!showModal);
  };

  //Update investor tier locally and in db
  const updateInvestor = async (modalInvestor) => {
    const currentInvestors = investors.map((investor) =>{ 
     return investor._id === modalInvestor._id ? modalInvestor : investor
    });
    setInvestors(currentInvestors);
    setShowModal(!showModal);
    const res = await fetch(
      "/api/investor/update_investor",
      {
        method: "PUT",
        body: JSON.stringify(modalInvestor),
      }
    );
    const investorResponse = await res.json();
    console.log(investorResponse)
  }

  //Delete investor tier locally and in db
  const deleteInvestor = async (currentInvestor) => {
    let status = confirm(`Confirm delete of ${currentInvestor.firstName} ${currentInvestor.lastName}?`)
    if(status){
      const deleteIndex = investors.indexOf(currentInvestor);
      const investorsCopy = [...investors];
      const deletedInvestor = investorsCopy.splice(deleteIndex, 1);
      setInvestors(investorsCopy);

      const res = await fetch(
        "/api/investor/update_investor",
        {
          method: "DELETE",
          body: JSON.stringify(currentInvestor),
        }
      );
      const investorResponse = await res.json();
      console.log(investorResponse);
    }
  };


  return (
    <div>
      <Head>
        <title>FOATE | View Investors</title>
      </Head>
      <div>
        <InvestMenu />
        <div className="dashboard_investor">
          {/*---- Modal -----*/}
          {modalContent.length ? (
            <div className={`modalBg modalOpen-${showModal}`}>
              <Modal updateModal={updateInvestor} investor={modalContent[0]} closeModal={()=> setShowModal(!showModal)} />
            </div>
          ) : null}

          <div className="dashboard_investor-list">
            {investors.map((investor) => {
              return (
                <div key={investor._id}>
                  <InvestorItem
                    modalHandler={modalState}
                    investor={investor}
                    deleteHandler={deleteInvestor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

investors.Layout = DashboardLayout;

export const getServerSideProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const res = await protectPage(`${baseURL}/api/investor/get_investors`, ctx);
  const json = JSON.parse(JSON.stringify(res))
  const investorsRes = json.data.investors;
  return {
    props: { investorsRes },
  };
};
