import {useState} from 'react'
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Head from "next/head";
import InvestMenu from "../../../components/Dashboard/Investments/InvestMenu";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const SUPPORTED_FORMATS = [
  'application/pdf', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
  'application/msword'
]

const checkMultipleFileTypes = (value) => {
  let types = [];
  for (const key in value) {
    if(value[key].type){
      types.push(value[key].type);
    }
  }
  return types.every((type)=> {
    return SUPPORTED_FORMATS.includes(type);
  })
}

const ContactFormSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required")
    .min(2, "Title field must be more than two characters long."),
  description: yup
    .string()
    .required("Description field is required")
    .min(2, "Description field must be more than two characters long."),
  tier: yup
    .string()
    .required("Tier field is required")
    .min(2, "Tier field must be more than two characters long."),
  pdf: yup
    .mixed()
    .test(
      "fileFormat",
      "Please upload only valid documents",
      value => value && checkMultipleFileTypes(value)
    )
});


export default function add_investment() {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData();
    let count = 1;
    if(data.pdf.length){
      for (const key in data.pdf) {
        formData.append(`pdf_${count++}`, data.pdf[key]);    
      }
    }
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tier", data.tier);
    
    const res = await fetch("http://localhost:3000/api/investor/pdf", {
      method: "POST",
      body: formData,
    });

    const uploadResponse = await res.json();
    if (uploadResponse.success) router.replace("/dashboard/investments");
  };

  return (
    <>
      <Head>
        <title>FOATE | Add Investment</title>
      </Head>
      
      <InvestMenu/>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="invest__form">
          <h1>Create An Investment</h1>
          <div className="contact__form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
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
              id="description"
              type="text"
              placeholder="Description"
              className="contact__form-textarea"
              ref={register}
              name="description"
            ></textarea>
            {errors.description && (
              <span style={{ color: "red" }}>{errors.description.message}</span>
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
              <option value="">Select investment tier</option>
              <option value="starter">Starter</option>
              <option value="stake">Stake</option>
              <option value="slice">Slice</option>
            </select>
            {errors.tier && (
              <span style={{ color: "red" }}>{errors.tier.message}</span>
            )}
          </div>

          <div className="contact__form-group">
            <label htmlFor="file">File</label>
            <input
              multiple
              id="file"
              type="file"
              name="pdf"
              className="contact__form-input"
              ref={register}
            />
            {errors.pdf && (
              <span style={{ color: "red" }}>{errors.pdf.message}</span>
            )}
          </div>
          <div className="contact__form-group center">
            <button type="submit" className="btn_dashboard">
              {loading ? (<i className="fa fa-spinner fa-spin fa-2x"></i>)  : "Upload"}
            </button>    
          </div>
        </form>
      </div>
    </>
  );
}

add_investment.Layout = DashboardLayout;
