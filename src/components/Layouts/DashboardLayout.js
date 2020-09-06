import { useRouter } from "next/router";
import NextLink from "next/link";


export default function DashboardLayout({ children }) {
  const { pathname } = useRouter();
  

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__sidebar">
          <div className="dashboard__sidebar-header">
            <h2>Welcome Admin</h2>
          </div>
          <div className="dashboard__sidebar-content">
            <ul>
              <NextLink href="/dashboard" >
                <li className={pathname == "/dashboard" ? "dashLink" : ""}>
                  <a>
                    <i className="fa fa-home"></i> Home
                  </a>
                </li>
              </NextLink>
              <NextLink href="/dashboard/vendors" >
                <li className={pathname == "/dashboard/vendors" ? "dashLink" : ""}>
                  <a>
                    <i className="fa fa-gears"></i> Vendors
                  </a>
                </li>
              </NextLink>
              <NextLink href="/dashboard/investments">
                <li className={pathname == "/dashboard/investments" ? "dashLink" : ""}>
                  <a>
                    <i className="fa fa-money"></i> Investments
                  </a>
                </li>
              </NextLink>
            </ul>
          </div>
        </div>
        <div className="dashboard__main">
          <div className="dashboard__main-header">
            <h5>
              <i className="fa fa-tachometer"></i> Dashboard
            </h5>
            <span>
              <i className="fa fa-bell"></i>
            </span>
            <span>
              {" "}
              John Doe
              <i className="fa fa-user-circle"></i>
            </span>
          </div>
          <div className="dashboard__main-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
