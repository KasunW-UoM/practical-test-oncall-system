import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import {CardMedia}  from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'
import Icon from '@material-ui/core/Icon'
import List  from '@material-ui/core/List'
import {ListItem, ListItemSecondaryAction} from '@material-ui/core/'; 
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
// import auth from '../auth/auth-helper'
import {listByShop} from '../product/api-product.js'
// import DeleteProduct from '../product/DeleteProduct'

const styles = theme => ({
  products: {
    padding: '24px'
  },
  addButton:{
    float:'right'
  },
  leftIcon: {
    marginRight: "8px"
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  subheading: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  cover: {
    width: 110,
    height: 100,
    margin: '8px'
  },
  details: {
    padding: '10px'
  },
})
class MyProducts extends Component {
  state = {
    products: []
  }

  loadProducts = () => {
    listByShop({
      shopId: this.props.shopId
    }).then((data)=>{
      if (!data.error || data.error) {
        this.setState({error: data.error})
      } else {
        this.setState({products: data})
      }
    })
  }

  componentDidMount = () => {
   this.loadProducts()
  }

  removeProduct = (product) => {
    const updatedProducts = this.state.products
    const index = updatedProducts.indexOf(product)
    updatedProducts.splice(index, 1)
    this.setState({shops: updatedProducts})
  }

  render() {
    const {classes} = this.props
    return (
      <Card className={classes.products}>
        <Typography type="title" className={classes.title}>
          Services
          <span className={classes.addButton}>
            <Link to={"/seller/"+this.props.shopId+"/products/new"}>
              <Button color="primary" variant="raised">
                <Icon className={classes.leftIcon}>add_box</Icon>  New Service
              </Button>
            </Link>
          </span>
        </Typography>
        <List dense>
        {this.state.products.map((product, i) => {
            return <span key={i}>
              <ListItem>
                <CardMedia
                  className={classes.cover}
                  image={'/api/v1/products/photo/'+product._id+"?" + new Date().getTime()}
                  title={product.name}
                />
                <div className={classes.details}>
                  <Typography type="headline" component="h2" color="primary" className={classes.productTitle}>
                    {product.name}
                  </Typography>
                  <Typography type="subheading" component="h4" className={classes.subheading}>
                    Available Services Quantity: {product.quantity} | Price: Rs. {product.price}
                  </Typography>
                </div>
                <ListItemSecondaryAction>
                  <Link to={"/seller/"+product.shop._id+"/"+product._id+"/edit"}>
                    <IconButton aria-label="Edit" color="primary">
                      <Edit/>
                    </IconButton>
                  </Link>
                  {/* <DeleteProduct
                    product={product}
                    shopId={this.props.shopId}
                    onRemove={this.removeProduct}/> */}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider/></span>})}
        </List>
      </Card>)
  }
}
MyProducts.propTypes = {
  classes: PropTypes.object.isRequired,
  shopId: PropTypes.string.isRequired
}

export default withStyles(styles)(MyProducts)
