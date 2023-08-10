import React, { useState, useEffect } from "react";
import { styled, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Myorder = () => {

    const [myOrders, setmyOrders] = useState([]);
  const userid = localStorage.getItem("userid");
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    width: 200,
    height: 200,
  });


  useEffect(() => {
    axios.get(`http://localhost:9901/GetOrderByUser/${userid}`)
    .then((res) => {
        setmyOrders(res.data)
    }).catch(err => console.log(err))
  }, [])
  


  return (
    <div>
        <div>
      <Paper
        elevation={5}
        sx={{
          p: 1,
          margin: "auto",
          my: 2,
          width: "maxWidth",
          mx: 2,
          marginLeft: 4.5,
        }}
      >
        {myOrders.length !== 0 ? (
          <>
            <Typography variant="h4"> My Orders </Typography>
            <br />
            <Typography variant="h6" sx={{ textAlign: "end" }}>
              Price
            </Typography>
            <hr />
            <br />
            <Grid spacing={2}>
              {myOrders.map((items, index) => {
                return (
                  <>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Grid item key={index}>
                          <Img
                            alt="product"
                            src={items.productDetails?.productImage}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={8} sm container>
                        <Grid item container sm direction="column" spacing={1}>
                            <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Order ID : {items.orderId}
                            </Typography>
                            </Grid>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {items.productDetails?.productName}
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Quantity : {items.quantity}
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Order Status : {items.status}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" component="div">
                          ₹ {parseFloat(items.totalAmount).toFixed(2)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr />
                  </>
                );
              })}
            </Grid>
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            You have zero orders, Go here orde something.
            <Link to="/GetAllProducts"> Watches.com </Link>
          </Typography>
        )}
      </Paper>
    </div>
    </div>
  )
}

export default Myorder;