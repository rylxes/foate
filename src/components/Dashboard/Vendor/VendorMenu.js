import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function SubMenu() {
  const { pathname } = useRouter();

  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/vendors">
        <a className={
            pathname === "/dashboard/vendors"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }>View Vendors</a>
      </NextLink>
      <NextLink href="/dashboard/vendors/add_new_vendor">
        <a className={
            pathname === "/dashboard/vendors/add_new_vendor"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }>Add Vendor</a>
      </NextLink>
    </div>
  );
}
