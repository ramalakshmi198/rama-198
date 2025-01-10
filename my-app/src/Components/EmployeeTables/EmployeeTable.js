import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Rating from '@mui/material/Rating';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import StarIcon from '@mui/icons-material/Star';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';


const Url="https://hub.dummyapis.com/employee?noofRecords=<pageLength>&idStarts=<idStart>"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function EmployeeTable() {
  const [posts, setPosts] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [rating, setRating] = React.useState(false);
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

      const [isLoading, setIsLoading] = useState(false);
    
       const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setRating(true)
        setOpen(false);
      };
      const handleRatingClose = () => {
        setValue(2)
        setRating(false)
      };

   useEffect(() => {
     fetch(Url)

         .then((res) => res.json())

         .then((data) => {
          setIsLoading(false)

            setPosts(data);
          
            data.map((d)=>(
              (d)
              )
            )

         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   console.log("HELLO::",posts);

  return (
        

    <TableContainer component={Paper}>

           <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow> 

 <TableCell  align="right">Employee ID</TableCell>

<TableCell  align="right">firstName</TableCell>
            <TableCell align="right">Email ID</TableCell>
            <TableCell align="right">LastName</TableCell>
            
           
            <TableCell/>


          </TableRow>

        </TableHead>
        {isLoading && <p>Loading...</p>}
        <TableBody>
        {posts.map((row) => (

            <TableRow
              key={row.id}
            >
             
             
          <TableCell align="right" >
                {row.id}
              </TableCell>
             
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell>
              <Button variant="outlined" onClick={handleClickOpen}>
      details
      </Button>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2,color:"blue" }} id="customized-dialog-title">
        Employee Details 
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Age</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

            >
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.contactNumber}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <BootstrapDialog
        onClose={handleRatingClose}
        aria-labelledby="customized-dialog-title"
        open={rating}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Please Rate
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleRatingClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ m: 0, p: 2,width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
        </BootstrapDialog>

              </TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>
    </TableContainer>
  );
}
