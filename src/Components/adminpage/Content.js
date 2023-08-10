import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Addproduct from '../addproduct&addcoupon/Addproduct';
import Addcoupon from '../addproduct&addcoupon/Addcoupon';

export default function Content() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >

        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Add product here
      </Typography>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            {/* <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid> */}
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button href="/Addproduct" variant="contained" sx={{ mr: 1 }}>
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Add coupon here
      </Typography>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button href="/Addcoupon" variant="contained" sx={{ mr: 1 }}>
                Add coupon
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
      

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Add Event here
      </Typography>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button href="/Addevent" variant="contained" sx={{ mr: 1 }}>
                Add Event
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
      

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Add product category here
      </Typography>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
            </Grid>
            <Grid item>
              <Button href="/Addproductcategory" variant="contained" sx={{ mr: 1 }}>
                Add product_category
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
      
       

      
    </Paper>
  );
}