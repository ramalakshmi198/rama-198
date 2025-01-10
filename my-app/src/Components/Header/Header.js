import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip from '@mui/material/Tooltip';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';




export default function Header() {
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          


        <Typography
          sx={{ flex: '1 1 1%'}}
          variant="h6"
          id="tableTitle"
          component="div"
        >
           Employees DashBoard
          </Typography>
          <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
          <Button color="inherit"
          
          onClick={handleClickOpen}>
         
            View Subscription</Button>

        </Toolbar>
        <Dialog onClose={handleClose} open={open}>
      <DialogContent > Temporarily under service</DialogContent>
      <Button   
      variant="text"
          
          onClick={handleClose}>
         
           OK</Button>
    
      </Dialog>
      </AppBar>
    </Box>
  );
}
