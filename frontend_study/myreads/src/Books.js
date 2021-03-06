import React from 'react';

class Books extends React.Component {
    constructor () {
        super();
        this.state = { shelf: 'none' };
    }

    changeBook (value) {
        const { updateBook } = this.props;
        updateBook(this.props, value);
        this.setState({ shelf: value });
    };

    componentDidMount () {
        const { shelf } = this.props;
        this.setState({ shelf });
    };

    render () {
        const { title, authors, imageLinks } = this.props;
        const { thumbnail } = imageLinks ? imageLinks : 'http://via.placeholder.com/128x193';
        const { shelf } = this.state;
        const bookCoverStyle = {
            width: 128,
            height: 193,
            backgroundImage: `url("${ thumbnail }")`
        };

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ bookCoverStyle }></div>
                    <div className="book-shelf-changer">
                        <select
                            value={ shelf }
                            onChange={ (event) => this.changeBook(event.target.value) }
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors }</div>
            </div>
        );
    }
}

export default Books;
