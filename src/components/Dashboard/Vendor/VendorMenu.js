import React from "react";
import NextLink from "next/link";

export default function SubMenu() {
  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/vendors">
        <a className="btn_dashboard btn-blue">View Vendors</a>
      </NextLink>
      <NextLink href="/dashboard/vendors/add_new_vendor">
        <a className="btn_dashboard btn-blue">Add Vendor</a>
      </NextLink>
    </div>
  );
}
