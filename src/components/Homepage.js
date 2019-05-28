import React, { Component } from 'react';
import Header from './Header';
class Homepage extends Component {
  render () {
  return (
  <div className="home">
  <Header />
  <div className="container">
       
       <h3>Welcome to bookworm</h3>
       <p>
           Your favourite tool to track books you've read.
       </p>
   </div>
   </div>
   )}
}

export default Homepage;
