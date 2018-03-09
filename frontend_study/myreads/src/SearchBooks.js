import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Books from './Books';

class SearchBooks extends React.Component {

    constructor () {
        super();
        this.state = {
            query: '',
            books: []
        };
    }

    updateQuery = (query) => {
        const { listBooks } = this.props;

        this.setState({ query: query });
        const trimmedQuery = query.trim();
        if (trimmedQuery === '') {
            return;
        }
        BooksAPI.search(trimmedQuery, 10).then((response) => {
            const displayBooks = response && !response.hasOwnProperty('error') ? response : [];
            if (displayBooks && displayBooks.length) {
                const books = response.map((book) => {
                    const libBook = listBooks.find((libBook) => libBook.id === book.id);
                    const shelf = libBook ? libBook.shelf : 'none';
                    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193';
                    return {
                        id: book.id,
                        shelf: shelf,
                        authors: book.authors,
                        title: book.title,
                        imageLinks: {
                            thumbnail: thumbnail
                        }
                    };
                });
                this.setState({ books });
            } else if (displayBooks.length === 0) {
                alert("No Result! Please Input Again!")
            }
        });
    };

    render () {
        const { books } = this.state;
        const { updateBook } = this.props;

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search"
              >
              Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search by title or author"
                    onKeyPress={ e => {if (e.key === "Enter") {
                        this.updateQuery(e.target.value);
                    } } }
                    // onChange={ (event) => this.updateQuery(event.target.value) }
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {
                        books.map((book) => (
                            <li key={ book.id }>
                                <Books
                                    id={ book.id }
                                    shelf={ book.shelf }
                                    authors={ book.authors }
                                    title={ book.title }
                                    imageLinks={ book.imageLinks }
                                    updateBook={ updateBook }
                                />
                            </li>
                        ))
                    }
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchBooks;
