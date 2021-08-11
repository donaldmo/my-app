import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ChatIcon from '@material-ui/icons/Chat';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '32px'
  },
  item: {
    marginBottom: '12px'
  },
  icon: {
    paddingLeft: '12px'
  }

}));

export default function MembersList({members}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Typography>
        This is a list of workspace students
      </Typography>

      <List dense className={classes.root}>
        {members && members.map((member, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem key={member._id} button className={classes.item}>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={member.userName} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="remove" className={classes.icon}>
                  <ChatIcon />
                </IconButton>

                <IconButton edge="end" aria-label="remove" className={classes.icon}>
                  <VideoCallIcon />
                </IconButton>

                <IconButton edge="end" aria-label="contact" className={classes.icon}>
                  <VisibilityOffIcon />
                </IconButton>

                <IconButton edge="end" aria-label="contact" className={classes.icon}>
                  <DeleteOutlineIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}