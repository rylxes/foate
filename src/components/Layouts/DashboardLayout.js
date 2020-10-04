import { useRouter } from "next/router";
import NextLink from "next/link";
import { useContent } from "../../context/ContentContext";

export default function DashboardLayout({ children }) {
  const { pathname } = useRouter();
  const { state, dispatch } = useContent();

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__sidebar">
          <div className="dashboard__sidebar-header">
            <h2>
              {state.user !== undefined &&
                state.user.role.charAt(0).toUpperCase() +
                  state.user.role.slice(1)}{" "}
              Dashboard{" "}
            </h2>
          </div>
          <div className="dashboard__sidebar-content">
            <ul>
              {state.user !== undefined && state.user.role === "investor" ? (
                <>
                  <NextLink href="/user/investor">
                    <li
                      className={pathname == "/user/investor" ? "dashLink" : ""}
                    >
                      <a>
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                  </NextLink>
                </>
              ) : null}

              {state.user !== undefined && state.user.role === "vendor" ? (
                <>
                  <NextLink href="/user/vendor">
                    <li
                      className={pathname == "/user/vendor" ? "dashLink" : ""}
                    >
                      <a>
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                  </NextLink>
                </>
              ) : null}

              {state.user !== undefined && state.user.role === "user" ? (
                <>
                  <NextLink href="/dashboard">
                    <li className={pathname == "/dashboard" ? "dashLink" : ""}>
                      <a>
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                  </NextLink>

                  <NextLink href="/dashboard/vendors">
                    <li
                      className={
                        pathname == "/dashboard/vendors" ? "dashLink" : ""
                      }
                    >
                      <a>
                        <i className="fa fa-gears"></i> Vendors
                      </a>
                    </li>
                  </NextLink>
                  <NextLink href="/dashboard/projects">
                    <li
                      className={
                        pathname == "/dashboard/projects" ? "dashLink" : ""
                      }
                    >
                      <a>
                        <i className="fa fa-users"></i> Projects
                      </a>
                    </li>
                  </NextLink>
                  <NextLink href="/dashboard/investments">
                    <li
                      className={
                        pathname == "/dashboard/investments" ? "dashLink" : ""
                      }
                    >
                      <a>
                        <i className="fa fa-money"></i> Investments
                      </a>
                    </li>
                  </NextLink>
                </>
              ) : null}
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
              {state.user !== undefined &&
                `${state.user.firstName} ${state.user.lastName} `}
              <i className="fa fa-user-circle"></i>
            </span>
          </div>
          <div className="dashboard__main-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
