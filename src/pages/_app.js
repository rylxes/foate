import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

import "../../public/scss/main.scss";
import { ContentProvider } from "../context/ContentContext";

const MyAPP = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>FOATE with ANT DESIGN</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ContentProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContentProvider>
      <Footer />
    </div>
  );
};

export default MyAPP;
