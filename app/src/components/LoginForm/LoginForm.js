/**
 * NPM import
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
/**
 * Local import
 */


/**
 * Code
 */

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class InputAdornments extends React.Component {
   state = {
     password: '',
     showPassword: false,
   };

   handleChange = prop => (event) => {
     this.setState({ [prop]: event.target.value });
   };

   handleMouseDownPassword = (event) => {
     event.preventDefault();
   };

   handleClickShowPassword = () => {
     this.setState({ showPassword: !this.state.showPassword });
   };

   render() {
     const { classes } = this.props;

     return (
       <div id="login-form">
         <Grid id="usr"container spacing={8} alignItems="flex-end">
           <Grid item>
             <AccountCircle />
           </Grid>
           <Grid item>
             <TextField id="input-with-icon-grid" label="Username" />
           </Grid>
         </Grid>
         <FormControl className={classNames(classes.textField)}>
           <InputLabel htmlFor="adornment-password">Password</InputLabel>
           <Input
             id="adornment-password"
             type={this.state.showPassword ? 'text' : 'password'}
             value={this.state.password}
             onChange={this.handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="Toggle password visibility"
                   onClick={this.handleClickShowPassword}
                   onMouseDown={this.handleMouseDownPassword}
                 >
                   {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
           />
         </FormControl>
       </div>
     );
   }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * Export
 */

const LoginForm = withStyles(styles)(InputAdornments);
export default LoginForm;
