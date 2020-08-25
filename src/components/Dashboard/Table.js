import React from "react";

export default function Table() {
  return (
    <div>
      <div className="dashboard__main-table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Invoice </th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bathroom works</td>
              <td>Redesigned the bathroom</td>
              <td>12/08/2020</td>
              <td>Approved</td>
              <td>
                <button className="btn-blue" >View</button>
                <button className="btn-green">Approve</button>
                <button className="btn-red">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kitchen work</td>
              <td>Redesigned the kitchen</td>
              <td>14/08/2020</td>
              <td>Pending</td>
              <td>
                <button className="btn-blue" >View</button>
                <button className="btn-green">Approve</button>
                <button className="btn-red">Delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kitchen work</td>
              <td>Redesigned the kitchen</td>
              <td>14/08/2020</td>
              <td>Approved</td>
              <td>
                <button className="btn-blue" >View</button>
                <button className="btn-green">Approve</button>
                <button className="btn-red">Delete</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kitchen work</td>
              <td>Redesigned the kitchen</td>
              <td>14/08/2020</td>
              <td>Pending</td>
              <td>
                <button className="btn-blue" >View</button>
                <button className="btn-green">Approve</button>
                <button className="btn-red">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
