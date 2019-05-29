import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, addCategory } from '../constants/actions';
import { Form, Button, ListGroup, Alert } from 'react-bootstrap'; 
import Header from './Header';

class AddCategory extends Component {
  constructor(props){
  super(props);
  this.state = {
      category: '',
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
  handleSubmit = (e) => {
    const { categories } = this.props;
    e.preventDefault();
    const newCategory = e.target.category.value;
    if (categories.includes(newCategory)) {
        alert('inv');
    };
    const data = {
      name: newCategory
    };
    this.props.addCategory(data);
  }

  handleDelete = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  }

  render() {
    return (
    <div className="home">
    <Header />
    <div className="container">
    <div>
        <h6>Current categories</h6>
        <ListGroup>
        {this.props.categories.map(category => (
            <ListGroup.Item key={category.url}>
              {category.name}
              {/* <button className="delete" value={category.url}
                onClick={this.handleDelete}>
              Delete
              </button>  */}
            </ListGroup.Item>
         ))}
        </ListGroup>
    </div>
    <Form onSubmit={this.handleSubmit}>
        <Form.Label>Add a new book category</Form.Label>
        <Form.Control type="text" name="category" placeholder="Enter the category name" />

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
  { getCategories, addCategory }
)(AddCategory);
