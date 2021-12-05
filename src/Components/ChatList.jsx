import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {initialChats} from "../Components"



export const ChatList = (props) => {
  
 
 
  return(
    
    <div className="manu-chat">
      <List sx={{ width: '100%', maxWidth: 360, minHeight: "90vh", bgcolor: 'background.paper' }}>
        {Object.keys(initialChats).map((id) => {
          return (
            <ListItem
              key={id}
              disableGutters
              secondaryAction={
                <IconButton>
                  <CommentIcon />
                </IconButton>
              }
            >
            <ListItemText primary={id} />
          </ListItem>)
        })}
    </List>
  </div>
  )
}
 

