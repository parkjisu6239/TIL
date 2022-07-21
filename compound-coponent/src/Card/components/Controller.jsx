import React from "react"
import { CardContext } from  "../Card"

export const Expand = ({children}) => {
  const { isCollapsed, toggle } = React.useContext(CardContext)
  return isCollapsed && React.cloneElement(children, {onClick: toggle})
}

export const Collapse = ({children}) => {
  const { isCollapsed, toggle } = React.useContext(CardContext)
  return !isCollapsed && React.cloneElement(children, {onClick: toggle})
}
