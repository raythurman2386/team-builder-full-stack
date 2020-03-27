import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPDATE_JOB, GET_JOBS, GET_TECHS } from '../../queries';
import Layout from '../Layout/Layout';

function UpdateJob({ props }) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_TECHS);
  const [updateJob] = useMutation(UPDATE_JOB, {
    update(cache, { data: { updateJob } }) {
      const { jobs } = cache.readQuery({ query: GET_JOBS });
      let newJobs = jobs.filter(job => job.id !== props.match.params.id);
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: newJobs.concat([updateJob]) }
      });
    }
  });

  const [job, setJob] = useState({
    machine: '',
    complaint: '',
    tech_id: 0
  });

  const handleChange = e => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateJob({
      variables: {
        machine: job.machine,
        complaint: job.complaint,
        tech_id: job.tech_id
      }
    })
      .then(res => console.log(res))
      .catch(err => alert(err.message));
  };

  return (
    <Layout>
      <form className={classes.paper} onSubmit={handleSubmit} fullWidth>
        <h2 id='spring-modal-title'>Update Job</h2>
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
          value={job.machine}
          onChange={e => handleChange(e)}
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
          value={job.complaint}
          onChange={e => handleChange(e)}
        />
        <FormControl
          fullWidth
          variant='outlined'
          className={classes.formControl}
        >
          <InputLabel id='techs'>Tech</InputLabel>
          <Select
            labelId='techs'
            value={job.tech_id}
            name='tech_id'
            onChange={e => handleChange(e)}
          >
            {loading && <MenuItem value={job.tech_id}>Loading . . .</MenuItem>}
            {error && (
              <MenuItem value={job.tech_id}>There's been an error</MenuItem>
            )}
            <MenuItem value={job.tech_id}>Select a Tech</MenuItem>
            {data &&
              data.techs.map(tech => (
                <MenuItem key={tech.id} value={tech.id}>
                  {tech.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='secondary'
          className={classes.submit}
        >
          Update Job
        </Button>
      </form>
    </Layout>
  );
}

export default UpdateJob;

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '100%',
    margin: '0 auto',
    height: '600px'
  },
  formControl: {
    margin: '20px auto 20px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
