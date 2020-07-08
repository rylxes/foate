import React from 'react'

export default function globalStyles({children}) {
  // Still unused.
  return (
    <div>
      {children}
      <style global jsx>{`
        
      `}
      </style>
    </div>
  )
}
