

export default function Index() {
  return (
    <div className="contact">
      <div className="container">
        <form className="contact__form">
          <h1>Contact</h1>
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" className="contact__form-input"/>
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" className="contact__form-input"/>
          </div>
          <div className="contact__form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Subject" className="contact__form-input valid"/>
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder="Message" className="contact__form-textarea"></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </div>
  )
}
