import React from 'react'
import AssignBookTable from './AssignBookTable'
import store from "../../store";

class AssignBookForm extends React.Component {

    constructor(props) {
        super(props);

        const state = store.getState();
        const {bookCategory} = state.bookCategory
        const {categoryList} = state.categoryList

        this.state = {
            bookName: '',
            bookCategoryId: '',
            bookCategoryValue: '',
            bookCategory: [...bookCategory],
            categoryList: [...categoryList],
            filteredList: null,
            bookCategorySearch: '',

        }

    }

    handleInputChange = (e) => {

        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let categoryType = "";
        this.state.bookCategory.map((category, index) => {

            if (category.key === parseInt(this.state.bookCategoryId)) {
                categoryType = category.value;
            }
        })

        store.dispatch({
            type: "ASSIGN_BOOK",
            payload: {
                bookName: this.state.bookName,
                bookCategoryId: this.state.bookCategoryId,
                bookCategoryValue: categoryType
            }
        })

        this.setState({
            bookName: '',
            bookCategoryId: '',
            bookCategoryValue: ''
        });

    };

    filterBookCategory = (e) => {

        const {name, value} = e.target

        this.setState({
            [name]: value
        })

        console.log(name + ":" + value)
        let categoryList = [...this.state?.categoryList];
        let filteredList=[]

        if (value === '-1') {

            this.setState({
                filteredList: null,
                bookName: '',
                bookCategoryId: '',
                bookCategoryValue: '',
                bookCategory: this.state.bookCategory
            });

        } else {

            categoryList.map((category, index) => {

                if (category.bookCategoryId === value) {

                    console.log("Matched Category..." + category.value)

                    filteredList.push({
                        bookName: category.bookName,
                        bookCategoryId: category.key,
                        bookCategoryValue: category.bookCategoryValue
                    });
                }
            })

            this.setState({
                filteredList,
                bookName: '',
                bookCategoryId: '',
                bookCategoryValue: '',
                bookCategory: this.state.bookCategory
            });

        }

    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Book Name:</label>
                        <input type="text" className="form-control" placeholder="Enter Book Name" required="required"
                               name="bookName" value={this.state.bookName} onChange={this.handleInputChange}
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label>Book Category:</label>

                        <select className="form-control" name="bookCategoryId" required="required"
                                onClick={this.handleInputChange}>

                            {this.state.bookCategory?.map((category, index) => {
                                return (
                                    <option value={category.key}>{category.value}</option>
                                )
                            })}

                        </select>

                    </div>

                    <button type="submit" className="btn btn-primary">Assign</button>
                </form>

                <br></br>

                <AssignBookTable
                    bookCategorySearch={this.state.bookCategorySearch}
                    categoryList={this.state.categoryList}
                    filteredList={this.state.filteredList}
                    bookCategory={this.state.bookCategory}
                    filterBookCategory={this.filterBookCategory}
                />

            </div>

        )
    }
}

export default AssignBookForm;