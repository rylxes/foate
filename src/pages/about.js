import React, {useState} from 'react'
import Axios from 'axios'


export default function about() {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    console.log(e.target.files)
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
  }

  const submitHandler =async (e)=> {
    e.preventDefault();
    const fileListAsArray = Array.from(file)
    const formData = new FormData();
    fileListAsArray.map((item, i) => {
      formData.append(`photo${i}`, fileListAsArray[i]);
      // formData.append(`vendor`, {_id: '12345'});
      formData.append(`title`, 'Title 1');
      formData.append(`description`, 'Description 1');
      formData.append(`amount`, '10000');
      formData.append(`status`, 'pending');
    })

    console.log(formData, fileListAsArray)
    try {
      const res = await Axios.post('http://localhost:3000/api/vendor/check', formData, {
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
        <input type="file" multiple={true} name="files" onChange={onChange}/>
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
