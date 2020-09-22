import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function SubMenu() {
  const { pathname } = useRouter();

  return (
    <div className="dashboard-navs">
      <NextLink href="/dashboard/investments">
        <a
          className={
            pathname === "/dashboard/investments"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }
        >
          View Investments
        </a>
      </NextLink>
      <NextLink href="/dashboard/investments/add_new_investment">
        <a
          className={
            pathname === "/dashboard/investments/add_new_investment"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }
        >
          Add Investment
        </a>
      </NextLink>
      <NextLink href="/dashboard/investments/investors">
        <a
          className={
            pathname === "/dashboard/investments/investors"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }
        >
          View Investors
        </a>
      </NextLink>
      <NextLink href="/dashboard/investments/add_new_investor">
        <a
          className={
            pathname === "/dashboard/investments/add_new_investor"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }
        >
          Add Investor
        </a>
      </NextLink>
    </div>
  );
}
