import ReactMarkDown from "react-markdown";
import {useRouter} from 'next/router'


export default function Investment({home}) {
  const router = useRouter();
  return (
    <div className="investment-A">
      <div className="container ">
      <h1>{home.guide_title}</h1>
        <ReactMarkDown source={home.guide_content} />
        <button onClick={()=> router.push('/investments') } className="btn">{home.guide_button_text[0].title}</button>
      </div>
    </div>
  );
}
