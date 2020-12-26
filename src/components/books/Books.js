import React from 'react';

import { connect } from 'react-redux';

import Book from '../Book';

const Books = ({ books }) => {
    return(
    <div className="books">
    {
        books ? books
        .filter(book => book.volumeInfo.authors.length > 0)
        .map(book => {
            return <Book key={book.id} book={book} />
        }) : ''
    }
    </div>

    )
}

const mapStateToProps = state => ({
    books: state.book.books
})

export default connect(mapStateToProps)(Books);