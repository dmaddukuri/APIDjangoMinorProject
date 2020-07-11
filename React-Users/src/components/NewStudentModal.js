import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from "./NewStudentForm";

class NewStudentModal extends Component {
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
      title = "Creating New User";

      button = (
        <Button
          color="primary"
          className="float-left"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Sign Up
        </Button>
        
      );
     
    }

    return (
      <Fragment>
        {button} 
       
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewStudentForm
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

export default NewStudentModal;
