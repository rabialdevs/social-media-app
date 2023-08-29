import React, { useState } from "react"
import TokenContext from "./TokenContext"

const TokenProvider = ({ children }) => {
  
  const [token, setToken] = useState({
    token:"",
  })
  

  return (
    <TokenContext.Provider value={{
      token: token,
      setToken:setToken
    }}>
      {children}

    </TokenContext.Provider>
  )
}

export default TokenProvider