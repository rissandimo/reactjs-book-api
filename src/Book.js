import React from 'react';

const Book = ({ book }) => {

    const author = book.volumeInfo.authors[0];
    const title = book.volumeInfo.title;
    const description = book.volumeInfo.description;
    const moreInfo = book.volumeInfo.previewLink;

    return(
        <div className="book">
            <div className="book__info">
                <p className="author">{author}</p>
                <p className="title">{title}</p>
            </div>
            <div className="book__description">
                <p className="description">{description}</p>
                <img src={
                book.volumeInfo.imageLinks === undefined
                ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`} />
            </div>
            <div className="book__link">
                <a href={moreInfo} target="_blank">View in Google Books</a>
            </div>
        </div>
    )
}

export default Book;