import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';


export const ChatList = () => {
  const chatList = [
     {name: 'Friend', chat: [], id: 1},
     {name: 'Family', chat: [], id: 2},
     {name: 'Job', chat: [],id: 3 },
     {name: 'BOT', chat: [], id: 4}
  ];

  

  console.log()

  return(
    
    <div className="manu-chat">
      <List sx={{ width: '100%', maxWidth: 360, minHeight: "90vh", bgcolor: 'background.paper' }}>
        {chatList.map((item) => {
            return (<ListItem
            key={item.id}
            disableGutters
            secondaryAction={
              <IconButton>
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item.name} />
          </ListItem>)
        })}
    </List>
  </div>
  )
}
 

{/* <button key={list.id}>{list.name}</button> */}