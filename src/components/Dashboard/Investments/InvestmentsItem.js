import React from 'react'
import Moment from 'moment'

export default function InvestmentsItem({investment}) {
  const {title, description, tier, createdAt} = investment;

  return (
    <div>
      <div className="dashboard__main-listing">
        <h4>Title: {title}</h4>
        <div className="desc">
          <strong>Date:</strong> {' '}
          {  Moment(createdAt).format("LL")}
          
        </div>
        <div className="desc">
          <strong>Description:</strong>
          <p>{description.slice(0, 300)}{'...'}</p>
        </div>
        <div className="desc">
          <strong>Tier:</strong> {tier}
        </div>
        <div className="navs">
          <button className="btnSmall btn-blue">
            Download
          </button>
          <button className="btnSmall btn-red">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
