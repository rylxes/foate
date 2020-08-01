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
          <h4>Investment Options</h4>
          <p>
            First-String is a property consultancy that helps individuals create
            long-term wealth through property investment. We offer 3 routes (3-S
            wealth creation) to property investment meaning you don’t need
            massive savings to start creating wealth.
          </p>
          <p>Talk to us today to find out more about our product offerings.</p>
          <div className="invest__cards-list">
            {[
              { 
                title: "Plan 1", 
                amount: "£5000", 
                desc: ['Service A'],
                ideal: false
              },
              { 
                title: "Plan 2", 
                amount: "£20,000", 
                desc: ['Service A', 'Service B'],
                ideal: true
              },
              {
                title: "Plan 3",
                amount: "£50,000",
                desc: ['Service A', 'Service B', 'Service C', 'Service D',],
                ideal: false
              }
            ].map((data, i) => (
              <div key={i}>
                <Table cardData={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
