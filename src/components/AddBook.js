import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap'; 
import { getCategories, addBook } from '../constants/actions';
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

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }; 

  handleSubmit = (event) => {
    event.preventDefault();
    const category = event.target.options.value;
    const {
      author,
      title,
      synopsis,
      read,
    } = this.state;
    const data = {
      title: title,
      author: author,
      synopsis: synopsis,
      category: category,
     read: read
    }
    this.props.addBook(data);
    console.log(data);
  }

  render() {
    return (
      <div className="home">
      <Header />
      <div className="container">
    <Form onSubmit={this.handleSubmit}>
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          name="title" 
          placeholder="Enter the title"
          onChange={this.handleInputChange} />
        
        <Form.Label>Author</Form.Label>
        <Form.Control 
          type="text" 
          name="author" 
          placeholder="Enter author name"
          onChange={this.handleInputChange} />
        <Form.Label>Synopsis</Form.Label>
        <Form.Control 
          as="textarea" 
          name="synopsis" 
          rows="3" 
          placeholder="Synopsis"
          onChange={this.handleInputChange} />
        <Form.Label>Choose a category...</Form.Label>
        <Form.Control as="select" name="options">
         {this.props.categories.map(category => (
            <option key={category.url} value={category.name}
            onChange={this.handleInputChange} >{category.name}</option>
         ))}
          
          
        </Form.Control>
        <Form.Check type="checkbox" name="read" label="Read" onChange={this.handleInputChange}/>
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
  { getCategories, addBook }
)(AddBook);
