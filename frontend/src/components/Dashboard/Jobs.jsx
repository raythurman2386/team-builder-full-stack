import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Title from "./Title"
import { JobContext } from "../../context/context"

function Jobs() {
  const { jobs } = useContext(JobContext)
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>Recent Jobs</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Machine</TableCell>
            <TableCell>Complaint</TableCell>
            <TableCell>Serial Number</TableCell>
            <TableCell align='center'>Technician</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs &&
            jobs.map(job => (
              <TableRow key={job.id}>
                <TableCell>{job.machine}</TableCell>
                <TableCell>{job.complaint}</TableCell>
                <TableCell>{job.serial_number}</TableCell>
                <TableCell align='center'>{job.tech_id}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Jobs

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))
