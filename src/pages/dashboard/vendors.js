import DashboardLayout from '../../components/Layouts/DashboardLayout';
import Head from 'next/head';

export default function vendors() {
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Vendors</title>
      </Head>
      <div>
        <h1>Vendors</h1>
      </div>
    </>
  )
}

vendors.Layout = DashboardLayout;