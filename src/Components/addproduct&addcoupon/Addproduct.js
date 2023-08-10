// import React from 'react';
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
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {FileUploader} from "react-drag-drop-files";

function Addproduct() {
  const Navigate = useNavigate();

  const {productId} = useParams()

  useEffect(() => {

    axios.get(`http://localhost:9901/Get/${productId}`).then((res) =>{
      setproductName(res.data?.productName)
      setproductPrice(res.data?.productPrice)
      setproductDescription(res.data?.productDescription)
    })
  }, [])
  
  
  const [productName, setproductName] = useState("")
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productCategoryId, setproductCategoryId] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    setFile(file);
  };


//the actual image convertion to string happens here
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const fileTypes = ["GIF", "JPEG", "JPG", "PNG"]
 

// sending files using axios api to backend 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const base64 = await convertBase64(file);
    const body = {
      productCategoryId,
      productDescription,
      productName,
      productPrice,
      productImage : base64,
    };
    axios.post(`http://localhost:9901/Addproduct`,body).
        then((res) => {
        console.log(res.data);
        Navigate('/Admin')
      })
      .catch((err) => console.log(err));
  };


  const theme = createTheme();



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
            Add product 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* Product id */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="Product_name"
              label="Product name"
              name="Product_name"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
              autoFocus
            />
            {/* Product name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="Product_price"
              label="Product price"
              name="Product_price"
              type="number"
              value={productPrice}
              onChange={(e) => setproductPrice(e.target.value)}
              autoFocus
            />
            {/*enter Description row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="Description"
              label="Product Description"
              type="text"
              value={productDescription}
              onChange={(e) => setproductDescription(e.target.value)}
              id="Description"
            />


              <TextField
              margin="normal"
              required
              fullWidth
              name="product_category"
              label="Product Category"
              type="text"
              value={productCategoryId}
              onChange={(e) => setproductCategoryId(e.target.value)}
              id="product_category"
            />
              {/* getting image input here */}
              <span>
                <h3> Add your Product Image </h3>
              </span>
              <FileUploader
                hoverTitle="Drop Here"
                label="product "
                handleChange={handleFileChange}
                name="file"
                types={fileTypes}
              /> 


        {/* <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
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

export default Addproduct;