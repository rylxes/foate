import ReactMarkDown from "react-markdown";



export default function Investment({home}) {
  return (
    <div className="investment-A">
      <div className="container ">
      <h1>{home.guide_title}</h1>
        <ReactMarkDown source={home.guide_content} />
        <button className="btn">{home.guide_button_text[0].title}</button>
      </div>
    </div>
  );
}
