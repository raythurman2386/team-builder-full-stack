import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Job from './Job';

// Apollo Deps
import { useQuery } from '@apollo/react-hooks';
import { GET_JOBS } from '../../queries';

function Jobs(props) {
  const { loading, error, data } = useQuery(GET_JOBS);

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
          {data.jobs && data.jobs.map(job => <Job key={job.id} job={job} />)}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Jobs;
