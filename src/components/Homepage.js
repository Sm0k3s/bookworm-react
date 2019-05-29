import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddCategory from './AddCategory';
import { getCategories,
  getBooks, deleteBook } from '../constants/actions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Homepage extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getBooks();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getCategories();
      this.props.getBooks();
    }
  }

  handleDelete = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.props.deleteBook(value);
  }

  render () {
    const { books } = this.props;
  return (
  
  <div className="home">
  <Header />
  <div className="container">
       
       <h3>Welcome to bookworm</h3>
       <p>
           Your favourite tool to track books you've read.
       </p>
       <div className="row " style={{ display: 'flex'}}>
       
        { books.map(book => (
            <Card key={book.url} style={{ width: '33.3%', justifyContent: 'space-around'}}>
                <Card.Img variant="top" src="https://spsy6.files.wordpress.com/2015/09/bookworm.jpg" />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    {book.synopsis}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Author: {book.author}</ListGroupItem>
                    <ListGroupItem>Category: {book.category}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button>Edit</button>
                    <button value={book.url} onClick={this.handleDelete}>Delete</button>
                </Card.Body>
            </Card>
            ))
        }
        </div>
   </div>
   </div>
   )}
}

export const mapStateToProps = ({ books }) => ({
    categories: books.categories,
    books: books.books,
  });
  
export default connect(
  mapStateToProps,
  { getCategories, getBooks, deleteBook },
)(Homepage);
