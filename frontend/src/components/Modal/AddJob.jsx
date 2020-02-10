import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
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

function AddJob({ open, handleOpen }) {
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <IconButton color='inherit' onClick={handleOpen}>
        <Typography className={classes.title} color='inherit' noWrap>
          Add Job
        </Typography>
        <AddCircleOutlineIcon color='secondary' />
      </IconButton>
      <SpringModal open={open} handleOpen={handleOpen}>
        <form className={classes.paper} handleSubmit={handleSubmit}>
          <h2 id='spring-modal-title'>Add Job</h2>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='machine'
            label='Machine'
            name='machine'
            autoComplete='machine'
            autoFocus
            // value={name}
            // onChange={e => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='complaint'
            label='Complaint'
            name='complaint'
            autoComplete='complaint'
            // value={name}
            // onChange={e => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='serial_number'
            label='Serial Number'
            name='serial_number'
            autoComplete='serial number'
            // value={name}
            // onChange={e => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='tech_name'
            label='Technician Name'
            name='tech_name'
            autoComplete='name'
            // value={name}
            // onChange={e => setName(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            Add Job
          </Button>
        </form>
      </SpringModal>
    </div>
  )
}

export default AddJob
