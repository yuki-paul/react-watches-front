import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

function Register() {
  
  const theme = createTheme();
  const [userName, setuserName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setemail] = useState("")
  const [password, setPassword ] = useState("")
  const navigate = useNavigate();





  function handleSubmit(event){
    //stops page from reloading when login is clicked 
    event.preventDefault();
    const data ={ userName, phoneNumber, email, password}
    //not single quote its the symbol on tilde button
    axios.post(`http://localhost:9901/Register`,data).
    //then and catch is try catch exception handling 
    then((res) => {
      console.log(res.data);
      navigate("/Login");
    }).catch((err) => {
      console.log(err)}
      )}


    
  return (
    <div>
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register 
          </Typography>
          <Box component="form"   onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* first name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="user name"
              name="user_name"
              onChange={(e) => setuserName(e.target.value)}
              autoFocus
            />
            {/* last name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone_number"
              label="Phone number"
              name="Phone_number"
              type= "number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              type="email"
              onChange={(e) => setemail(e.target.value)}
            />



            {/*enter password row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="enter Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            {/*enter password row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Re-enter Password"
              type="password"
              id="password"
              autoComplete="current-password"  
            />



            <Button
            type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid  item>
                <Link href="/Login" variant="body2">
                  {"If you have account ? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    
  );
}

export default Register;