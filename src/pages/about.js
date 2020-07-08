import React, {useState} from 'react'
import Axios from 'axios'


export default function about() {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const submitHandler =async (e)=> {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const res = await Axios.post('http://localhost:3000/api/vendor/test', formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
          
        }
      });
      console.log(res)
      setUploadedFile(res.fileName, res.filePath);
    } catch (error) {
      if(error.responseStatus === 500){
        console.log("There was a problem.")
      }else{
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h1>About Page</h1>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={titleHandler}/> */}
        <br/>
        <label htmlFor="files">Files</label>
        <input type="file" name="files" onChange={onChange}/>
        <button type="submit">Submit</button>
      </form>
    <hr/>
      <div>
        <h4>Preview file</h4>
        {fileName}
      </div>
    </div>
  )
}
