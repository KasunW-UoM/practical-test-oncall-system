import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from '../cart/cart-helper'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import logo from '../assets/images/logo.png';

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      },
      logo: {
        maxWidth: 60,
        marginRight: '10px'
      }
    })
);

const Menu = withRouter(({history}) => {

  const classes = useStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="On Call System Logo" className={classes.logo} />
          <div>
            <Link to="/">
              <IconButton aria-label="Home" style={isActive(history, "/")}>
                <HomeIcon/>
              </IconButton>
            </Link>
            <Link to="/shops/all">
              <Button style={isActive(history, "/shops/all")}>Services</Button>
            </Link>
            <Link to="/cart">
              <Button style={isActive(history, "/cart")}>
                Cart
                <Badge color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
                  <CartIcon />
                </Badge>
              </Button>
            </Link>
          </div>
          <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
            {
              auth.isAuthenticated() && (<span>

          {(<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}

                <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>Profile</Button>
          </Link>

          <Button color="inherit" onClick={() => {
            auth.signout(() => history.push('/'))
          }}>Sign out</Button>

        </span>)
            }
      </span></div>
        </Toolbar>
      </AppBar>
  )
})

export default Menu
