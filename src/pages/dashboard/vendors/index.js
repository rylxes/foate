import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import Head from 'next/head';
import VendorMenu from '../../../components/Dashboard/Vendor/VendorMenu'
import Table from '../../../components/Dashboard/Home/Table'


export default function index() {
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Vendors</title>
      </Head>
      <div>
        <VendorMenu/>
        <h1>Vendors</h1>
        <Table/>
      </div>
    </>
  )
}

index.Layout = DashboardLayout;