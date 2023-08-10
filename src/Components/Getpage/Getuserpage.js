import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Grid, Typography, Paper, Button, ButtonBase,styled } from "@mui/material";

const Getuserpage = () => {


    const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");


  const Img = styled("img")({
    margin: "auto",
    display: "block",
    width: 200,
    height: 200,
  });


  useEffect(() => {
    axios.get(`http://localhost:9901/GetAllProducts`).then((res) => {
        setproducts(res.data)
    }).catch(err => console.log(err))
  }, [])


  const condition = localStorage.getItem("condition");
  const AddToCart = (pid) => {
    if (condition === null) {
      navigate("/login");
    } else {
      const cid = localStorage.getItem("cartid");
      axios.put(`http://localhost:9901/AddToCart/${pid}/${cid}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const buyNow = (pid) => {
    if (condition === null) {
      navigate("/login");
    } else {
      navigate(`/checkout/${pid}`);
    }
  };
  



  return (
    <div>
        <Grid container spacing={2}>
        {products.map((product, index) => {
          return (
            <>
              <Paper
                elevation={5}
                sx={{
                  p: 1,
                  margin: "auto",
                  flexGrow: 3,
                  my: 2,
                  width: 800,
                  mx: 2,
                  marginLeft: 4.5,
                }}
              >
                <Grid container spacing={2}>
                  <>
                    <Grid item>
                      <ButtonBase>
                        <Grid item key={index}>
                          <Img alt="product" src={product.productImage} />
                        </Grid>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={8} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.productName}
                          </Typography>
                          {/* <Typography variant="h6" gutterBottom>
                            {product.productCategory?.categoryName}
                          </Typography> */}
                          <Grid item>
                            <Typography variant="h6" color="green">
                              ₹ {product.productPrice}
                            </Typography>
                          </Grid>
                          <br />
                          {role !== "1" ? (
                            <Grid container spacing={2}>
                              <Grid item>
                                <Typography
                                  component="Button"
                                  sx={{
                                    cursor: "pointer",
                                    paddingRight: 2,
                                    borderRadius: "10px",
                                    backgroundColor: "purple",
                                    color:"white"

                                  }}
                                  color="black"
                                  variant="h6"
                                  onClick={() => AddToCart(product.productId)}
                                >
                                  Add to Cart
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  component="Button"
                                  sx={{
                                    cursor: "pointer",
                                    paddingRight: 5,
                                    borderRadius: "10px",
                                    backgroundColor: "blue",
                                    color:"white"
                                  }}
                                  color="black"
                                  variant="h6"
                                  onClick={() => buyNow(product.productId)}
                                >
                                  Buy Now
                                </Typography>
                              </Grid>
                            </Grid>
                          ) : null}
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                </Grid>
              </Paper>
            </>
          );
        })}
      </Grid>

    </div>
  )
}

export default Getuserpage