export default function Hero({home}) {
  return (
    <div
      style={{ backgroundImage: `url('./img/honeycomb.svg')` }}
      className="hero"
    >
      <img className="hero__hexagon" src="./img/banner_bg_2.svg" alt="logo" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">{home.header.caption}</h1>
            <span className="hero__subtitle">{home.header.description}</span>
            <button className="btn">{home.header.buttons[0].title}</button>
          </div>

          <img
            className="hero__img"
            src="./img/undraw_for_sale_viax.svg"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
