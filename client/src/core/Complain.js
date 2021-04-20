import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import {CardActions, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import {DialogActions, DialogContent, DialogContentText, DialogTitle} from  "@material-ui/core"
import {Link} from 'react-router-dom'
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
})

class Complain extends Component {

    state = { firstName: "", lastName: "", email: "", open: false, error: "",  note : "" };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = () => {
        const complain = {
            firstName: this.state.firstName || undefined,
            lastName: this.state.lastName || undefined,
            email: this.state.email || undefined,
            note : this.state.note || undefined
        };

        this.setState({error:"",open:true})

        // create(user).then(data => {
        //     if (data.error) this.setState({ error: data.error });
        //     else this.setState({ error: "", open: true });
        // });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            type="headline"
                            component="h2"
                            className={classes.title}
                        >
                            Your complain about us
                        </Typography>
                        <TextField
                            id="firstName"
                            label="First Name"
                            className={classes.textField}
                            value={this.state.firstName}
                            onChange={this.handleChange("firstName")}
                            margin="normal"
                        />{" "}
                        <br />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            className={classes.textField}
                            value={this.state.lastName}
                            onChange={this.handleChange("lastName")}
                            margin="normal"
                        />{" "}
                        <br />
                        <TextField
                            id="email"
                            type="email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                            margin="normal"
                        />
                        <br />
                        <br/>
                        <Typography className={classes.title}>Your Complain</Typography>
                        <TextareaAutosize
                            id="note"
                            type="text"
                            label="Note"
                            rowsMin={8}
                            className={classes.textField}
                            value={this.state.note}
                            onChange={this.handleChange("note")}
                            margin="normal"
                        />
                        <br />
                        {this.state.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>
                                    error
                                </Icon>
                                {this.state.error}
                            </Typography>
                        )}
                    </CardContent>
                    <CardActions>
                        <Button
                            color="primary"
                            raised="raised"
                            onClick={this.clickSubmit}
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>Your Complain</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We will consider your complain
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/">
                            <Button color="primary" autoFocus="autoFocus" variant="raised">
                                Back To Home
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Complain.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Complain)