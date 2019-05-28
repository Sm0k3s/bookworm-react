import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'; 

class AddBook extends Component {
  constructor(props){
  super(props);
  this.state = {
      title: '',
      author: '',
      synopsis: '',
      category: '',
      read: false,
  };
  }

  render() {
    return (
      <div className="container">
    <Form>
      {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      {/* </Form.Group> */}

      {/* <Form.Group controlId="formBasicPassword"> */}
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" placeholder="Enter author name" />
        <Form.Label>Synopsis</Form.Label>
        <Form.Control as="textarea" name="synopsis" rows="3" placeholder="Synopsis" />
        <Form.Label>Category</Form.Label>
        {/* <Form.Label>State</Form.Label> */}
        <Form.Control as="select">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
        {/* <Form.Control type="text" placeholder="Enter author name" /> */}
      {/* </Form.Group> */}
      {/* <Form.Group controlId="formBasicChecbox"> */}
        <Form.Check type="checkbox" name="read" label="Read" />
      {/* </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>)
    
  }
}

export default AddBook;
