import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import {useRouter} from 'next/router'


const ContactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name field must be more than two characters long.")
    .required(),
  email: yup.string().email("Please enter a valid email address.").required(),
  subject: yup
    .string()
    .min(2, "Subject field must be more than two characters long.")
    .required(),
  message: yup
    .string()
    .min(2, "Message field must be more than two characters long.")
    .required(),
});

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    
    const res = await fetch(`/api/email`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.replace("/email_confirmation");
    } else {
      setLoading(false);
      setReqFailed(true);
    }
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact</h1>
      <div className="contact__form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="contact__form-input"
          ref={register}
          name="name"
        />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
      </div>
      <div className="contact__form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          className="contact__form-input"
          ref={register}
          name="email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
      </div>
      <div className="contact__form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="Subject"
          className="contact__form-input valid"
          ref={register}
          name="subject"
        />
        {errors.subject && (
          <span style={{ color: "red" }}>{errors.subject.message}</span>
        )}
      </div>
      <div className="contact__form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className="contact__form-textarea"
          ref={register}
          name="message"
        ></textarea>
        {errors.message && (
          <span style={{ color: "red" }}>{errors.message.message}</span>
        )}
      </div>
      
      {reqFailed ? (
        <span style={{ color: "red", width: '100%', margin: '0 0 25% 25%' }}>Something went wrong, please try again.</span>
      ) : null}

      <button type="submit" className="btn">
        {loading ? (
          <i className="fa fa-spinner fa-spin fa-2x"></i>
        ) : (
          "Send"
        )}
      </button>
      
    </form>
  );
}
