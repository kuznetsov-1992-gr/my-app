import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';


export const ChatList = () => {
  const chatList = [
    {name: 'Friend', id: 'fd1' },
    {name: 'Family', id: 'fy1'},
    {name: 'Job', id: 'jb1'},
    {name: 'BOT', id: 'bot-context'}
  ];

  

  console.log()

  return(
    
    <div className="manu-chat">
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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