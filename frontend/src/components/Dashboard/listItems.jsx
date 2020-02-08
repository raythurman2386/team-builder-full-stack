import React, { useContext } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import PersonIcon from "@material-ui/icons/Person"
import { TechContext } from "../../context/context"

const MainListItems = () => {
  const { techs } = useContext(TechContext)

  return (
    <div>
      {techs &&
        techs.map(tech => (
          <ListItem key={tech.id} button align='center'>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={tech.name} />
          </ListItem>
        ))}
    </div>
  )
}

export default MainListItems
