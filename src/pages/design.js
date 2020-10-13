import ReactMarkDown from "react-markdown";
import ContactForm from '../components/Contact/ContactForm';
import Carousel from "./../components/Design/Carousel";



export default function design({ currentCard }) {  
  const {
    page_title,
    content_title,
    content_img,
    content_sub_title_1,
    content_description_1,
    content_sub_title_2,
    content_description_2,
    content_sub_title_3,
    content_description_3,
  } = currentCard;


  return (
    <div className="design">
      <div className="header">
        <div className="container">
          <h1>{page_title}</h1>
        </div>
      </div>

      <div className="container">
        <Carousel currentCard={currentCard} />

        <h2>{content_title}</h2>

        <h3>{content_sub_title_1}</h3>
        <div className="design__feature-list">
          <ReactMarkDown source={content_description_1} />
        </div>

        <h3>{content_sub_title_2}</h3>
        <div className="design__feature-list ">
          <ReactMarkDown source={content_description_2} />
        </div>

        <h3>{content_sub_title_3}</h3>
        <div className="design__feature-list">
          <ReactMarkDown source={content_description_3} />
        </div>
      </div>
      <div className="container">
        <h3 className="design__feature-title">Contact us for a quote today</h3>
        <ContactForm />
      </div>
      <br />
      <br />
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiRes = await fetch("https://foateblog.herokuapp.com/design");
  const apiResJson = await apiRes.json();

  return {
    props: { currentCard: apiResJson }
  };
};


