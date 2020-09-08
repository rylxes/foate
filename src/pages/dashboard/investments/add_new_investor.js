import { useState } from "react";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const AddInvestorFormSchema = yup.object().shape({
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
  address: yup
    .string()
    .required("Address field is required")
    .min(2, "Address field must be more than two characters long."),
  tier: yup
    .string()
    .required("Tier field is required")
    .min(2, "Tier field must be more than two characters long."),
});

export default function add_new_investor() {
  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(AddInvestorFormSchema),
  });

  const onSubmit = async (data) => {
    
    setLoading(true);
    const res = await fetch("/api/investor/add_new_investor", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const investorResponse = await res.json();
    console.log(investorResponse)
    if (investorResponse.success){
      router.replace("/dashboard/investments/investors");
    }else{
      setLoading(false);
      setReqFailed(true);
    }
  };

  return (
    <>
      <Head>
        <title>FOATE | Add Investor</title>
      </Head>

      <InvestMenu />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="invest__form">
          <h1>Add Investor</h1>
          <div className="contact__form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="contact__form-input "
              ref={register}
              name="firstName"
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="contact__form-input "
              ref={register}
              name="lastName"
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="contact__form-input "
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
              id="password"
              type="password"
              placeholder="Password"
              className="contact__form-input "
              ref={register}
              name="password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="number"
              placeholder="Phone Number"
              className="contact__form-input "
              ref={register}
              name="phone"
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Address"
              className="contact__form-input "
              ref={register}
              name="address"
            />
            {errors.address && (
              <span style={{ color: "red" }}>{errors.address.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="tier">Tier</label>
            <select
              name="tier"
              id="tier"
              className="contact__form-input"
              ref={register}
            >
              <option value="">Select investor tier</option>
              <option value="starter">Starter</option>
              <option value="stake">Stake</option>
              <option value="slice">Slice</option>
            </select>
            {errors.tier && (
              <span style={{ color: "red" }}>{errors.tier.message}</span>
            )}
          </div>

          <div className="contact__form-group center">
            <button type="submit" className="btn_dashboard">
              {loading ? (
                <i className="fa fa-spinner fa-spin fa-2x"></i>
              ) : (
                "Add Investor"
              )}
            </button>
              { reqFailed ? (<p style={{ color: "red" }}>Something went wrong, please try again.</p>) : null}
          </div>
        </form>
      </div>
    </>
  );
}

add_new_investor.Layout = DashboardLayout;
