import React from "react";
import NexLink from "next/link";

export default function SubMenu() {
  return (
    <div className='dashboard-navs'>
      <NexLink href="/dashboard/investments">
        <a className="btn_dashboard">View Investments</a>
      </NexLink>
      <NexLink href="/dashboard/investments/add">
        <a className="btn_dashboard">Add Investment</a>
      </NexLink>
      <NexLink href="/dashboard/investments/view_invesotor">
        <a className="btn_dashboard">View Investors</a>
      </NexLink>
      <NexLink href="/dashboard/investments/add_investor">
        <a className="btn_dashboard">Add Investors</a>
      </NexLink>
    </div>
  );
}
