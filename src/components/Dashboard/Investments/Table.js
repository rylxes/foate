import React from "react";

export default function Table() {
  return (
    <div>
      <div className="dashboard__main-table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address </th>
              <th>Email</th>
              <th>Tier</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Paul</td>
              <td>Becks</td>
              <td>10 Woods Road...</td>
              <td>pbecks@email.com</td>
              <td>Starter</td>
              <td>12/02/2020</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane</td>
              <td>Doe</td>
              <td>12B Sourthern Road...</td>
              <td>janedoe@email.com</td>
              <td>Stake</td>
              <td>02/08/2020</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mike</td>
              <td>Goodman</td>
              <td>10 Woods Road...</td>
              <td>mikegood@email.com</td>
              <td>Slice</td>
              <td>31/02/2020</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Luke</td>
              <td>Saul</td>
              <td>10 Mount Road...</td>
              <td>luke@email.com</td>
              <td>Slice</td>
              <td>1/12/2020</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Matthew</td>
              <td>Patel</td>
              <td>10 Patel Road...</td>
              <td>mattew@email.com</td>
              <td>Slice</td>
              <td>1/12/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
