import { useState } from 'react'
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import ReactMarkDown from "react-markdown";
import Carousel from "./../components/Design/Carousel";



const AddVendorFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name field is required")
    .min(2, "First name field must be more than two characters long."),
  lastName: yup
    .string()
    .required("Last name field is required")
    .min(2, "Last name field must be more than two characters long."),
  email: yup
    .string()
    .required("Email field is required")
    .min(2, "Email field must be more than two characters long."),
  password: yup
    .string()
    .required("Password field is required")
    .min(4, "Password length must be above four characters long "),
  phone: yup
    .number()
    .typeError('Please enter a valid phone number')
    .integer()
    .required("Phone field is required")
    .min(2, "Phone field must be more than two characters long."),
});


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


  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);
  // const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(AddVendorFormSchema),
  });


  const onSubmit = async (data) => {

    setLoading(true);
    const res = await fetch("/api/vendor/add_new_vendor", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const vendorResponse = await res.json();
    
    if (vendorResponse.success){
      router.replace("/dashboard/vendors");
    }else{
      setLoading(false);
      setReqFailed(true);
    }

  }



  return (
    <div className="properties">
      <div className="header">
        <div className="container">
          <h1>{page_title}</h1>
        </div>
      </div>

      <div className="container">
        <Carousel currentCard={currentCard} />

        <h2 style={{marginTop: '6rem', textAlign: 'center'}}>{content_title}</h2>
        <h4>{content_sub_title_1}</h4>
        <div className="design__feature-list">
          <ReactMarkDown source={content_description_1} />
        </div>

        <h4>{content_sub_title_2}</h4>
        <div className="design__feature-list ">
          <ReactMarkDown source={content_description_2} />
        </div>

        <h4>{content_sub_title_3}</h4>
        <div className="design__feature-list">
          <ReactMarkDown source={content_description_3} />
        </div>
      </div>

      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Realtor</h1>
        <p>
          Call us on 0161 714 4222 or email us at sales@foate.co.uk for more
          info and to book a viewing. Alternatively, you can fill the form below
          and someone from our sales department will get in touch with you as
          soon as possible.
        </p>
        <div className="contact__form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="contact__form-input"
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="contact__form-input"
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="Phone number"
            className="contact__form-input valid"
          />
        </div>
        <button type="submit" className="btn">
          Send
        </button>
      </form>

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


