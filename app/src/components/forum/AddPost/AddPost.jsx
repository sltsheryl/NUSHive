import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const AddPost = ({ name }) => {
  const inputStyle = {
    width: "400px",
  }
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn className="me-4" onClick={toggleShow}>{name}</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <div className="flex flex-col">
              <MDBModalTitle>Add a Post</MDBModalTitle>
          
              <div class="modal-body">
                  <form>
                      <div class="form-group">
            <label style={inputStyle} for="message-text" class="col-form-label">Description</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="form-group">
            <label style={inputStyle} for="recipient-name" class="col-form-label">Tags</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
        
        </form>
                </div>
                 </div>
            </MDBModalHeader>
             

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Submit</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default AddPost;
