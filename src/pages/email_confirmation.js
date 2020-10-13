import {useRouter} from 'next/router'

export default function email_confirmation() {
  const router = useRouter()
  return (
    <div className="design">
      <div className="header">
        <div className="container">
          <h1>Email Confirmation</h1>
        </div>
      </div>
      <br/>
      <div className="container" style={{marginBottom: '15rem', textAlign: 'center'}}>
        <h2>
          Mail was sent successfully
        </h2>
        <p>Thank you for reaching out to us. We will get back to you very soon.</p>
        <button onClick={()=> router.push('/')} className="btn">Go Back to Home Page</button>
      </div>
    </div>
  )
}
