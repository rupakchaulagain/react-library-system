import React from 'react'

import Table from './Table'
import Alert from 'react-bootstrap/Alert';
import store from "../../store";

class AddBookForm extends React.Component {

    constructor(props) {
        super(props);

        const state = store.getState();
        const {bookList} = state.bookList

        this.state = {
            bookName: "",
            bookAuthor: "",
            bookPublishedDate: "",
            bookList: [...bookList],
            submitBtn: 'Add',
            submitFlag: '',
            alertMessage: '',
            alertStatus: false

        }

    }

    handleInputChange = (e) => {

        const {name, value} = e.target

        this.setState({
            [name]: value
        })

    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.submitFlag === '') {

            store.dispatch({
                type:"SUBMIT_FORM",
                payload:{
                    bookName: this.state.bookName,
                    bookAuthor: this.state.bookAuthor,
                    bookPublishedDate: this.state.bookPublishedDate
                }
            })

            this.setState({
                bookName: "",
                bookAuthor: "",
                bookPublishedDate: "",
                alertMessage: "Book is added successfully...",
                alertStatus: true
            });

        }

        //update Logic
        if (this.state.submitFlag === 'U') {

            store.dispatch({
                type:"UPDATE_BOOK",
                payload:{
                    currentIndex: this.state.currentIndex,
                    bookName: this.state.bookName,
                    bookAuthor: this.state.bookAuthor,
                    bookPublishedDate: this.state.bookPublishedDate
                }
            })

            this.setState({
                bookName: "",
                bookAuthor: "",
                bookPublishedDate: "",
                submitBtn: 'Add',
                submitFlag: '',
                alertMessage: "Book is updated successfully...",
                alertStatus: true

            });

        }

    };

    editBook = (index) => {

        let book = this.state.bookList[index];

        this.setState({
            bookName: book.bookName,
            bookAuthor: book.bookAuthor,
            bookPublishedDate: book.bookPublishedDate,
            alertStatus: false,
            submitBtn: 'Update',
            submitFlag: 'U',
            currentIndex: index
        });

    }

    deleteBook = index => {

        store.dispatch({
            type:"DELETE_BOOK",
            payload:{
                currentIndex: index
            }
        })


        this.setState({
            bookName: "",
            bookAuthor: "",
            bookPublishedDate: "",
            submitBtn: 'Add',
            submitFlag: '',
            alertMessage: "Book is deleted successfully...",
            alertStatus: true

        });
    }

    closeAlert = () => {
        this.setState({
            alertStatus: false
        });

    }

    componentDidMount() {
        setTimeout(() => this.setState({
            alertStatus: false
        }), 4000);
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">

                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" className="form-control" placeholder="Enter Book Name"
                                       required="required"
                                       name="bookName" value={this.state.bookName} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label>Author*</label>
                                <input type="text" className="form-control" placeholder="Enter Author Name"
                                       required="required"
                                       name="bookAuthor" value={this.state.bookAuthor}
                                       onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <label>Published Date*</label>
                                <input type="text" className="form-control" placeholder="Enter Published Date"
                                       required="required"
                                       name="bookPublishedDate" value={this.state.bookPublishedDate}
                                       onChange={this.handleInputChange}/>
                            </div>

                            <button type="submit" className="btn btn-primary">{this.state.submitBtn}</button>
                        </form>
                        <br></br>

                    </div>
                    <div className="col-sm-8">

                        {this.state.alertStatus ? (
                            <Alert variant="success" onClose={this.closeAlert} dismissible>
                                <Alert.Heading>Success Alert</Alert.Heading>
                                <p>
                                    {this.state.alertMessage}
                                </p>
                            </Alert>
                        ) : ""

                        }

                    </div>

                </div>

                <div className="row">
                    <Table bookList={this.state.bookList}
                           deleteBook={this.deleteBook}
                           editBook={this.editBook}/>

                </div>
            </div>

        )
            ;

    }

}

export default AddBookForm;