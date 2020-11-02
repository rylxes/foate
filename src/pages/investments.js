import { useRouter } from "next/router";
import CardList from "../components/Investments/CardList";

export default function investment({ investments }) {
  const router = useRouter();
  
  return (
    <div className="invest">
      <div>
        <div className="header">
          <div className="container">
            <h1>{investments.page_title}</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="invest__content">
          <h4>{investments.sub_title_1}</h4>
          <p>{investments.sub_title_1_content}</p>

          <h4>{investments.sub_title_2}</h4>
          <img
            src={`${investments.sub_title_2_media[0].url}`}
            alt="Illustration of Manchester city."
          />
          <p>{investments.sub_title_2_content}</p>

          <h4>{investments.sub_title_3}</h4>
          <div className="invest__content-how">
            <div>
              <img
                src={`${investments.sub_title_3a_img[0].url}`}
                alt="security icon."
              />
              <p>{investments.sub_title_3a_text}</p>
            </div>

            <div>
              <img
                src={`${investments.sub_title_3b_img[0].url}`}
                alt="grant icon."
              />
              <p>{investments.sub_title_3b_text}</p>
            </div>
            <div>
              <img
                src={`${investments.sub_title_3c_img[0].url}`}
                alt="legal home icon."
              />
              <p>{investments.sub_title_3c_text}</p>
            </div>
            <div>
              <img
                src={`${investments.sub_title_3d_img[0].url}`}
                alt="keys icon."
              />
              <p>{investments.sub_title_3d_text}</p>
            </div>
            <div>
              <img
                src={`${investments.sub_title_3e_img[0].url}`}
                alt="builders home icon."
              />
              <p>{investments.sub_title_3e_text}</p>
            </div>
            <div>
              <img
                src={`${investments.sub_title_3f_img[0].url}`}
                alt="agreement home icon."
              />
              <p>{investments.sub_title_3f_text}</p>
            </div>
          </div>

          <h4>{investments.sub_title_4}</h4>
          <p>{investments.sub_title_4_content}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "-5rem 0 5rem",
            }}
          >
            <button
              type="submit"
              className="btn"
              onClick={() => router.push("/login/investor")}
            >
              {investments.sub_title_4_button}
            </button>
          </div>
        </div>
        <div className="invest__cards-list">
          {investments.flip_card.map((data, i) => (
            <div key={i}>
              <CardList cardData={data} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const investmentsRes = await fetch(
    "https://foateblog.herokuapp.com/investment"
  );
  const investmentsData = await investmentsRes.json();
  const investments = JSON.parse(JSON.stringify(investmentsData));

  return {
    props: {
      investments,
    },
  };
};
