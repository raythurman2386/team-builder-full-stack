import React from "react"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Title from "./Title"

// Generate Order Data
function createData(id, machine, complaint, serial_number, tech) {
  return { id, machine, complaint, serial_number, tech }
}

const rows = [
  createData(0, "259D", "PM 2", "asdgahaedfadsfa", "Herb"),
  createData(1, "259D", "PM 2", "asdgahaedfadsfa", "Herb"),
  createData(2, "259D", "PM 2", "asdgahaedfadsfa", "Herb"),
  createData(3, "259D", "PM 2", "asdgahaedfadsfa", "Herb"),
  createData(4, "259D", "PM 2", "asdgahaedfadsfa", "Herb")
]

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function Jobs() {
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
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.machine}</TableCell>
              <TableCell>{row.complaint}</TableCell>
              <TableCell>{row.serial_number}</TableCell>
              <TableCell align='center'>{row.tech}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more Jobs
        </Link>
      </div>
    </React.Fragment>
  )
}
