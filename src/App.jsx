import "./App.scss";
import illustrationHero from "./assets/icons/illustration-hero.svg";
import musicIcon from "./assets/icons/icon-music.svg";
function App() {
  return (
    <div className="order-summary-container">
      <div className="order-summary-wrapper">
        <img alt="illustration-hero" src={illustrationHero}></img>
        <div className="order-summary-content">
          <div className="order-summary-content-header">
            <h2>Order Summary</h2>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="order-summary-content-body">
            <div className="annual-plan">
              <div>
                <img alt="music-icon" src={musicIcon} />
                <div>
                  <span className="annual-plan-heading">Annual Plan</span>
                  <span className="annual-plan-price">$59.99/year</span>
                </div>
              </div>
              <a href="#">Change</a>
            </div>
            <button>Proceed to Payment</button>
            <p>Cancel Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
