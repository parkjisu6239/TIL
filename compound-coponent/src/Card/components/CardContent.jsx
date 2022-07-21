import React from "react"
import { CardContext } from  "../Card"

const LIMIT = 3

export const CardContent = ({children}) => {
  const { isCollapsed } = React.useContext(CardContext)

  if (isCollapsed) {
    return children.slice(0, LIMIT).map((child) => (
      <div>{child}</div>
    ))
  }

  return children.map((child) => (
    <div>{child}</div>
  ))
}
