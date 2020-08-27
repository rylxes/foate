
import {useRouter} from 'next/router'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'


const ContactFormSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address.').required('Email field is required'),
    password: yup.string().required('Password field is required').min(3,'Subject field must be more than three characters long.')
  })


export default function login() {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ContactFormSchema)
  });
  
  const onSubmit = async ({email, password}) => {
    // const baseURL = process.env.NODE_ENV === 'development' ? process.env.devURL: process.env.prodURL;
    const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://foate.herokuapp.com';

    const res = await fetch(`${baseURL}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    const msg = await res.json();
    if(msg.message === 'OK'){
      router.replace('/dashboard')
    }
  }

  return (
    <div className="container">
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="contact__form-input"
            ref={register}
            name="password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </div>
        
        <button type="submit" className="btn">
          Send
        </button>
      </form>
      <br/><br/>
    </div>
  );
}
