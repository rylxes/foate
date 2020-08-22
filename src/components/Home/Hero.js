export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url('./img/honeycomb.svg')` }}
      className="hero"
    >
      <img className="hero__hexagon" src="./img/banner_bg_2.svg" alt="logo" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">Your perfect home is out there,</h1>
            <span className="hero__subtitle">Lets help you find it.</span>
            <button className="btn">Get started</button>
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
