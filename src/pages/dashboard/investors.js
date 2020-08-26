import DashboardLayout from "../../components/Layouts/DashboardLayout";
import Head from "next/head";

export default function investors() {
  return (
    <>
      <Head>
        <title>FOATE | Dashboard Investors</title>
      </Head>
      <div>
        <h1>Investors</h1>
      </div>
    </>
  );
}

investors.Layout = DashboardLayout;
