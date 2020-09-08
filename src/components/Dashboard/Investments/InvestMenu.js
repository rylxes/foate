import React from "react";
import NextLink from "next/link";

export default function SubMenu() {
  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/investments">
        <a className="btn_dashboard btn-blue">View Investments</a>
      </NextLink>
      <NextLink href="/dashboard/investments/add_new_investment">
        <a className="btn_dashboard btn-blue">Add Investment</a>
      </NextLink>
      <NextLink href="/dashboard/investments/investors">
        <a className="btn_dashboard btn-blue">View Investors</a>
      </NextLink>
      <NextLink href="/dashboard/investments/add_new_investor">
        <a className="btn_dashboard btn-blue" >Add Investor</a>
      </NextLink>
    </div>
  );
}
