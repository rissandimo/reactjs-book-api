import React from 'react';
import './book.css';

const Book = ({ book }) => {

    const authorLength = book.volumeInfo.authors.length; 
    const title = book.volumeInfo.title;
    const description = book.volumeInfo.description;
    const moreInfo = book.volumeInfo.previewLink;

    return(
        <div className="book">
            <div className="book__info">
                <p className="author">{ authorLength > 0 ? book.volumeInfo.authors[0] : '' }</p>
                <p className="title">{title}</p>
            </div>
            <div className="book__description">
                <p className="description">{description}</p>
                <img src={
                book.volumeInfo.imageLinks === undefined
                ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`} alt={title} />
            </div>
            <div className="book__link">
                <a href={moreInfo} target="_blank" rel="noreferrer">View in Google Books</a>
            </div>
        </div>
    )
}

export default Book;