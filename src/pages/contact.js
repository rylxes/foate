import React, {useState, useRef} from 'react'

export default function contact() {
  const [title, setTitle] = useState('')
  const inputRef = useRef();

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  
  const submitHandler = async(e) => {
    e.preventDefault();
    const photo = inputRef.current.files[0];
    
    const formData = new FormData()
    formData.append('myFile', photo);
    console.log(title, photo)
    const res = await fetch('http://localhost:3000/api/vendor/test', {
      method: 'POST',
      body: {
        title,
        photo
      }
    });
    const data = await res.json();
    console.log(JSON.stringify(data,null, 4))
  }


  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={titleHandler}/>
        <br/>
        <label htmlFor="files">Files</label>
        <input type="file" name="files" ref={inputRef}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
