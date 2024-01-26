import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    };
  return ( 
    <div className="header">
       <Link to="/">
       <img
          src="https://www.istockphoto.com/vector/shopping-cart-icon-with-editable-stroke-and-pixel-perfect-gm1185675328-334239637"
          alt=""
          className="header_logo"
        />
       </Link>
      
        <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
       
          <Link to={!user && "/login"}>
          <div  onClick={handleAuthentication} className="header_option">
            <span className="header_option_line_one">
              Hello {!user ?"Guest":user.email}
            </span>
            <span className="header_option_line_two">
              {user ?"Sign out":"Sign In"}
            </span>
          </div>
          </Link>
          
        <Link to="/orders">
        <div className="header_option">
            <span className="header_option_line_one">Returns</span>
            <span className="header_option_line_two">& Orders</span>
          </div>
        </Link>
         
       

        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
        
        <Link to="/checkout">
        <div className="header_option_basket">
            <ShoppingBasketIcon/>
            <span className="header_option_basket_count header_option_line_two">
            {basket?.length}</span>
        </div>
        </Link>
        
    </div>
    </div>
  )
}

export default Header
