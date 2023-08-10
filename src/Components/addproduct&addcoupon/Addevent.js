import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { FormHelperText } from '@mui/material';


function Addevent() {
  
  const theme = createTheme();
  const [eventName, seteventName] = useState("")
  const [eventstartDate, seteventStartDate] = useState("")
  const [eventexpireDate, seteventExpireDate] = useState("")
  const navigate = useNavigate();

  const [deleteError , setdeleteError] = useState("")

  const comparingDate = (startDate,endDate) =>{
    if(dayjs(startDate).isBefore(dayjs()) || dayjs(endDate).isBefore(dayjs())){
      setdeleteError(" invalid date. date Error!!!!!");
      console.log(deleteError);
      return false;
    }
    else{
      if (dayjs(startDate).isAfter(endDate)){
        setdeleteError("End date is before Start date");
        console.log(deleteError);
        return false;
      }
    }
    return true;
  }
   
  function handleSubmit(event){
        event.preventDefault();

    //stops page from reloading when login is clicked 
    const eventStartDate = dayjs(eventstartDate).format("MM-DD-YYYY")
    const eventExpireDate = dayjs(eventexpireDate).format("MM-DD-YYYY")

    if (comparingDate(eventStartDate,eventExpireDate)){
      const data ={eventName,eventStartDate,eventExpireDate}
      //not single quote its the symbol on tilde button
      axios.post(`http://localhost:9901/Addevent`,data).
      //then and catch is try catch exception handling 
      then((res) => {
        console.log(res.data);
        navigate("/Admin");
      }).catch((err) => {
        console.log(err)})
      }
    }

  return (
    <div>
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={handleSubmit}
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
            Add Event 
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* coupon id */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="Event name"
              label="Event name"
              name="Event_name"
              value={eventName}
              onChange={(e) => seteventName(e.target.value)}
            />
            {/*enter Description row*/}
            <FormControl
                  style={{ marginTop: "0.5rem" }}
                  className="formtext"
                  fullWidth
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      inputFormat="DD/MM/YYYY"
                      label="Start Date"
                      placeholder="Coupon Start Date"
                      fullWidth
                      value={eventstartDate}
                      onChange={(date) => seteventStartDate(date)}
                      renderInput={(params) => (
                        <TextField {...params} required />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
             <FormControl
                  style={{ marginTop: "0.5rem" }}
                  className="formtext"
                  fullWidth
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      inputFormat="DD/MM/YYYY"
                      label="Expiry Date"
                      placeholder="Coupon Expiry Date"
                      fullWidth
                      value={eventexpireDate}
                      onChange={(date) => seteventExpireDate(date)}
                      renderInput={(params) => (
                        <TextField {...params} required />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormHelperText sx={{fontSize:"25px"}} error >{deleteError===null? null : deleteError}</FormHelperText>
      


             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Event
            </Button>
            <Grid container>
              <Grid  item>
                <Link href="/Admin" variant="body2">
                  {"back to Admin ? Click here"}
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

export default Addevent;