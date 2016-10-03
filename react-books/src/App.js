import React, { Component } from 'react';
import './App.css';

import BOOKS from './books';
import EditableText from './editable-text';

class App extends Component {
  render() {
    return (
      <div style={styles.mainDiv}>


        <h1>Los 10 libros más leídos de la historia</h1>
        <h2>Libros</h2>
        <ul>
          {BOOKS.map((book, index) =>
            <li key={index}>{book.title}</li>
          )}
        </ul>


        <hr style={styles.hr} />

        <EditableText defaultText="un texto" />


      </div>
    );
  }
}

export default App;


const styles = {
  mainDiv: {
    marginLeft: 15,
  },
  hr: {
    marginTop: 80,
    marginBottom: 80,
  },
};
