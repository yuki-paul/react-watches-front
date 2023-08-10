import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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

function Addproductcategory() {
  
  const theme = createTheme();
  const [productCategoryName, setproductCategoryName] = useState("")
  const [productCategoryDescription, setproductCategoryDescription] = useState("")
  const navigate = useNavigate();
   
  function handleSubmit(event){
    //stops page from reloading when login is clicked 
    event.preventDefault();
    const data ={productCategoryName,productCategoryDescription}
    //not single quote its the symbol on tilde button
    axios.post(`http://localhost:9901/Addproductcategory`,data).
    //then and catch is try catch exception handling 
    then((res) => {
      console.log(res.data);
      navigate("/Admin");
    }).catch((err) => {
      console.log(err)}
      )}

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
            Add product category
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* coupon id */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="product category name"
              label="product_category name"
              name="Product_category_name"
              value={productCategoryName}
              onChange={(e) => setproductCategoryName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="product_category_Description"
              label="product_category_Description"
              name="product_category_descripton"
              value={productCategoryDescription}
              onChange={(e) => setproductCategoryDescription(e.target.value)}
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add product category
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

export default Addproductcategory;