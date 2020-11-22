import React from 'react';

const Book = ({ book }) => {

    const author = book.volumeInfo.author;
    const title = book.volumeInfo.title;
    return(
        <div className="book">
        <p>{author}</p>
        <p>{title}</p>
    </div>
    )
}

export default Book;