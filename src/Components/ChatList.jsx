import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {initChat} from "../Screens/Chat"
import {Link} from "react-router-dom"
import {ROUTERS} from "../Router"




export const ChatList = (props) => {
  
 
 
  return(
    
    <div className="manu-chat">
      <List sx={{ width: '100%', maxWidth: 360, minHeight: "90vh", bgcolor: 'background.paper' }}>
        {Object.keys(initChat).map((id) => {
          return (
            <Link to={`${ROUTERS.NO_CHAT}/${id}`}>
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
          </ListItem>
          </Link>
          )
        })}
    </List>
  </div>
  )
}
 

