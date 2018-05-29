/**
 * NPM import
 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


/**
 * Local import
 */
import Register from '../RegisterForm';

/**
 * Code
 */

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 0;
  const left = 0;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
   state = {
     open: false,
   };

   handleOpen = () => {
     this.setState({ open: true });
   };

   handleClose = () => {
     this.setState({ open: false });
   };

   render() {
     return (
       <div>
         <Button onClick={this.handleOpen} variant="raised" color="primary" id="signIn-button">
           SignIn
         </Button>
         <Modal
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
           open={this.state.open}
           onClose={this.handleClose}
         >
           <div >
             <Register />
           </div>
         </Modal>
       </div>
     );
   }
}

SimpleModal.propTypes = {

};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;

/**
 * Export
 */
