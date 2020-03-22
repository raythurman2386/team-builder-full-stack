import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

// Apollo Deps
import { useQuery } from '@apollo/react-hooks';
import { GET_TECHS } from '../../queries';

const MainListItems = () => {
  const { loading, error, data } = useQuery(GET_TECHS);
  // const [open, handleOpen] = useToggle()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.techs &&
        data.techs.map(tech => (
          <Link to={`/dashboard/tech/${tech.id}`}>
            <ListItem key={tech.id} button align='center'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={tech.name} />
            </ListItem>
          </Link>
        ))}
      {/* <AddTech open={open} handleOpen={handleOpen} /> */}
    </div>
  );
};

export default MainListItems;
