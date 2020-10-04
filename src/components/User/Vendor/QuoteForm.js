import {useState} from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";




const SUPPORTED_FORMATS = [
  'image/jpg', 
  'image/svg', 
  'image/jpeg',
  'image/png'
]

const checkMultiplePhotoTypes = (value) => {
  const files = Object.values(value);
  return files.every(file => SUPPORTED_FORMATS.includes(file.type))
}

const AddProjectFormSchema = yup.object().shape({
  quote: yup
    .number()
    .typeError('Please enter a valid number')
    .integer()
    .required("Quote field is required"),
  photo: yup
    .mixed()
    .test(
      "fileFormat",
      "Please upload only valid image formats",
      value => value && checkMultiplePhotoTypes(value)
    )
});




export default function QuoteForm({project}) {
  const [loading, setLoading] = useState(false);
  const [reqFailed, setReqFailed] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(AddProjectFormSchema),
  });

  

  const onSubmit = async (formValue) => {
    
    const formData = new FormData()
    const formFields = {...project, quote: formValue.quote}
    let i = 1
    for(let file of formValue.photo){
      formData.append(`file${i++}`, file)
    }
    for(let key in formFields){
      formData.append(`${key}`, formFields[key])
    }
    
    setLoading(true);
      const responseData = await fetch(`/api/project/update_quote`, {
      method: "PUT",
      body: formData,
    });

    const jsonData = await responseData.json();
    const updatedStatus = JSON.parse(JSON.stringify(jsonData));
    console.log(updatedStatus)
    setLoading(false);
    
    if (updatedStatus.success){
      setLoading(false);
      router.replace("/user/vendor");
    }else{
      setLoading(false);
      setReqFailed(true);
    }
  };



  return (
    <div className="">
      <form style={{width:"300px"}} onSubmit={handleSubmit(onSubmit)} className="invest__for">
        <div className="contact__form-group">
          <label htmlFor="quote">Quote</label>
          <input
            id="quote"
            type="number"
            placeholder="£ Amount"
            className="contact__form-input "
            ref={register}
            name="quote"
          />
          {errors.quote && (
            <span style={{ color: "red" }}>{errors.quote.message}</span>
          )}
        </div>

        <div className="contact__form-group">
          <label htmlFor="file">Upload Photo</label>
          <input
            required
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
        </div>

        <div className="contact__form-group center">
          <button type="submit" className="btn_dashboard">
            {loading ? (
              <i className="fa fa-spinner fa-spin fa-2x"></i>
            ) : (
              "Update Project"
            )}
          </button>
          {reqFailed ? (
            <p style={{ color: "red" }}>
              Something went wrong, please try again.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
