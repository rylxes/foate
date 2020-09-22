import Head from 'next/head';
import {useState} from 'react'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import {protectPage} from '../../../util/protectPage'
import * as yup from "yup";
import ProjectsMenu from '../../../components/Dashboard/Projects/ProjectsMenu'
import DashboardLayout from "../../../components/Layouts/DashboardLayout";




// const SUPPORTED_FORMATS = [
//   'application/jpg', 
//   'application/jpeg', 
//   'application/png', 
//   'application/svg', 
// ]

// const checkMultiplePhotoTypes = (value) => {
//   let types = [];
//   for (const key in value) {
//     if(value[key].type){
//       types.push(value[key].type);
//     }
//   }
//   return types.every((type)=> {
//     return SUPPORTED_FORMATS.includes(type);
//   })
// }

const AddProjectFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required")
    .min(2, "Title field must be more than two characters long."),
  description: yup
    .string()
    .required("Description field is required")
    .min(2, "Description field must be more than two characters long."),
  vendor: yup
    .string()
    .required("Vendor field is required")
    .min(2, "Vendor field must be more than two characters long."),
  // amount: yup
  //   .number()
  //   .typeError('Please enter a valid phone number')
  //   .integer()
  //   .required("Phone field is required")
  //   .min(2, "Phone field must be more than two characters long."),
  // quote: yup
  //   .number()
  //   .typeError('Please enter a valid phone number')
  //   .integer()
  //   .required("Phone field is required")
  //   .min(2, "Phone field must be more than two characters long."),
  // photo: yup
  //   .mixed()
  //   .test(
  //     "fileFormat",
  //     "Please upload only valid image formats",
  //     value => value && checkMultiplePhotoTypes(value)
  //   )
});

export default function add_new_project({ vendorsRes }) {
  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(AddProjectFormSchema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    setLoading(true);
    const res = await fetch("/api/project/add_new_project", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const projectResponse = await res.json();
    
    console.log(projectResponse)
    
    if (projectResponse.success){
      router.replace("/dashboard/projects");
    }else{
      setLoading(false);
      setReqFailed(true);
    }
  };

  return (
    <>
      <Head>
        <title>FOATE | Add Project</title>
      </Head>

      <ProjectsMenu />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="invest__form">
          <h1>Create Project</h1>
          
          <div className="contact__form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Project Title"
              className="contact__form-input "
              ref={register}
              name="title"
            />
            {errors.title && (
              <span style={{ color: "red" }}>{errors.title.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              rows="5"
              id="description"
              placeholder="Description"
              className="contact__form-input "
              ref={register}
              name="description">
            </textarea>
            {errors.description && (
              <span style={{ color: "red" }}>{errors.description.message}</span>
            )}
          </div>

          {/* <div className="contact__form-group">
            <label htmlFor="quote">Quote</label>
            <input
              id="quote"
              type="number"
              placeholder="Quote"
              className="contact__form-input "
              ref={register}
              name="quote"
            />
            {errors.quote && (
              <span style={{ color: "red" }}>{errors.quote.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Amount"
              className="contact__form-input "
              ref={register}
              name="amount"
            />
            {errors.amount && (
              <span style={{ color: "red" }}>{errors.amount.message}</span>
            )}
          </div> */}
          
          <div className="contact__form-group">
            <label htmlFor="vendor">Assign a vendor to this project</label>
            <select
              name="vendor"
              id="vendor"
              className="contact__form-input"
              ref={register}
            >
              <option value="">Assign a vendor to this project</option>
              {
                vendorsRes.length > 0 && vendorsRes.map(vendor => {
                  return(
                    <option key={vendor._id} value={vendor._id}> {vendor.firstName} {vendor.lastName} </option>
                  )
                })
              }
              
            </select>
            {errors.vendor && (
              <span style={{ color: "red" }}>{errors.vendor.message}</span>
            )}
          </div>

          {/* <div className="contact__form-group">
            <label htmlFor="file">Upload Photo</label>
            <input
              multiple
              id="file"
              type="file"
              name="photo"
              className="contact__form-input"
              ref={register}
            />
            {errors.photo && (
              <span style={{ color: "red" }}>{errors.photo.message}</span>
            )}
          </div> */}

          <div className="contact__form-group center">
            <button type="submit" className="btn_dashboard">
              {loading ? (
                <i className="fa fa-spinner fa-spin fa-2x"></i>
              ) : (
                "Add Project"
              )}
            </button>
              { reqFailed ? (<p style={{ color: "red" }}>Something went wrong, please try again.</p>) : null}
          </div>
        </form>
      </div>
    </>
  );
}

add_new_project.Layout = DashboardLayout;


export const getServerSideProps = async (ctx) => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.devURL
      : process.env.prodURL;

  const responseData = await protectPage(`${baseURL}/api/vendor/get_vendors`, ctx);
  const jsonData = JSON.parse(JSON.stringify(responseData))
  if(!jsonData.success){
    return {
      props: {vendorsRes: null},
    };  
  }
  return {
    props: { vendorsRes: jsonData.data }
  };
};