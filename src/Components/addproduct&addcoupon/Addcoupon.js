import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { MenuItem } from '@mui/material';



function Addcoupon() {
  
  const theme = createTheme();
  const [couponCode, setcouponCode] = useState("")
  const [eventId, seteventId] = useState("")
  const [ExpireDate, setexpireDate] = useState("")
  const [couponDiscount, setcouponDiscount] = useState("")
  const navigate = useNavigate();

  const [deleteError , setdeleteError] = useState("")

  const comparingDate = (endDate) =>{
    if(dayjs(endDate).isBefore(dayjs())){
      setdeleteError(" invalid date. date Error!!!!!");
      console.log(deleteError);
      return false;
    }
    return true;
  }


  function handleSubmit(event){
    //stops page from reloading when login is clicked 
    event.preventDefault();
    var expireDate = dayjs(ExpireDate).format("MM-DD-YYYY")
    //not single quote its the symbol on tilde button
    if (comparingDate(expireDate)){
      const data ={ couponCode,eventId,expireDate,couponDiscount}
    axios.post(`http://localhost:9901/Addcoupon`,data).
    //then and catch is try catch exception handling 
    then((res) => {
      console.log(res.data);
      navigate("/Admin");
    }).catch((err) => {
      console.log(err)}
      )}}
    
      const [events, setevents] = useState([])
      useEffect(() => {
        axios.get(`http://localhost:9901/getallevent`).then((res) => {
          setevents(res.data)
        }).catch(err => console.log(err))
      }, [])
      

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
            Add coupon 
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* coupon id */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="coupon_code"
              label="Coupon code"
              name="coupon_code"
              onChange={(e) => setcouponCode(e.target.value)}
              autoFocus
            />
            {/* Product name */}
            <TextField
              select
              margin="normal"
              required
              fullWidth
              type="number"
              id="Event_id"
              label="Event id"
              name="Event_id"
              value={eventId}
              onChange={(e) => seteventId(e.target.value)}
            >
              {
                events.map((event) => (
                  <MenuItem value={event.eventId} > {event.eventId} {event.eventName} </MenuItem>
                ))
              }
              </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              id="coupon discount"
              label="coupon discount"
              name="coupon discount"
              onChange={(e) => setcouponDiscount(e.target.value)}
            />
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
                      value={ExpireDate}
                      onChange={(date) => setexpireDate(date)}
                      renderInput={(params) => (
                        <TextField {...params} required />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormHelperText sx={{fontSize:"25px"}} error >{deleteError === null ? null : deleteError}</FormHelperText>
      
      
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add coupon
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

export default Addcoupon;