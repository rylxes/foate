import React from 'react'
import NavLink from 'next/link'
import Moment from "moment";



export default function ProjectsTable({projects: projects, user}) {
  return (
    <div>
      <div className="dashboard__main-table">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Quote</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 &&
              projects.map((project, index) => {
                return (
                  <tr style={{ textAlign: "center" }} key={project._id}>
                    <td>{++index}</td>
                    <td>{project.title.slice(0, 30)}</td>
                    <td>£{project.quote}</td>
                    <td>{user.firstName}{' '}{user.lastName}</td>
                    <td>{Moment(project.createdAt).format("DD/MM/YYYY")}</td>
                    <td>{project.status.toUpperCase()}</td>
                    <td>
                      <NavLink
                        href={`/user/vendor/view_project/${project._id}`}
                      >
                        <a className="btnSmall btn-blue">View</a>
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
