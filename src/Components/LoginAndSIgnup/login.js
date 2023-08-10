import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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

function Login() {
  
  const theme = createTheme();
  const navigate = useNavigate();

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const [error, seterror] = useState(false)


  function handleSubmit(event){
    //stops page from reloading when login is clicked 
    event.preventDefault();
    const body ={email, password}
    //not single quote its the symbol on tilde button
    axios.post(`http://localhost:9901/Login`, body).
    //then and catch is try catch exception handling 
    then((res) => {
      console.log(res.data);
      localStorage.setItem("userid", res.data?.userId);
      localStorage.setItem("role", res.data?.roleFlag);
      localStorage.setItem("condition", true);
      localStorage.setItem("username", res.data?.userName);
      getCartId();
      if(res.data.roleFlag === 1){
        navigate("/Admin");
      }
      else {
        navigate("/GetAllProducts");
      }
    }).catch((err) => {
      seterror(true)
      console.log(err)}
      )}
      

      // when user enters we are getting his cart id too
      const getCartId = () => {
        axios.get(`http://localhost:9901/GetCartId/${localStorage.getItem("userid")}`).
        then((res) => {
            localStorage.setItem("cartid", res.data)
        }).catch(err => console.log(err))
      }

    
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <Typography>
              {error === true ? "Bad Credentails" : null}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid  item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default Login;