import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const ContactFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address.").required(),
});

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [reqFailed, setReqFailed] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    const baseUrl = `/api/email/mailing_list`;
    setLoading(true);
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    const jsonRes = await res.json();
    if (jsonRes.success) {
      console.log(register.current)
      setLoading(false);
      setMsg("Thank you for subscribing to our newsletter.");
      reset();
    } else {
      setLoading(false);
      setReqFailed(true);
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h1 className="newsletter__title">
            Get all the latest investment deals directly in your inbox.
          </h1>
          <div className="newsletter__subscribe">
            <div className="newsletter__form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  placeholder="Subscribe..."
                  className="btn-group__input"
                  ref={register}
                  name="email"
                />
                <button type="submit" className="btn-group">
                  {loading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>
            </div>
            {msg && (
                <p style={{fontWeight: 'bold', textAlign: 'center' }}>{msg}</p>
            )}
            {reqFailed && (
                <p style={{ color: "#2b1d09", fontWeight: 'bold', textAlign: 'center' }}>Something went wrong, try again.</p>
            )}
            {errors.email && (
              <p style={{ color: "#2b1d09", fontWeight: 'bold', textAlign: 'center' }}>{errors.email.message}</p>
            )}
            
        </div>
      </div>
    </div>
  );
}
