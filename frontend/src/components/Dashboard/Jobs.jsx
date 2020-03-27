import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Title from './Title';

// Apollo Deps
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_JOBS, DELETE_JOB } from '../../queries';

function Jobs({ props }) {
  const { loading, error, data } = useQuery(GET_JOBS);
  const [deleteJob] = useMutation(DELETE_JOB, {
    update(cache, { data: { deleteJob } }) {
      const { jobs } = cache.readQuery({ query: GET_JOBS });
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: jobs.filter(job => job.id !== deleteJob.id) }
      });
    }
  });

  const classes = useStyles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <Title>Recent Jobs</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Machine</TableCell>
            <TableCell align='center'>Complaint</TableCell>
            <TableCell align='center'>Technician</TableCell>
            <TableCell align='center'>Complete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.jobs &&
            data.jobs.map(job => (
              <TableRow
                key={job.id}
                className={classes.row}
                onClick={() => props.history.push(`/job/${job.id}`)}
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
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Jobs;

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
