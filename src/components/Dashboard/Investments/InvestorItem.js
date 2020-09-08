
export default function InvestorItem({
  investor,
  modalHandler,
  deleteHandler,
}) {

  
  const { _id, firstName, lastName, email, tier, address } = investor;
  return (
    <div className="dashboard_investor-item ">
      <h4>
        Name: {firstName} {lastName}
      </h4>
      <div className="desc">
        <strong>Tier:</strong> {tier}
      </div>
      <div className="desc">
        <strong>Email:</strong> {email}
      </div>

      <div className="desc">
        <strong>Address:</strong> {address}
      </div>
      <div className="navs">
        <button className="btnSmall btn-blue" onClick={() => modalHandler(_id)}>
          View
        </button>
        <button className="btnSmall btn-red" onClick={() => deleteHandler( investor)}>
          Delete
        </button>
      </div>
    </div>
  );
}
