import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LoginForm from '../LoginForm/LoginForm';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Log in
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          
        </Popover>
      </div>
    );
  }
}