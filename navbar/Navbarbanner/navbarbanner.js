import React from 'react';
import './navbarbanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbarbanner = () => {
    const options =[
     {"name" : "MX_player" }, {"name":"Sell"}, {"name":"Best_Sellers"}, {"name":"Today's_Deals"}, {"name":"Mobiles"}, {"name":"Electronics"}, {"name":"home.&.Kitchen"}, {"name":"Prime"}, {"name":"Customer_Service"}, {"name":"New_Releases"}, {"name":"Fashion"}, {"name":"Amazon_Pay"}, {"name":"Computers"}, {"name":"Car.&.Motorbike"}, {"name":"Sports,Fitness.&.Outdoors"}, {"name":"Books"}, {"name":"Home_Improvement"}, {"name":"Gift_Ideas"}, {"name":"Toys.&.Games"}, {"name":"Beauty.&.Personal.Care"}, {"name":"Baby"}, {"name":"Health,Household.&.Personal_Care"}, {"name":"Grocery.&.Gourmet_Foods"}, {"name":"Gift_Cart"}, {"name":"Pet_Supplies"}, {"name":"Custom_Products"}, {"name":"Vedio_Games"}, {"name":"Audible"}, {"name":"AmazonBasics"}
    ]
    return (
        <div className="navbarBanner">
            <div className="navbarBannerOptionsLeft">
                <div className="optionsNavbarBanner"> 
                    <MenuIcon sx={{ fontSize: "24px" }} />
                    <div className="alloptionsNavbarBanner">All</div>
                </div>
                {
                    options.map((item,index) => {
                        return(
                        <Link to={'/products'} className="optionsNavbarBanner" key={index}> 
                        <div className="alloptionsNavbarBanner">{item.name}</div>
                        </Link>

                        );  
                      })
                }
            </div>
            <div className="navbarBanner">
                <img className='img1'
                    src="https://m.media-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3_SWM_ShopNow._CB545049405_.jpg" 
                    alt="Shop Now" 
                />
            </div>
        </div>
    );
}

export default Navbarbanner;
