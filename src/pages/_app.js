import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import { ContentProvider } from "../context/ContentContext";
import "../../public/scss/main.scss";






const MyAPP = ({ Component, pageProps }) => {
  
  // Check if page has static layout prop.
  const Layout = Component.Layout || EmptyLayout;

  return (
    <div className="app">
      <Head>
        <title>FOATE</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ContentProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContentProvider>
      <Footer />
    </div>
  );
};

export default MyAPP;

// Setup empty layout alternative.
const EmptyLayout = ({ children }) => <>{children}</>;
