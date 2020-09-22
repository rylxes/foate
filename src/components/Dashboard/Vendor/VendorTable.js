import React from "react";
import Moment from 'moment'


export default function VendorTable({ vendorsRes, deleteHandler }) {
  const vendors = [...vendorsRes].reverse();

  return (
    <div>
      <div className="dashboard__main-table">
        <table style={{width: "100%"}}>
          <thead >
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length > 0 &&
              vendors.map((vendor, index) => {
                return (
                  <tr style={{textAlign: "center"}} key={vendor._id}> 
                    <td>{++index}</td>
                    <td>{vendor.firstName}</td>
                    <td>{vendor.lastName}</td>
                    <td>{vendor.email}</td>
                    <td>{vendor.phone}</td>
                    <td>{ Moment(vendor.createdAt).format("l") }</td>
                    <td>
                      <button onClick={() => deleteHandler(vendor)} className="btn-red">Delete</button>
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
