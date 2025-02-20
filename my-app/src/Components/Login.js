import React , { useState} from 'react'
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { Avatar, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [userDetails, setUserDetails] = useState({
    userName :'',
    password:''
  })
// const [isAuthenticate,setIsAuthenticate] = useState('false')

let navigate = useNavigate()
  const handleChange = (e)=>{
    const newUserDetails = {...userDetails, [e.target.name]:e.target.value}
    setUserDetails(newUserDetails)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log( userDetails)
    if (userDetails.userName !=="" && userDetails.password!==""){
      // setIsAuthenticate(true)
      navigate('/dashboard')
    }

  }

    const paperStyle={
        padding:'20',height:'90vh',width:'30%',margin:'50px auto 10px'
    }
    const avatarStyle={
        backgroundColor:'#28bfdd',
          }
    const textFieldStyle={
width:'80%',
padding:"5px",
margin:"5px"
    }
  return (
    <Grid>
        <Paper style={paperStyle} elevation={10}>

            <Grid align='center'   >

            <Avatar style={avatarStyle} ><LockIcon/></Avatar>

        <h2>Sign in</h2>
        </Grid>
        <TextField
        label='Username'
        placeholder='Enter Username'
        required
        style={textFieldStyle}
        onChange={handleChange}
        name='userName'
        value={userDetails.userName}
        />
         <TextField
        label='Password'
        name='password'
        placeholder='Enter Password'
        type='password'
        required
        style={textFieldStyle}
        onChange={handleChange}
        value={userDetails.password}




        />

        <FormControlLabel control={<Checkbox  />} 
        style={textFieldStyle}
        
        label="Remember me" />
       <Button
       type='submit'
       variant='contained'   
       style={textFieldStyle}
       onClick={handleSubmit}

       
>SIGN IN
       </Button>
       <br></br>
<Typography >
       <Link href="#" underline="hover">
       Forgot Password ?
      </Link>
      </Typography>
      <Typography
      
      >Do you have an account ?
      <Link href="#" underline="hover">
       Register
      </Link>
      </Typography>


        </Paper>
       
        
        
        
        </Grid>
  )
}

