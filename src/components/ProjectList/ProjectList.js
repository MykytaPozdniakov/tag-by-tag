import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ProjectList = ({ projects }) => {
  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <ListItemText
            primary={project.name}
            secondary={project.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;