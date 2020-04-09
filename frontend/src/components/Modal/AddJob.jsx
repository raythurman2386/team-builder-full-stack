import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SpringModal from '../../utils/SpringModal';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_JOB, GET_JOBS, GET_TECHS } from '../../queries';

function AddJob({ open, handleOpen }) {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_TECHS);
  const [addJob] = useMutation(ADD_JOB, {
    update(cache, { data: { addJob } }) {
      const { jobs } = cache.readQuery({ query: GET_JOBS });
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: jobs.concat([addJob]) }
      });
    }
  });

  const [job, setJob] = useState({
    machine: '',
    complaint: '',
    tech: ''
  });

  const handleChange = e => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addJob({
      variables: {
        machine: job.machine,
        complaint: job.complaint,
        tech: job.tech
      }
    })
      .then(res =>
        setJob({
          machine: '',
          complaint: '',
          tech: ''
        })
      )
      .catch(err => alert(err.message));

    handleOpen();
  };

  return (
    <div>
      <IconButton color='inherit' onClick={handleOpen}>
        <Typography className={classes.title} color='inherit' noWrap>
          Add Job
        </Typography>
        <AddCircleOutlineIcon color='secondary' />
      </IconButton>
      <SpringModal open={open} handleOpen={handleOpen}>
        <form className={classes.paper} onSubmit={handleSubmit}>
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
              value={job.tech}
              name='tech'
              onChange={e => handleChange(e)}
            >
              {loading && <MenuItem value={job.tech}>Loading . . .</MenuItem>}
              {error && (
                <MenuItem value={job.tech}>There's been an error</MenuItem>
              )}
              <MenuItem value={job.tech}>Select a Tech</MenuItem>
              {data &&
                data.techs.map(tech => (
                  <MenuItem key={tech.id} value={tech.name}>
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
            Add Job
          </Button>
        </form>
      </SpringModal>
    </div>
  );
}

export default AddJob;

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '800px',
    height: '600px'
  },
  formControl: {
    margin: '20px auto 20px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
