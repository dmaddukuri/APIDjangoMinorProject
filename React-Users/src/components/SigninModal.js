import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SigninForm from "./SigninForm";

class SigninModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing User";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    var button1 = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Login for User";

      button = (
        <Button
          color="primary"
          className="float-left"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Sign In
        </Button>
        
      );
     
    }

    return (
      <Fragment>
        {button} 
       
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <SigninForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal> 
      </Fragment>
      
    );
  }
}

export default SigninModal;
