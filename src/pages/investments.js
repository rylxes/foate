import Table from "../components/Investments/Table";

export default function investment() {
  return (
    <div className="invest">
      <div className="">
        <div className="header">
          <div className="container">
            <h1>Investments</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="invest__content">
          <h4>The True Investment with Returns</h4>
          <p>
            Property investments in the United Kingdom are extremely lucative
            and many overseas investors take advantage of the high yields
            property the UK offers. Whether you are a first-time buyer or an
            experience investor, a fully-managed property investment can benefit
            you and your savings.
          </p>

          <h4>Where we invest</h4>
          <img src="/img/fs_img/Manchester.jpg" alt="" />
          <p>
            Properties in vibrant growing cities of Manchester and greater
            Manchester offering a blend of attractive rental yields and strong
            prospects for long-term value increases
          </p>

          <h4>How we do it</h4>
          <div className="invest__content-how">
            <div>
              <img src="/img/fs_img/our-business-1.png" alt="" />
              <p>We find and secure property deals for you</p>
            </div>
            <div>
              <img src="/img/fs_img/our-business-2.png" alt="" />
              <p>We can help you source finance</p>
            </div>
            <div>
              <img src="/img/fs_img/our-business-3.png" alt="" />
              <p>We oversee the legal conveyancing process</p>
            </div>
            <div>
              <img src="/img/fs_img/our-business-4.png" alt="" />
              <p>We can let and manage your investment property</p>
            </div>
            <div>
              <img src="/img/fs_img/our-business-5.png" alt="" />
              <p>We can manage property refurbishment</p>
            </div>
            <div>
              <img src="/img/fs_img/our-business-6.png" alt="" />
              <p>We can share our property knowledge with you</p>
            </div>
          </div>

          <h4>Investment Options</h4>
          <p>
            First-String is a property consultancy that helps individuals create
            long-term wealth through property investment. We offer 3 routes (3-S
            wealth creation) to property investment meaning you don’t need
            massive savings to start creating wealth.
          </p>
          <button style={{textAlign: 'center'}} type="submit" className="btn">
            Get started
          </button>
        </div>
        <div className="invest__cards-list">
          {[
            {
              img: "/img/fs_img/Starter.png",
              title: "Starter",
              about:
                "If you wish to get your feet wet in property investment then this is the package for you.",
              desc: [
                {
                  h5: "STRONG ASSET CLASS",
                  text:
                    "Property investments have higher returns than other investment.",
                  icon: "fa fa-line-chart fa-2x",
                },
                {
                  h5: "HASSLE FREE PROPERTY INVESTMENT",
                  text: "Leverage our expertise - everything is done for you.",
                  icon: "fa fa-dollar fa-2x",
                },
                {
                  h5: "CASH FLOW & CAPITAL APPRECIATION",
                  text:
                    "Gain steady cash-flow from rental income with a long-term property investment.",
                  icon: "fa fa-money fa-2x",
                },
                {
                  h5: "FULLY MANAGED OPTION",
                  text: "No Landlord call-out, No tenant hassle.",
                  icon: "fa fa-gears fa-2x",
                },
              ],
              ideal: false,
            },
            {
              img: "/img/fs_img/Stake.png",
              title: "Stake",
              about:
                "For more experienced open minded investors ready to commit.",
              desc: [
                {
                  h5: "EASY ENTRY",
                  text:
                    "Buy a share of existing cash-flowing investment property.",
                  icon: "fa fa-sign-in fa-2x",
                },
                {
                  h5: "EARN RETURNS FROM DAY 1",
                  text: "Receive share of monthly rental income from day 1.",
                  icon: "fa fa-money fa-2x",
                },
                {
                  h5: "STRONG ASSET CLASS",
                  text: "Create wealth through tiered, Property investment.",
                  icon: "fa fa-line-chart fa-2x",
                },
                {
                  h5: "BIANNUAL INTEREST PAYMENTS",
                  text: "Receive payments twice a year in May and November.",
                  icon: "fa fa-dollar fa-2x",
                },
              ],
              ideal: true,
            },
            {
              img: "/img/fs_img/Slice.png",
              title: "Slice",
              about: "For high net worth individual wishing to go all in.",
              desc: [
                {
                  h5: "10% INTEREST PA",
                  text:
                    "Receive 10% interest per annum with interest paid in cash on request.",
                  icon: "fa fa-line-chart fa-2x",
                },
                {
                  h5: "BIANNUAL INTEREST PAYMENTS",
                  text: "Receive payments twice a year in May and November.",
                  icon: "fa fa-dollar fa-2x",
                },
                {
                  h5: "BOND TERM",
                  text: "12-month minimum term.",
                  icon: "fa fa-bar-chart fa-2x",
                },
                {
                  h5: "EQUITY CONVERSION",
                  text:
                    "Option to convert to equity in First-String 'Buy-In' or Portfolio Builder products.",
                  icon: "fa fa-refresh fa-2x",
                },
              ],
              ideal: false,
            },
          ].map((data, i) => (
            <div key={i}>
              <Table cardData={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
