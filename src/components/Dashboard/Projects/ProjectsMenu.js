import React from "react";
import NextLink from "next/link";

export default function ProjectsMenu() {
  return (
    <div className='dashboard-navs'>
      <NextLink href="/dashboard/projects">
        <a className="btn_dashboard btn-blue">View Projects</a>
      </NextLink>
      <NextLink href="/dashboard/projects/add_new_project">
        <a className="btn_dashboard btn-blue">Create Project</a>
      </NextLink>
    </div>
  )
}
