import React from 'react';
import './navbarbelt.css';
import amazonLogo from '../../../assets/amazon logo.png';
import india from '../../../assets/india logo.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
const Navbarbelt = () => {
    return (
        <div className='navbarbelt'>
            <div className='leftNavbelt'>
                <Link to={'/'} className='leftNavbarbeltLogo'>
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='Amazon Logo' />
                    <span className='navbar_inLogo'>.in</span>
                </Link>

                <div className='navbarbeltLocation'>
                    <LocationOnOutlinedIcon className='navbarbeltLocationImgIcon' sx={{ fontSize: "22px" }} />
                    <div className="navbarbeltLocationPlace">
                        <div className="navbarbeltLocationTop">Delivering_to_Pune_411032</div>
                        <div className="navbarbeltLocationBottom">Update Location</div>
                    </div>
                </div>
            </div>

            <div className='navbarbeltSearchBox'>
               <div className="navbarbeltSearchDiv">
               <div className="navbarbeltSearchboxAll">
               <div className="navbarbeltSearchboxAllText">All</div>
               <ArrowDropDownOutlinedIcon sx={{fontSize:"20px"}}/>
               </div>
               <input type='text' className='navbarbeltInputSearchBox' placeholder='Search Amazon.in'/>
               <div className='searchIconNavbarbelt'>
                <SearchIcon sx={{fontSize:"26px"}} className='searchIconNavbarbeltIcon'/>
               </div>
               </div>
            </div>

            <div className='rightSideNavbarbelt'>
                <div className='indianFlagCode'>
                    <img src={india} className='indiaFlag' />
                    <div className='indiaCodeNavbarBelt'>EN<ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} className='indiaCodeNavbarbeltdrop'/></div>
                </div>
               <div className="helloSignInNavbaeBelt">
<div className="helloTopNavbarBelt">Hello, User</div> 
<div className="indiaCodeNavbarBelt">Accounts & Lists</div>
   </div>
   <div className="helloSignInNavbaeBelt">
<div className="helloTopNavbarBelt">Returns</div> 
<div className="indiaCodeNavbarBelt">& Orders</div>
   </div>
   <div className="helloSignInNavbaeBelt">
<span className="cartiteumberNavbarBelt">2</span>
<div className="helloTopliavbarBelt"><ShoppingCartOutlinedIcon/> <span className="cartitle"> Cart</span></div>
</div>
   </div>
        </div>
    );
}

export default Navbarbelt;
