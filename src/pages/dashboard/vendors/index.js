import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import Head from 'next/head';
import { useState } from 'react'
import VendorMenu from '../../../components/Dashboard/Vendor/VendorMenu'
import VendorTable from '../../../components/Dashboard/Vendor/VendorTable'
import {protectPage} from '../../../util/protectPage'

export default function index({vendorsRes}) {
  const [vendors, setVendors] = useState(vendorsRes);

  //Delete investor tier locally and in db
  const deleteVendor = async (currentVendor) => {
    let status = confirm(`Confirm delete of ${currentVendor.firstName} ${currentVendor.lastName}?`)
    if(status){
      const res = await fetch(
        "/api/vendor/get_vendors",
        {
          method: "DELETE",
          body: JSON.stringify(currentVendor),
        }
      );
      const vendorResponse = await res.json();

      if(vendorResponse.success){
        const deleteIndex = vendors.indexOf(currentVendor);
        const vendorsCopy = [...vendors];
        vendorsCopy.splice(deleteIndex, 1);
        setVendors(vendorsCopy);
      }else{
        alert("Something went wrong. Unable to delete")
      }
    }
  };

  return (
    <>
      <Head>
        <title>FOATE | Dashboard Vendors</title>
      </Head>
      <div>
        <VendorMenu/>
        <h1>Vendors</h1>
        <VendorTable vendorsRes={vendors} deleteHandler={deleteVendor}/>
      </div>
    </>
  )
}

index.Layout = DashboardLayout;


export const getServerSideProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await protectPage(`${baseURL}/api/vendor/get_vendors`, ctx);
  const jsonData = JSON.parse(JSON.stringify(responseData))
  if(!jsonData.success){
    return {
      props: null,
    };  
  }
  return {
    props: { vendorsRes: jsonData.data }
  };
};