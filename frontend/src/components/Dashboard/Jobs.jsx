import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined"
import Title from "./Title"
import { JobContext } from "../../context/context"
import { axiosWithAuth as axios } from "../../utils/axiosConfig"

function Jobs() {
  let { jobs, setJobs } = useContext(JobContext)
  const classes = useStyles()

  const handleDelete = id => {
    setJobs(jobs.filter(job => job.id !== id))

    axios()
      .delete(`http://localhost:4000/api/jobs/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
  }

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
            <TableCell align='center'>Complete</TableCell>
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
                <TableCell
                  align='center'
                  className={classes.delete}
                  onClick={e => handleDelete(job.id)}
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
