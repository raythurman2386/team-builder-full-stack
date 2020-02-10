import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import TextField from "@material-ui/core/TextField"
import AddIcon from "@material-ui/icons/Add"
import SpringModal from "../../utils/SpringModal"

function AddTech({ open, handleOpen }) {
  const [name, setName] = React.useState("")
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <ListItem button align='center' onClick={handleOpen}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='New Tech' />
      </ListItem>
      <SpringModal open={open} handleOpen={handleOpen}>
        <form className={classes.paper} handleSubmit={handleSubmit}>
          <h2 id='spring-modal-title'>Add Tech</h2>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Technician Name'
            name='name'
            autoComplete='name'
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            Add Tech
          </Button>
        </form>
      </SpringModal>
    </div>
  )
}

export default AddTech

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
    height: "400px"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
