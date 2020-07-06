import React from 'react'

export default function globalStyles({children}) {
  return (
    <div>
      {children}
      <style global jsx>{`
        
      `}
      </style>
    </div>
  )
}
