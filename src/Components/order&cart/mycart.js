import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled, Grid, Paper, Typography, ButtonBase } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Mycart = () => {

    const navigate = useNavigate();


    const userid = localStorage.getItem("userid");
    const cartId = localStorage.getItem("cartid");

    const [myCartItems, setmyCartItems] = useState([]);

    const Img = styled("img")({
    margin: "auto",
    display: "block",
    width: 200,
    height: 200,
  });

  const getCart = () => {
    axios.get(`http://localhost:9901/GetByUser/${userid}`).then((res) => {
        //all the products are in productincart array
        setmyCartItems(res.data?.productsInCart);
    }).catch(err => console.log(err))
  }

    useEffect(() => {
        getCart();
    }, [])
    
    function removeFromCart(pid) {
        axios.delete(`http://localhost:9901/RemoveFromCart/${pid}/${cartId}`)
        .then((res) => {
            console.log(res.data);
            getCart();
        })
        .catch((err) => console.log(err));
  }

  const [tocheckout, settocheckout] = useState("");
  function checkout(item) {
    settocheckout(item);
    navigate(`/Checkout/${item}`);
  }



  return (
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
        {myCartItems.length !== 0 ? (
          <>
            <Typography variant="h4"> Shopping Cart </Typography>
            <br />
            <Typography variant="h6" sx={{ textAlign: "end" }}>
              Price
            </Typography>
            <hr />
            <br />
            <Grid spacing={2}>
              {myCartItems.map((items, index) => {
                return (
                  <>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase>
                          <Grid item key={index}>
                            <Img alt="product" src={items.productImage} />
                          </Grid>
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={8} sm container>
                        <Grid item container sm direction="column" spacing={1}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {items.productName}
                            </Typography>
                          </Grid>
                          <Grid item xs sm={2} md={4} lg={4}>
                            <Typography
                              component="Button"
                              variant="h6"
                              onClick={() => checkout(items.productId)}
                              sx={{
                                color: "white",
                                backgroundColor: "blue",
                                cursor: "pointer",
                                borderRadius: "7px",
                                mr: 3,
                              }}
                            >
                              Checkout
                            </Typography>
                            <Typography
                              component="Button"
                              variant="h6"
                              sx={{
                                color: "white",
                                backgroundColor: "black",
                                cursor: "pointer",
                                borderRadius: "7px",
                              }}
                              onClick={() => removeFromCart(items.productId)}
                            >
                              Delete
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="h6" component="div">
                          ₹ {items.productPrice}
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
            Cart is empty.
          </Typography>
        )}
      </Paper>

    </div>
  )
}

export default Mycart;