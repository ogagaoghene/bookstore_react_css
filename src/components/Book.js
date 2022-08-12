import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="bookCard">
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <button type="button" className="removeBttn">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
