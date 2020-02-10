import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
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
      <IconButton color='inherit' onClick={handleOpen}>
        <Typography className={classes.title} color='inherit' noWrap>
          Add Job
        </Typography>
        <AddCircleOutlineIcon color='secondary' />
      </IconButton>
      <SpringModal open={open} handleOpen={handleOpen}>
        <div className={classes.paper}>
          <h2 id='add job'>Add Job</h2>
          <p>react-spring animates me.</p>
        </div>
      </SpringModal>
    </div>
  )
}
