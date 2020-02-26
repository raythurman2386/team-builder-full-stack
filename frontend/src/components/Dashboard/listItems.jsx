import React, { useContext } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import PersonIcon from "@material-ui/icons/Person"
import { GlobalContext } from "../../context"
// import useToggle from "../../hooks/useToggle"
// import AddTech from "../Modal/AddTech"

const MainListItems = () => {
  const { techs } = useContext(GlobalContext)
  // const [open, handleOpen] = useToggle()

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
      {/* <AddTech open={open} handleOpen={handleOpen} /> */}
    </div>
  )
}

export default MainListItems
