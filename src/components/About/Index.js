import TeamCard from "./TeamCard";

export default function Index() {
  return (
    <div className="about">
      <div className="header">
        <div className="container">
          <h1>About FOATE</h1>
        </div>
      </div>

      {/* Content 1 */}
      <div className="about__content about__content-1">
        <div className="container">
          <div className="about__services">
            <div className="about__text no-Gap">
              <h4>Who We Are</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
            </div>
            <img
              className="about__img"
              src="./img/about_us.jpg"
              alt="About us"
            />
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className="about__content about__content-2">
        <div className="container">
          <div className="about__services">
            <div className="about__img-group">
              <img
                className="about__img-1"
                src="./img/skyscrapper.jpg"
                alt="About us"
              />
              <img
                className="about__img-2"
                src="./img/teamwork.jpg"
                alt="About us"
              />
            </div>

            <div className="about__text">
              <h4>Vision</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>

              <h4>Mission</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                eligendi ipsam similique fugit incidunt est impedit
                reprehenderit nobis excepturi dolorem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content 3 */}
      <div className="about__content about__content-3">
        <div className="container">
          <div className="about__team">
            <h4>Our Team</h4>
            <div className="about__team-cardList">
              {[
                { name: "Sarah Moore", role: "CEO", avatar: "avi4.jpg" },
                { name: "Andrew Peters", role: "CTO", avatar: "avi2.png" },
                {
                  name: "Mike Sanders",
                  role: "Head of Talent",
                  avatar: "avi3.png",
                },
                {
                  name: "Vivian Shaw",
                  role: "Head of Marketing",
                  avatar: "avi1.png",
                },
              ].map((_, i) => (
                <div key={i}>
                  <TeamCard cardData={_} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
