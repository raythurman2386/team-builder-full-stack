import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined"
import Title from "./Title"
import { GlobalContext } from "../../context"

function Jobs() {
  let { jobs, deleteJob } = useContext(GlobalContext)
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>Recent Jobs</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Machine</TableCell>
            <TableCell align='center'>Complaint</TableCell>
            <TableCell align='center'>Serial Number</TableCell>
            <TableCell align='center'>Technician</TableCell>
            <TableCell align='center'>Created</TableCell>
            <TableCell align='center'>Complete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs &&
            jobs.map(job => (
              <TableRow key={job.id}>
                <TableCell align='center'>{job.machine}</TableCell>
                <TableCell align='center'>{job.complaint}</TableCell>
                <TableCell align='center'>{job.serial_number}</TableCell>
                <TableCell align='center'>{job.name}</TableCell>
                <TableCell align='center'>{job.created_at}</TableCell>
                <TableCell
                  align='center'
                  className={classes.delete}
                  onClick={e => deleteJob(job.id)}
                >
                  <DeleteForeverOutlinedIcon color='secondary' />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Jobs

const useStyles = makeStyles(theme => ({
  delete: {
    cursor: "pointer"
  }
}))
