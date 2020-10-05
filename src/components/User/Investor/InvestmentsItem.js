import React from "react";
import Moment from "moment";
import NavLink from "next/link";

export default function InvestmentsItem({ investment, user }) {
  const { _id, title, description, tier, createdAt } = investment;

  return (
    <div className="dashboard__main-listing">
      <h4>Title: {title}</h4>
      <div className="desc">
        <strong>Date:</strong> {Moment(createdAt).format("LL")}
      </div>
      <div className="desc">
        <strong>Description:</strong>
        <p>
          {description.slice(0, 300)}
          {"..."}
        </p>
      </div>
      <div className="desc">
        <strong>Tier:</strong> {tier}
      </div>
      <div className="navs">
        {/* <NavLink href={`/user/investor/view_investment/${_id}?asxg=${user.sub}`}>
          <a className="btnSmall btn-blue">View</a>
        </NavLink> */}

        <NavLink href={`/user/investor/view_investment/${_id}`}>
          <a className="btnSmall btn-blue">View</a>
        </NavLink>
      </div>
    </div>
  );
}
