import React from 'react';

const Book = ({ book }) => {

    const author = book.volumeInfo.authors[0];
    const title = book.volumeInfo.title;
    const description = book.volumeInfo.description;

    return(
        <div className="books">
            <div className="book">
                <div className="book__info">
                    <p className="author">{author}</p>
                    <p className="title">{title}</p>
                </div>
                <div className="book__description">
                    <p className="description">{description}</p>
                </div>
         </div>
    </div>
    )
}

export default Book;