import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';


import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Started', 'send Email', 'Draft'];

export const Sidebar = () => {

    const {sidemenuOpen, closeSideMenu} = useContext(UIContext)
  return (
    <Drawer
      anchor='left'
      open={ sidemenuOpen }
      onClose={closeSideMenu}
       
    > 
    <Box sx={{width: 150}}
        >


    <Box sx={{padding: '5px 10px'}} 
      onClick={ closeSideMenu }
    >
       <Typography variant='h4'> Menú </Typography>
    </Box>
        <Divider />
      <List>
        {
          menuItems.map( (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                { index % 2 ? <MailOutlineIcon /> : <InboxIcon /> }
              </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
          ) )
        }
        </List>
      </Box>
    </Drawer>
  )
}
