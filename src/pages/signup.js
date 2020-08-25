import {useRouter} from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const SignupFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name field must be more than two characters long.")
    .required(),
  lastName: yup
    .string()
    .min(2, "Last name field must be more than two characters long.")
    .required(),
  email: yup.string().email("Please enter a valid email address.").required(),
  password: yup.string().min(3, "Subject field must be more than three characters long.").required(),
});

export default function signup() {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupFormSchema),
  });

  const onSubmit = async ({ firstName, lastName, email, password }) => {
    const res = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName, lastName, email, password})
    });
    const msg = await res.json();
    console.log({email, password, msg});
    if(msg.message === 'OK'){
      router.replace('/dashboard')
    }
  };

  return (
    <div className="container">
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup</h1>
        <div className="contact__form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="contact__form-input"
            ref={register}
            name="firstName"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.firstName.message}</span>
          )}
        </div>
        <div className="contact__form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="last Name"
            className="contact__form-input"
            ref={register}
            name="lastName"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.lastName.message}</span>
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
          <label htmlFor="subject">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="contact__form-input valid"
            ref={register}
            name="password"
          />
          {errors.subject && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}
