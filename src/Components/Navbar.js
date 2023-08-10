import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WatchIcon from '@mui/icons-material/Watch';
import {useNavigate} from 'react-router-dom'


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const condition = localStorage.getItem("condition")

  const logout = () => {

    localStorage.clear();
    navigate("/Login")

  }

  return (
    <AppBar  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WatchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/GetAllProducts"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Watches.com
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <MenuItem>
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/GetAllProducts"
                        sx={{ textDecoration: "none", color: "black" }}
                      >
                        Products
                      </Typography>
                    </MenuItem>
              {
                condition === "true" ?
                 <>
                  <MenuItem>
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/myCart"
                        sx={{ textDecoration: "none", color: "black" }}
                      >
                        My Cart
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/myOrders"
                        sx={{ textDecoration: "none", color: "black" }}
                      >
                        My Orders
                      </Typography>
                    </MenuItem>
                <MenuItem>
                     <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={logout}
                        sx={{ textDecoration: "none", color: "black"}}
                      >
                        Log out
                      </Typography>
                    </MenuItem>
                 </> : null
              }
            </Menu>
          </Box>
          <WatchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Watches.com
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button>
              <Typography
                        variant="caption1"
                        noWrap
                        component="a"
                        href="/GetAllProducts"
                        sx={{ my: 2, color: 'white', display: 'block',textDecoration: "none"  }}
                      >
                        Products
                      </Typography>
            </Button>
            {
              condition === "true" ? 
              <>  
                <Button>
              <Typography
                        variant="caption1"
                        noWrap
                        component="a"
                        href="/myCart"
                        sx={{ textDecoration: "none", my: 2, color: 'white', display: 'block'  }}
                      >
                        My Cart
                      </Typography>
            </Button>
            <Button>
              <Typography
                        variant="caption1"
                        noWrap
                        component="a"
                        href="/myOrders"
                        sx={{ textDecoration: "none", my: 2, color: 'white', display: 'block' }}
                      >
                        My Orders
                      </Typography>
            </Button>
             <Typography
                        variant="caption1"
                        noWrap
                        component="div"
                        onClick={logout}
                        sx={{ textDecoration: "none", color: "white", marginTop:2.75 }}
                      >
                        Log out
                      </Typography>
              </> : null
            }
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;