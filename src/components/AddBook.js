import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap'; 
import { getCategories } from '../constants/actions';
import Header from './Header';

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

  componentDidMount() {
    this.props.getCategories();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getCategories();
    }
  }

  render() {
    return (
      <div className="home">
      <Header />
      <div className="container">
    <Form>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" />
        
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" name="author" placeholder="Enter author name" />
        <Form.Label>Synopsis</Form.Label>
        <Form.Control as="textarea" name="synopsis" rows="3" placeholder="Synopsis" />
        <Form.Label>Choose a category...</Form.Label>
        <Form.Control as="select">
         {this.props.categories.map(category => (
            <option key={category.url}>{category.name}</option>
         ))}
          
          
        </Form.Control>
        <Form.Check type="checkbox" name="read" label="Read" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    )
    
  }
}

export const mapStateToProps = ({ books }) => ({
  categories: books.categories,
});

export default connect(
  mapStateToProps,
  { getCategories }
)(AddBook);
