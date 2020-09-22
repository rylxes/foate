export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h1 className="newsletter__title">
            Get all the latest investment deals directly in your inbox.
          </h1>
          <div className="newsletter__subscribe">

          <div className="newsletter__form">
            <input
              type="text"
              placeholder="Subscribe..."
              className="btn-group__input"
              />
            <button className="btn-group">Subscribe</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
