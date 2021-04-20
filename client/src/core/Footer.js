import {Link, withRouter} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const isActive = (history, path) => {
    if (history.location.pathname === path)
        return {color: '#bef67a'}
    else
        return {color: '#ffffff'}
}

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const Footer = withRouter(({history}) => {

        const classes = useStyles();

        return (
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography>Copyright@ 2021-IT18-Stars-Faculty of IT-University of Moratuwa</Typography>
                    <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
                        <Link to="/complain">
                            <Button style={isActive(history, "/complain")}>Send Your Complains</Button>
                        </Link>
                    </span>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
)

export default Footer