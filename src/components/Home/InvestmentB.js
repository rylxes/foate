import ReactMarkDown from "react-markdown";



export default function InvestmentB({home}) {
  return (
    <div className="container">
      <div className="investment-B">
        <img className="investment-B__img" src="./img/flats.svg" alt="flats" />

        <div className="investment-B__content">
          <h1>{home.variety_title}</h1>
          <div>
            <ReactMarkDown source={home.variety_content} />
          </div>
          <button className="btn">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
