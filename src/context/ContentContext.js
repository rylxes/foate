import {createContext, useState, useContext, useReducer} from 'react'

export const ContentContext = createContext();


const reducer = (state, action) =>{
  switch (action.type) {
    case 'GET_CONTENT':
      return state
    case 'SET_CONTENT':
      return { ...state, content: action.content}
      default:
        throw new Error(`Unknown action: ${action.type}`)
  }
}



export const ContentProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, "Hello Ben")

  return(
    <ContentContext.Provider value={{state, dispatch}}>
      {children}
    </ContentContext.Provider>
  )
}


export const useContent = () =>{
  return useContext(ContentContext)
}