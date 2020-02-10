import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import AddIcon from "@material-ui/icons/Add"
import SpringModal from "../../utils/SpringModal"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "800px",
    height: "600px"
  }
}))

export default function AddTech({ open, handleOpen }) {
  const classes = useStyles()

  return (
    <div>
      <ListItem button align='center' onClick={handleOpen}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='New Tech' />
      </ListItem>
      <SpringModal open={open} handleOpen={handleOpen}>
        <div className={classes.paper}>
          <h2 id='spring-modal-title'>Add Tech</h2>
          <p id='spring-modal-description'>react-spring animates me.</p>
        </div>
      </SpringModal>
    </div>
  )
}
