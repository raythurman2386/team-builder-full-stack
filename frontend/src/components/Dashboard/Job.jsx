import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useMutation } from '@apollo/react-hooks';
import { GET_JOBS, DELETE_JOB } from '../../queries';

const Job = ({ job }, props) => {
  const classes = useStyles();
  const [deleteJob] = useMutation(DELETE_JOB, {
    update(cache, { data: { deleteJob } }) {
      const { jobs } = cache.readQuery({ query: GET_JOBS });
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: jobs.filter(job => job.id !== deleteJob.id) }
      });
    }
  });

  return (
    <TableRow
      key={job.id}
      className={classes.row}
      onClick={() => props.history.push(`/dashboard/job/${job.id}`)}
    >
      <TableCell align='center'>{job.machine}</TableCell>
      <TableCell align='center'>{job.complaint}</TableCell>
      {job.tech ? (
        <TableCell align='center'>{job.tech.name}</TableCell>
      ) : (
        <TableCell align='center'>Needs Tech</TableCell>
      )}
      <TableCell
        align='center'
        className={classes.delete}
        onClick={e => deleteJob({ variables: { id: job.id } })}
      >
        <DeleteForeverOutlinedIcon color='secondary' />
      </TableCell>
    </TableRow>
  );
};

export default Job;

const useStyles = makeStyles(theme => ({
  delete: {
    cursor: 'pointer'
  },
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    }
  }
}));
