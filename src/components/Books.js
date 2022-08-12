import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const [books] = useState([{ id: 1, title: 'React for Real', author: 'Ludovico Fischer' }, { id: 2, title: 'Flask Web Development', author: 'Miguel Grinberg' }]);

  return (
    <>
      {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </>
  );
};

export default Books;
