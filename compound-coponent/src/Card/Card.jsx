import React from "react"
import {
  CardContent,
  Expand,
  Collapse,
  CardItem
} from "./components"

import "./Card.css"

export const CardContext = React.createContext()

const Card = ({children}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const toggle = () => {
    setIsCollapsed(prev => !prev)
  }

  const value = {isCollapsed, toggle}

  return (
    <CardContext.Provider value={value}>
      <div className="card">
        {children}
      </div>
    </CardContext.Provider>
  )
}

Card.CardContent = CardContent;
Card.Expand = Expand;
Card.Collapse = Collapse;
Card.CardItem = CardItem;

export default Card
