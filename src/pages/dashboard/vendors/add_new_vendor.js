import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

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

export default function add_new_investor() {
  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(AddVendorFormSchema),
  });

  const onSubmit = async (data) => {
    
    setLoading(true);
    const res = await fetch("/api/investor/add_new_vendor", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const vendorResponse = await res.json();
    console.log(vendorResponse)
    if (vendorResponse.success){
      router.replace("/dashboard/vendor");
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

