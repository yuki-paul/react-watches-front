import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import EventIcon from '@mui/icons-material/Event';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { ProductionQuantityLimitsTwoTone } from '@mui/icons-material';




const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {

  const categories = [
      { id: 'Coupon List', icon: <DnsRoundedIcon />, onclick : (e) => CouponList(e) },
      { id: 'Product list', icon: <PermMediaOutlinedIcon />, onclick : (e) => ProductList(e) },
      
      { id : 'Log out', icon :<LogoutIcon/>, onclick : (e) => Logout(e) }
];
const navigate = useNavigate();

// { id : 'Category List', icon :<CategoryIcon/> },
// { id: 'Event list', icon: <EventIcon /> },

const ProductList = () =>{

  navigate("/ListOfProduct")
}

const CouponList = () =>{
  navigate("/Listofcoupon")
}

const Logout = () =>{
  localStorage.clear();
  navigate("/Login")
}


  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Admin List
        </ListItem>
          <Box sx={{ bgcolor: 'black' }}>
            {categories.map((item, index) => (
              // onclick is given here and above id : pair onclick is given 
              <ListItemButton onClick={item.onclick}>
                  <ListItem disablePadding key={index} >
                    <ListItemIcon sx={{color:"white"}}> {item.icon} </ListItemIcon>
                    <ListItemText sx={{color:"white"}}>{item.id}</ListItemText>
                  </ListItem>
              </ListItemButton>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
      </List>
    </Drawer>
  );
}