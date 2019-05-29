import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddCategory from './AddCategory';
import { getCategories, getBooks } from '../constants/actions';
import { Card, Button } from 'react-bootstrap';

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

  render () {
  return (
  <div className="home">
  <Header />
  <div className="container">
       
       <h3>Welcome to bookworm</h3>
       <p>
           Your favourite tool to track books you've read.
       </p>
       <div>
       
        {this.props.books.map(book => 
          (<Card className="text-center">
          <Card.Header>{book.title}</Card.Header>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.synopsis}
                </Card.Text>
                <Button variant="primary" href={book.url}> huh</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{book.category}</Card.Footer> 
            </Card>))}
        
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
  { getCategories, getBooks },
)(Homepage);
