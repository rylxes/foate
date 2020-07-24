import '../../public/css/styles.css'
import '../../public/css/tailwind.css'

import Navbar from '../components/Layouts/Navbar'
import Head from 'next/head'
import Footer from '../components/Layouts/Footer'


const MyAPP = ({ Component, pageProps }) => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>FOATE with ANT DESIGN</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap" rel="stylesheet"></link>
        {/* <link rel="stylesheet" href="css/styles.css"/> */}
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

export default MyAPP;
