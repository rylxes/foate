import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import Head from 'next/head';
import Table from '../../../components/Dashboard/Home/Table'


export default function index() {
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Vendors</title>
      </Head>
      <div>
        <h1>Vendors</h1>
        <Table/>
      </div>
    </>
  )
}

index.Layout = DashboardLayout;