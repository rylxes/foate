import ReactMarkDown from "react-markdown";
import {useRouter} from 'next/router'


export default function InvestmentB({home}) {
  const router = useRouter();
  
  return (
    <div className="container">
      <div className="investment-B">
        <img className="investment-B__img" src="./img/flats.svg" alt="flats" />

        <div className="investment-B__content">
          <h1>{home.variety_title}</h1>
          <div>
            <ReactMarkDown source={home.variety_content} />
          </div>
          <button onClick={()=> router.push('/investments') } className="btn">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
