import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function ProjectsMenu() {
  const { pathname } = useRouter();

  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/projects">
        <a className={
            pathname == "/dashboard/projects"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"
          }>View Projects</a>
      </NextLink>

      <NextLink href="/dashboard/projects/add_new_project">
        <a className={
            pathname == "/dashboard/projects/add_new_project"
              ? "btn_dashboard btn-blue on"
              : "btn_dashboard btn-blue"}>Create Project</a>
      </NextLink>
    </div>
  )
}
