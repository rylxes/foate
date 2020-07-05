import GlobalStyles from "../styles/globalStyles";
import Navbar from '../components/Layouts/Navbar'
import Head from 'next/head'
import 'antd/dist/antd.css'


const MyAPP = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>FOATE with ANT DESIGN</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
};

export default MyAPP;
