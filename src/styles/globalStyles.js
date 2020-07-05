import React from 'react'

export default function globalStyles({children}) {
  return (
    <div>
      {children}
      <style global jsx>{`
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Nunito', sans-serif;
        }
      
      
      `}
      </style>
    </div>
  )
}
