import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../Css files/Model.css'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="modal-bg"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          
        <span>Name  <input type="text" name="feedback-text" id="feedback-text" className="feedback-box"/></span><br/><br/>
        <span>E-mail <input type="text" name="feedback-email" id="feedback-email"  className="feedback-box"/></span><br/><br/>
        <span>Write your feedback here.<br/><textarea className="feedback-area"/></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
     );
  }
  
  function Feedback() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Feedback
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
export default Feedback;