import NavLink from 'next/link'
import Moment from "moment";

export default function ProjectTable({ projectRes, vendorRes, deleteHandler }) {
  const projects = [...projectRes].reverse();

  return (
    <div>
      <div className="dashboard__main-table">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Vendor</th>
              <th>Quote</th>
              {/* <th>Amount</th> */}
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 &&
              projects.map((project, index) => {
                let vendor = vendorRes.filter(
                  (item) => item._id === project.vendor
                );

                return (
                  <tr style={{ textAlign: "center" }} key={project._id}>
                    <td>{++index}</td>
                    <td>{project.title.slice(0, 30)}</td>
                    {vendor.length > 0 && (
                      <td>
                        {vendor[0].firstName} {vendor[0].lastName}
                      </td>
                    )}

                    <td>£{project.quote}</td>
                    {/* <td>£{project.amount}</td> */}
                    <td>{Moment(project.createdAt).format("DD/MM/YYYY")}</td>
                    <td>{project.status.toUpperCase()}</td>
                    <td>
                      <NavLink
                        href={`/dashboard/projects/view_project/[_id]`}
                        as={`/dashboard/projects/view_project/${project._id}`}
                      >
                        <a className="btnSmall btn-blue">View</a>
                      </NavLink>
                      <button
                        onClick={() => deleteHandler(project)}
                        className="btnSmall btn-red"
                      >
                        Delete
                      </button>
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
