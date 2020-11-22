import React from 'react';

const Book = ({ book }) => {

    const author = book.volumeInfo.authors[0];
    const title = book.volumeInfo.title;
    return(
        <div className="book">
        <p>{author}</p>
        <p>{title}</p>
    </div>
    )
}

export default Book;