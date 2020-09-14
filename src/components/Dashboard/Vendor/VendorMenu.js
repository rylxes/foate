import React from "react";
import NextLink from "next/link";

export default function SubMenu() {
  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/vendor">
        <a className="btn_dashboard btn-blue">View Vendors</a>
      </NextLink>
      <NextLink href="/dashboard/vendor/add_new_vendor">
        <a className="btn_dashboard btn-blue">Add Vendor</a>
      </NextLink>
      <NextLink href="/dashboard/vendor/quotes">
        <a className="btn_dashboard btn-blue">Manage Quotations</a>
      </NextLink>
      <NextLink href="/dashboard/vendor/invoices">
        <a className="btn_dashboard btn-blue">Manage Invoices</a>
      </NextLink>
    </div>
  );
}
